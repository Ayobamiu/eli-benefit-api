import { z } from "zod";

export type BenefitResponse = {
  coPay: number;
  coInsurance: number;
  individualDeductible: number;
  remainingIndividualDeductible: number;
  familyDeductible: number;
  remainingFamilyDeductible: number;
  outOfPocketMax: number;
  remainingOutOfPocketMax: number;
  deductibleApplies: boolean;
};

export type PayerData = {
  primaryPayerId: string;
  displayName: string;
  [key: string]: any;
};

export const DaylightEBAPIPayloadSchema = z.object({
  firstName: z.string({ message: "First name is required" }).nonempty(),
  lastName: z.string({ message: "Last name is required" }).nonempty(),
  payerMemberId: z
    .string({ message: "Payer member ID is required" })
    .nonempty(),
  payerName: z.string({ message: "Payer name is required" }).nonempty(),
  dateOfBirth: z.date({ invalid_type_error: "That's not a date!" }).optional(),
});

export type DaylightEBAPIPayload = z.infer<typeof DaylightEBAPIPayloadSchema>;

export interface StediAPIResponse {
  benefitsInformation: Array<{
    code: string; // Benefit code
    name: string; // Benefit name
    planCoverage?: string;
    timeQualifierCode?: string;
    timeQualifier?: string;
    coverageLevelCode?: string; // Coverage level code (e.g., "EMP")
    coverageLevel?: string; // Coverage level (e.g., "Employee Only")
    serviceTypeCodes?: string[]; // Service type codes
    serviceTypes?: string[]; // Service types
    insuranceTypeCode?: string; // Insurance type code (optional)
    insuranceType?: string; // Insurance type (optional)
    benefitsRelatedEntity?: {
      entityIdentifier: string; // Related entity identifier (e.g., "Primary Care Provider")
      entityType: string; // Related entity type (e.g., "Non-Person Entity")
      entityName: string; // Related entity name
      address?: {
        address1?: string;
        city?: string;
        state?: string;
        postalCode?: string;
      };
    };
    benefitsRelatedEntities?: Array<{
      entityIdentifier: string;
      entityType: string;
      entityName: string;
      address?: {
        address1?: string;
        city?: string;
        state?: string;
        postalCode?: string;
      };
    }>; // Optional array of related entities
    benefitAmount?: string; // Benefit amount (optional)
    inPlanNetworkIndicatorCode?: string; // In-plan network indicator code (optional)
    inPlanNetworkIndicator?: string; // In-plan network indicator (optional)
    eligibilityAdditionalInformation?: {
      codeListQualifierCode: string; // Qualifier code for additional info
      industryCode: string; // Industry code for additional info
      [key: string]: any;
    }; // Optional eligibility additional information
    eligibilityAdditionalInformationList?: Array<{
      codeListQualifierCode: string;
      industryCode: string;
      [key: string]: any;
    }>; // Optional list of additional eligibility information
    additionalInformation?: Array<{
      description: string;
    }>;
    [key: string]: any;
  }>;

  [key: string]: any;
}
