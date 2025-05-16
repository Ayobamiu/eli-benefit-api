import { Router } from "express";
import { z } from "zod";
import { findPayersByName } from "../utils/findPayerName";
import { PayerData } from "../interfaces/types";

const router = Router();

router.get("/", async (req, res) => {
  if (!req.query.payerName) {
    res.status(400).json({ error: "Payer's name is required as query" });
    return;
  }

  const payerName = req.query.payerName as unknown as string;
  const count = parseInt((req.query.count as unknown as string) || "", 10);

  const querySchema = z.string().nonempty();
  const countSchema = z.number().optional();

  const queryValidation = querySchema.safeParse(payerName);
  const countValidation = countSchema.safeParse(count);

  if (!queryValidation.success) {
    res.status(400).json({
      error: "Invalid query",
      details: queryValidation.error.formErrors,
    });
    return;
  }

  try {
    if (countValidation.success) {
      if (count < 1 || count > 10) {
        res.status(400).json({ error: "Count must be between 1 and 10" });
        return;
      } else {
        const payerData: PayerData[] = findPayersByName(payerName, count);
        res.status(200).json(payerData);
        return;
      }
    }
    const payerData: PayerData[] = findPayersByName(payerName, 4);
    res.status(200).json(payerData);
  } catch (err) {
    res.status(400).json({ error: "Invalid response format" });
  }
});

export default router;
