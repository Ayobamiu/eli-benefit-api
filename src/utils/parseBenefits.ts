import { BenefitResponse, StediAPIResponse } from "../interfaces/types";

export function extractBenefitsInfo(
  response: StediAPIResponse
): BenefitResponse {
  // Filter benefits based on relevant service codes, focusing only on PCP-related entries (STC 98)
  const filteredBenefits = response.benefitsInformation.filter((benefit) => {
    // Check for PCP service: "PCP" and "Primary Care Physician" in the description for STC 98
    const isPCP =
      benefit.serviceTypeCodes?.includes("98") &&
      benefit.additionalInformation?.some(
        (info) =>
          info.description.includes("Primary Care Physician") ||
          info.description.includes("Patient's Primary Care Physician")
      );
    return isPCP;
  });

  // Aggregate or select the highest values where needed
  const coPay = extractBenefitAmount(filteredBenefits, "B");
  const coInsurance = extractBenefitPercent(filteredBenefits, "A");
  const individualDeductible = extractBenefitAmount(
    filteredBenefits,
    "C",
    "IND"
  );
  const familyDeductible = extractBenefitAmount(filteredBenefits, "C", "FAM");
  const remainingIndividualDeductible = extractRemainingAmount(
    filteredBenefits,
    "C",
    "IND"
  );
  const remainingFamilyDeductible = extractRemainingAmount(
    filteredBenefits,
    "C",
    "FAM"
  );
  const outOfPocketMax = extractBenefitAmount(filteredBenefits, "G");
  const remainingOutOfPocketMax = extractRemainingAmount(filteredBenefits, "G");
  const deductibleApplies = checkDeductibleApplies(filteredBenefits);

  return {
    coPay,
    coInsurance,
    individualDeductible,
    familyDeductible,
    remainingIndividualDeductible,
    remainingFamilyDeductible,
    outOfPocketMax,
    remainingOutOfPocketMax,
    deductibleApplies,
  };
}

// Helper function to extract the benefit amount for a specific code and coverage level
function extractBenefitAmount(
  benefitsInformation: any[],
  code: string,
  coverageLevel?: string
): number {
  const benefits = benefitsInformation.filter(
    (benefit) =>
      benefit.code === code &&
      (!coverageLevel || benefit.coverageLevelCode === coverageLevel)
  );

  const amounts = benefits.map((benefit) =>
    parseFloat(benefit.benefitAmount || "0")
  );
  return amounts.length ? Math.max(...amounts) : 0;
}

// Helper function to extract the benefit percent for a specific code
function extractBenefitPercent(
  benefitsInformation: any[],
  code: string
): number {
  const benefits = benefitsInformation.filter(
    (benefit) => benefit.code === code
  );

  const percents = benefits.map((benefit) =>
    parseFloat(benefit.benefitPercent || "0")
  );
  return percents.length ? Math.max(...percents) : 0; // Choose the highest if there are multiple
}

// Helper function to extract the remaining benefit amount (for "Remaining" time qualifier)
function extractRemainingAmount(
  benefitsInformation: any[],
  code: string,
  coverageLevel?: string
): number {
  const benefits = benefitsInformation.filter(
    (benefit) =>
      benefit.code === code &&
      benefit.timeQualifierCode === "29" &&
      (!coverageLevel || benefit.coverageLevelCode === coverageLevel)
  );

  const amounts = benefits.map((benefit) =>
    parseFloat(benefit.benefitAmount || "0")
  );
  return amounts.length ? Math.max(...amounts) : 0; // Choose the highest if there are multiple
}

// Helper function to check if the deductible applies based on the benefit data
function checkDeductibleApplies(benefitsInformation: any[]): boolean {
  return benefitsInformation.some(
    (benefit) =>
      benefit.code === "C" && benefit.inPlanNetworkIndicatorCode === "Y"
  );
}
