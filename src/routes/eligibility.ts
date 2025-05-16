import { Router } from "express";
import { findPayerByName } from "../utils/findPayerName";
import {
  DaylightEBAPIPayload,
  DaylightEBAPIPayloadSchema,
  PayerData,
} from "../interfaces/types";
import { extractBenefitsInfo } from "../utils/parseBenefits";

const router = Router();
const apiKey = process.env.STEDI_API_KEY || "";

// Helper function for delay
function delayFunction(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

router.post("/", async (req, res) => {
  if (!req.body) {
    res.status(400).json({ error: "Request body is required" });
    return;
  }

  const validation = DaylightEBAPIPayloadSchema.safeParse(req.body);
  if (!validation.success) {
    res.status(400).json({
      error: "Invalid payload",
      details: validation.error.formErrors,
    });
    return;
  }

  const { firstName, lastName, payerMemberId, payerName, dateOfBirth } =
    req.body as DaylightEBAPIPayload;

  const payerData: PayerData | null = findPayerByName(payerName);
  const tradingPartnerServiceId = payerData && payerData.primaryPayerId;
  const tradingPartnerName = payerData && payerData.displayName;

  const body = {
    controlNumber: "123456789",
    tradingPartnerServiceId,
    tradingPartnerName,
    encounter: {
      serviceTypeCodes: ["30"],
    },
    subscriber: {
      dateOfBirth,
      firstName,
      memberId: payerMemberId,
      lastName,
    },
    provider: {
      firstName: "JOHN",
      lastName: "MARTIN",
      npi: "1912007873",
    },
  };

  const options = {
    method: "POST",
    headers: {
      Authorization: apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  async function makeRequest(retries: number = 3, delay: number = 1000) {
    const response = await fetch(
      "https://healthcare.us.stedi.com/2024-04-01/change/medicalnetwork/eligibility/v3",
      options
    );

    const data = await response.json();

    const aaaError = data.subscriber?.aaaErrors?.[0];

    if (!response.ok || data.errors?.length || aaaError) {
      const error = data.errors?.[0];
      const errorCode = error?.code;

      // Retry for rate-limited errors (429) and AAA errors
      if (response.status === 429) {
        // Too many requests, retry with exponential backoff
        if (retries > 0) {
          await delayFunction(delay);
          return makeRequest(retries - 1, delay * 2);
        } else {
          return {
            status: 429,
            message: "Rate limit exceeded, please try again later.",
          };
        }
      }

      // Handle payer system issues (42, 80)
      if ([42, 80].includes(errorCode)) {
        // Temporary issue with payer’s system
        if (retries > 0) {
          await delayFunction(delay);
          return makeRequest(retries - 1, delay * 2);
        } else {
          return {
            status: 500,
            message: "Payer system issue. Please try again later.",
          };
        }
      }

      // Handle invalid participant ID (79)
      if (errorCode === "79") {
        return {
          status: 400,
          message:
            "Invalid Participant ID. Please check the payer configuration.",
        };
      }

      // Handle subscriber not found (75)
      if (errorCode === "75") {
        return {
          status: 404,
          message:
            "Subscriber not found. Please verify the subscriber's details.",
        };
      }

      // Handle AAA errors with detailed descriptions
      if (aaaError) {
        return { status: 400, message: aaaError.possibleResolutions };
      }

      // Other unhandled errors
      return { status: 500, message: "Unexpected error occurred." };
    }

    return { status: 200, data };
  }

  try {
    const result = await makeRequest();
    if (result.status === 200) {
      const data = extractBenefitsInfo(result.data);
      res.status(200).json(data);
    } else {
      res.status(result.status).json({ error: result.message });
    }
  } catch (err) {
    res.status(500).json({ error: "Request failed, please try again later." });
  }
});

export default router;
