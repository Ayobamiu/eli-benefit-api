import { StediAPIResponse } from "../interfaces/types";

export const mockStediResponse: StediAPIResponse = {
  benefitsInformation: [
    {
      code: "L",
      name: "Primary Care Provider",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: ["30"],
      serviceTypes: ["Health Benefit Plan Coverage"],
      insuranceTypeCode: "PS",
      insuranceType: "Point of Service (POS)",
      benefitsRelatedEntity: {
        entityIdentifier: "Primary Care Provider",
        entityType: "Non-Person Entity",
        entityName: "PCP SELECTION NOT REQUIRED",
      },
      benefitsRelatedEntities: [
        {
          entityIdentifier: "Primary Care Provider",
          entityType: "Non-Person Entity",
          entityName: "PCP SELECTION NOT REQUIRED",
        },
      ],
    },
    {
      code: "W",
      name: "Other Source of Data",
      benefitsRelatedEntity: {
        entityIdentifier: "Payer",
        entityType: "Non-Person Entity",
        entityName: "Aetna",
        address: {
          address1: "PO Box 14079",
          city: "Lexington",
          state: "KY",
          postalCode: "40512",
        },
      },
      benefitsRelatedEntities: [
        {
          entityIdentifier: "Payer",
          entityType: "Non-Person Entity",
          entityName: "Aetna",
          address: {
            address1: "PO Box 14079",
            city: "Lexington",
            state: "KY",
            postalCode: "40512",
          },
        },
      ],
    },
    {
      code: "1",
      name: "Active Coverage",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: ["30"],
      serviceTypes: ["Health Benefit Plan Coverage"],
      insuranceTypeCode: "PS",
      insuranceType: "Point of Service (POS)",
      planCoverage: "OA Managed Choice POS",
    },
    {
      code: "C",
      name: "Deductible",
      coverageLevelCode: "IND",
      coverageLevel: "Individual",
      serviceTypeCodes: ["30"],
      serviceTypes: ["Health Benefit Plan Coverage"],
      timeQualifierCode: "23",
      timeQualifier: "Calendar Year",
      benefitAmount: "0",
      inPlanNetworkIndicatorCode: "Y",
      inPlanNetworkIndicator: "Yes",
      benefitsDateInformation: {
        planBegin: "20250101",
      },
    },
    {
      code: "C",
      name: "Deductible",
      coverageLevelCode: "IND",
      coverageLevel: "Individual",
      serviceTypeCodes: ["30"],
      serviceTypes: ["Health Benefit Plan Coverage"],
      timeQualifierCode: "29",
      timeQualifier: "Remaining",
      benefitAmount: "0",
      inPlanNetworkIndicatorCode: "Y",
      inPlanNetworkIndicator: "Yes",
    },
    {
      code: "G",
      name: "Out of Pocket (Stop Loss)",
      coverageLevelCode: "IND",
      coverageLevel: "Individual",
      serviceTypeCodes: ["30"],
      serviceTypes: ["Health Benefit Plan Coverage"],
      timeQualifierCode: "23",
      timeQualifier: "Calendar Year",
      benefitAmount: "4500",
      inPlanNetworkIndicatorCode: "Y",
      inPlanNetworkIndicator: "Yes",
      additionalInformation: [
        {
          description: "All Other In-Network Providers",
        },
        {
          description: "INT MED AND RX",
        },
      ],
    },
    {
      code: "G",
      name: "Out of Pocket (Stop Loss)",
      coverageLevelCode: "IND",
      coverageLevel: "Individual",
      serviceTypeCodes: ["30"],
      serviceTypes: ["Health Benefit Plan Coverage"],
      timeQualifierCode: "29",
      timeQualifier: "Remaining",
      benefitAmount: "4222.91",
      inPlanNetworkIndicatorCode: "Y",
      inPlanNetworkIndicator: "Yes",
    },
    {
      code: "C",
      name: "Deductible",
      coverageLevelCode: "IND",
      coverageLevel: "Individual",
      serviceTypeCodes: ["30"],
      serviceTypes: ["Health Benefit Plan Coverage"],
      timeQualifierCode: "23",
      timeQualifier: "Calendar Year",
      benefitAmount: "3000",
      inPlanNetworkIndicatorCode: "N",
      inPlanNetworkIndicator: "No",
      benefitsDateInformation: {
        planBegin: "20250101",
      },
      additionalInformation: [
        {
          description: "DED INCLUDED IN OOP",
        },
      ],
    },
    {
      code: "C",
      name: "Deductible",
      coverageLevelCode: "IND",
      coverageLevel: "Individual",
      serviceTypeCodes: ["30"],
      serviceTypes: ["Health Benefit Plan Coverage"],
      timeQualifierCode: "29",
      timeQualifier: "Remaining",
      benefitAmount: "3000",
      inPlanNetworkIndicatorCode: "N",
      inPlanNetworkIndicator: "No",
    },
    {
      code: "G",
      name: "Out of Pocket (Stop Loss)",
      coverageLevelCode: "IND",
      coverageLevel: "Individual",
      serviceTypeCodes: ["30"],
      serviceTypes: ["Health Benefit Plan Coverage"],
      timeQualifierCode: "23",
      timeQualifier: "Calendar Year",
      benefitAmount: "9000",
      inPlanNetworkIndicatorCode: "N",
      inPlanNetworkIndicator: "No",
      additionalInformation: [
        {
          description: "INT MED AND RX",
        },
      ],
    },
    {
      code: "G",
      name: "Out of Pocket (Stop Loss)",
      coverageLevelCode: "IND",
      coverageLevel: "Individual",
      serviceTypeCodes: ["30"],
      serviceTypes: ["Health Benefit Plan Coverage"],
      timeQualifierCode: "29",
      timeQualifier: "Remaining",
      benefitAmount: "9000",
      inPlanNetworkIndicatorCode: "N",
      inPlanNetworkIndicator: "No",
    },
    {
      code: "F",
      name: "Limitations",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: ["30"],
      serviceTypes: ["Health Benefit Plan Coverage"],
      inPlanNetworkIndicatorCode: "W",
      inPlanNetworkIndicator: "Not Applicable",
      additionalInformation: [
        {
          description:
            "This plan may require precert for certain services. To check if one is required please refer to the Code Search Tool on the Aetna website or submit a Precert transaction.",
        },
      ],
    },
    {
      code: "F",
      name: "Limitations",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: ["30"],
      serviceTypes: ["Health Benefit Plan Coverage"],
      additionalInformation: [
        {
          description:
            "Plan includes NAP, but program limitations may apply in relation to Third Party Discount Networks. Final determination is made at the time of claim processing.",
        },
        {
          description:
            "Our records indicate the provider ID you entered is participating in this patient's network.",
        },
        {
          description: "COMMERCIAL",
        },
      ],
    },
    {
      code: "H",
      name: "Unlimited",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: ["30"],
      serviceTypes: ["Health Benefit Plan Coverage"],
    },
    {
      code: "1",
      name: "Active Coverage",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: [
        "33",
        "86",
        "98",
        "50",
        "UC",
        "48",
        "1",
        "47",
        "MH",
        "AL",
        "88",
      ],
      serviceTypes: [
        "Chiropractic",
        "Emergency Services",
        "Professional (Physician) Visit - Office",
        "Hospital - Outpatient",
        "Urgent Care",
        "Hospital - Inpatient",
        "Medical Care",
        "Hospital",
        "Mental Health",
        "Vision (Optometry)",
        "Pharmacy",
      ],
    },
    {
      code: "A",
      name: "Co-Insurance",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: ["33"],
      serviceTypes: ["Chiropractic"],
      benefitPercent: "0",
      inPlanNetworkIndicatorCode: "Y",
      inPlanNetworkIndicator: "Yes",
      additionalInformation: [
        {
          description: "All Other In-Network Providers",
        },
        {
          description: "Chiropractor Visit or Evaluation",
        },
        {
          description: "Lab Performed by Chiropractor",
        },
        {
          description: "Xray by Chiropractor",
        },
        {
          description: "Manipulation by Chiropractor",
        },
      ],
      eligibilityAdditionalInformation: {
        codeListQualifierCode: "ZZ",
        codeListQualifier: "Mutually Defined",
        industryCode: "11",
        industry: "Office",
      },
      eligibilityAdditionalInformationList: [
        {
          codeListQualifierCode: "ZZ",
          codeListQualifier: "Mutually Defined",
          industryCode: "11",
          industry: "Office",
        },
      ],
    },
    {
      code: "A",
      name: "Co-Insurance",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: ["86"],
      serviceTypes: ["Emergency Services"],
      benefitPercent: "0",
      inPlanNetworkIndicatorCode: "Y",
      inPlanNetworkIndicator: "Yes",
      additionalInformation: [
        {
          description: "All Other In-Network Providers",
        },
        {
          description: "Emergency Room Physician",
        },
        {
          description: "Emergency use of Emergency Room",
        },
      ],
    },
    {
      code: "A",
      name: "Co-Insurance",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: ["98"],
      serviceTypes: ["Professional (Physician) Visit - Office"],
      benefitPercent: "0",
      inPlanNetworkIndicatorCode: "Y",
      inPlanNetworkIndicator: "Yes",
      additionalInformation: [
        {
          description: "All Other In-Network Providers",
        },
        {
          description: "GYN Visit",
        },
        {
          description: "Specialist Visit or Evaluation",
        },
        {
          description: "Primary Care Visit or Evaluation",
        },
      ],
      eligibilityAdditionalInformation: {
        codeListQualifierCode: "ZZ",
        codeListQualifier: "Mutually Defined",
        industryCode: "11",
        industry: "Office",
      },
      eligibilityAdditionalInformationList: [
        {
          codeListQualifierCode: "ZZ",
          codeListQualifier: "Mutually Defined",
          industryCode: "11",
          industry: "Office",
        },
      ],
    },
    {
      code: "A",
      name: "Co-Insurance",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: ["98"],
      serviceTypes: ["Professional (Physician) Visit - Office"],
      benefitPercent: "0",
      inPlanNetworkIndicatorCode: "Y",
      inPlanNetworkIndicator: "Yes",
      additionalInformation: [
        {
          description: "All Other In-Network Providers",
        },
        {
          description: "Walk In Clinic Visit",
        },
        {
          description: "Telemedicine General Medicine Visit",
        },
        {
          description: "Telemedicine Specialist Visit",
        },
      ],
    },
    {
      code: "A",
      name: "Co-Insurance",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: ["50"],
      serviceTypes: ["Hospital - Outpatient"],
      benefitPercent: "0.2",
      inPlanNetworkIndicatorCode: "Y",
      inPlanNetworkIndicator: "Yes",
      additionalInformation: [
        {
          description: "All Other In-Network Providers",
        },
        {
          description: "Surgery,COINS APPLIES TO OUT OF POCKET",
        },
      ],
      eligibilityAdditionalInformation: {
        codeListQualifierCode: "ZZ",
        codeListQualifier: "Mutually Defined",
        industryCode: "22",
        industry: "Outpatient Hospital",
      },
      eligibilityAdditionalInformationList: [
        {
          codeListQualifierCode: "ZZ",
          codeListQualifier: "Mutually Defined",
          industryCode: "22",
          industry: "Outpatient Hospital",
        },
      ],
    },
    {
      code: "A",
      name: "Co-Insurance",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: ["UC", "86"],
      serviceTypes: ["Urgent Care", "Emergency Services"],
      benefitPercent: "0",
      inPlanNetworkIndicatorCode: "Y",
      inPlanNetworkIndicator: "Yes",
      additionalInformation: [
        {
          description: "All Other In-Network Providers",
        },
        {
          description: "Urgent Care",
        },
      ],
    },
    {
      code: "A",
      name: "Co-Insurance",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: ["48"],
      serviceTypes: ["Hospital - Inpatient"],
      benefitPercent: "0.2",
      inPlanNetworkIndicatorCode: "Y",
      inPlanNetworkIndicator: "Yes",
      additionalInformation: [
        {
          description: "All Other In-Network Providers",
        },
        {
          description: "Medical Ancillary,COINS APPLIES TO OUT OF POCKET",
        },
        {
          description:
            "Semi Private Room and Board,COINS APPLIES TO OUT OF POCKET",
        },
        {
          description: "Intensive Care,COINS APPLIES TO OUT OF POCKET",
        },
      ],
    },
    {
      code: "B",
      name: "Co-Payment",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: ["33"],
      serviceTypes: ["Chiropractic"],
      benefitAmount: "70",
      inPlanNetworkIndicatorCode: "Y",
      inPlanNetworkIndicator: "Yes",
      additionalInformation: [
        {
          description: "All Other In-Network Providers",
        },
        {
          description: "Chiropractor Visit or Evaluation,COPAY INCLUDED IN OOP",
        },
        {
          description: "Lab Performed by Chiropractor,COPAY INCLUDED IN OOP",
        },
        {
          description: "Xray by Chiropractor,COPAY INCLUDED IN OOP",
        },
        {
          description: "Manipulation by Chiropractor,COPAY INCLUDED IN OOP",
        },
      ],
      eligibilityAdditionalInformation: {
        codeListQualifierCode: "ZZ",
        codeListQualifier: "Mutually Defined",
        industryCode: "11",
        industry: "Office",
      },
      eligibilityAdditionalInformationList: [
        {
          codeListQualifierCode: "ZZ",
          codeListQualifier: "Mutually Defined",
          industryCode: "11",
          industry: "Office",
        },
      ],
    },
    {
      code: "B",
      name: "Co-Payment",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: ["86"],
      serviceTypes: ["Emergency Services"],
      benefitAmount: "0",
      inPlanNetworkIndicatorCode: "Y",
      inPlanNetworkIndicator: "Yes",
      additionalInformation: [
        {
          description: "All Other In-Network Providers",
        },
        {
          description: "Emergency Room Physician",
        },
      ],
    },
    {
      code: "B",
      name: "Co-Payment",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: ["86"],
      serviceTypes: ["Emergency Services"],
      benefitAmount: "350",
      inPlanNetworkIndicatorCode: "Y",
      inPlanNetworkIndicator: "Yes",
      additionalInformation: [
        {
          description: "All Other In-Network Providers",
        },
        {
          description: "Emergency use of Emergency Room,COPAY INCLUDED IN OOP",
        },
      ],
    },
    {
      code: "B",
      name: "Co-Payment",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: ["98"],
      serviceTypes: ["Professional (Physician) Visit - Office"],
      benefitAmount: "70",
      inPlanNetworkIndicatorCode: "Y",
      inPlanNetworkIndicator: "Yes",
      additionalInformation: [
        {
          description: "All Other In-Network Providers",
        },
        {
          description: "GYN Visit,COPAY INCLUDED IN OOP",
        },
        {
          description: "Specialist Visit or Evaluation,COPAY INCLUDED IN OOP",
        },
      ],
      eligibilityAdditionalInformation: {
        codeListQualifierCode: "ZZ",
        codeListQualifier: "Mutually Defined",
        industryCode: "11",
        industry: "Office",
      },
      eligibilityAdditionalInformationList: [
        {
          codeListQualifierCode: "ZZ",
          codeListQualifier: "Mutually Defined",
          industryCode: "11",
          industry: "Office",
        },
      ],
    },
    {
      code: "B",
      name: "Co-Payment",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: ["98"],
      serviceTypes: ["Professional (Physician) Visit - Office"],
      benefitAmount: "35",
      inPlanNetworkIndicatorCode: "Y",
      inPlanNetworkIndicator: "Yes",
      additionalInformation: [
        {
          description: "Patient's Primary Care Physician",
        },
        {
          description:
            "GYN Visit by Primary Care Physician,COPAY INCLUDED IN OOP",
        },
      ],
      eligibilityAdditionalInformation: {
        codeListQualifierCode: "ZZ",
        codeListQualifier: "Mutually Defined",
        industryCode: "11",
        industry: "Office",
      },
      eligibilityAdditionalInformationList: [
        {
          codeListQualifierCode: "ZZ",
          codeListQualifier: "Mutually Defined",
          industryCode: "11",
          industry: "Office",
        },
      ],
    },
    {
      code: "B",
      name: "Co-Payment",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: ["98"],
      serviceTypes: ["Professional (Physician) Visit - Office"],
      benefitAmount: "35",
      inPlanNetworkIndicatorCode: "Y",
      inPlanNetworkIndicator: "Yes",
      additionalInformation: [
        {
          description: "All Other In-Network Providers",
        },
        {
          description: "Walk In Clinic Visit,COPAY INCLUDED IN OOP",
        },
        {
          description:
            "Telemedicine General Medicine Visit,COPAY INCLUDED IN OOP",
        },
      ],
    },
    {
      code: "B",
      name: "Co-Payment",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: ["98"],
      serviceTypes: ["Professional (Physician) Visit - Office"],
      benefitAmount: "35",
      inPlanNetworkIndicatorCode: "Y",
      inPlanNetworkIndicator: "Yes",
      additionalInformation: [
        {
          description: "All Other In-Network Providers",
        },
        {
          description: "Primary Care Visit or Evaluation,COPAY INCLUDED IN OOP",
        },
      ],
      eligibilityAdditionalInformation: {
        codeListQualifierCode: "ZZ",
        codeListQualifier: "Mutually Defined",
        industryCode: "11",
        industry: "Office",
      },
      eligibilityAdditionalInformationList: [
        {
          codeListQualifierCode: "ZZ",
          codeListQualifier: "Mutually Defined",
          industryCode: "11",
          industry: "Office",
        },
      ],
    },
    {
      code: "B",
      name: "Co-Payment",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: ["50"],
      serviceTypes: ["Hospital - Outpatient"],
      benefitAmount: "250",
      inPlanNetworkIndicatorCode: "Y",
      inPlanNetworkIndicator: "Yes",
      additionalInformation: [
        {
          description: "All Other In-Network Providers",
        },
        {
          description: "Surgery,COPAY INCLUDED IN OOP",
        },
      ],
      eligibilityAdditionalInformation: {
        codeListQualifierCode: "ZZ",
        codeListQualifier: "Mutually Defined",
        industryCode: "22",
        industry: "Outpatient Hospital",
      },
      eligibilityAdditionalInformationList: [
        {
          codeListQualifierCode: "ZZ",
          codeListQualifier: "Mutually Defined",
          industryCode: "22",
          industry: "Outpatient Hospital",
        },
      ],
    },
    {
      code: "B",
      name: "Co-Payment",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: ["98"],
      serviceTypes: ["Professional (Physician) Visit - Office"],
      benefitAmount: "70",
      inPlanNetworkIndicatorCode: "Y",
      inPlanNetworkIndicator: "Yes",
      additionalInformation: [
        {
          description: "All Other In-Network Providers",
        },
        {
          description: "Telemedicine Specialist Visit,COPAY INCLUDED IN OOP",
        },
      ],
    },
    {
      code: "B",
      name: "Co-Payment",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: ["UC", "86"],
      serviceTypes: ["Urgent Care", "Emergency Services"],
      benefitAmount: "85",
      inPlanNetworkIndicatorCode: "Y",
      inPlanNetworkIndicator: "Yes",
      additionalInformation: [
        {
          description: "All Other In-Network Providers",
        },
        {
          description: "Urgent Care,COPAY INCLUDED IN OOP",
        },
      ],
    },
    {
      code: "B",
      name: "Co-Payment",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: ["48"],
      serviceTypes: ["Hospital - Inpatient"],
      benefitAmount: "0",
      inPlanNetworkIndicatorCode: "Y",
      inPlanNetworkIndicator: "Yes",
      additionalInformation: [
        {
          description: "All Other In-Network Providers",
        },
        {
          description: "Medical Ancillary",
        },
      ],
    },
    {
      code: "B",
      name: "Co-Payment",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: ["48"],
      serviceTypes: ["Hospital - Inpatient"],
      benefitAmount: "1000",
      inPlanNetworkIndicatorCode: "Y",
      inPlanNetworkIndicator: "Yes",
      additionalInformation: [
        {
          description: "All Other In-Network Providers",
        },
        {
          description:
            "Semi Private Room and Board,PER CONFINEMENT,WVD 10DAYS OF PREV EVENT,COPAY INCLUDED IN OOP",
        },
        {
          description:
            "Intensive Care,PER CONFINEMENT,WVD 10DAYS OF PREV EVENT,COPAY INCLUDED IN OOP",
        },
      ],
    },
    {
      code: "A",
      name: "Co-Insurance",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: ["33"],
      serviceTypes: ["Chiropractic"],
      benefitPercent: "0.5",
      inPlanNetworkIndicatorCode: "N",
      inPlanNetworkIndicator: "No",
      additionalInformation: [
        {
          description:
            "Chiropractor Visit or Evaluation,COINS APPLIES TO OUT OF POCKET",
        },
        {
          description:
            "Lab Performed by Chiropractor,COINS APPLIES TO OUT OF POCKET",
        },
        {
          description: "Xray by Chiropractor,COINS APPLIES TO OUT OF POCKET",
        },
        {
          description:
            "Manipulation by Chiropractor,COINS APPLIES TO OUT OF POCKET",
        },
      ],
      eligibilityAdditionalInformation: {
        codeListQualifierCode: "ZZ",
        codeListQualifier: "Mutually Defined",
        industryCode: "11",
        industry: "Office",
      },
      eligibilityAdditionalInformationList: [
        {
          codeListQualifierCode: "ZZ",
          codeListQualifier: "Mutually Defined",
          industryCode: "11",
          industry: "Office",
        },
      ],
    },
    {
      code: "A",
      name: "Co-Insurance",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: ["86"],
      serviceTypes: ["Emergency Services"],
      benefitPercent: "0",
      inPlanNetworkIndicatorCode: "N",
      inPlanNetworkIndicator: "No",
      additionalInformation: [
        {
          description: "Emergency Room Physician",
        },
        {
          description: "Emergency use of Emergency Room",
        },
      ],
    },
    {
      code: "A",
      name: "Co-Insurance",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: ["98"],
      serviceTypes: ["Professional (Physician) Visit - Office"],
      benefitPercent: "0.5",
      inPlanNetworkIndicatorCode: "N",
      inPlanNetworkIndicator: "No",
      additionalInformation: [
        {
          description: "GYN Visit,COINS APPLIES TO OUT OF POCKET",
        },
        {
          description:
            "Specialist Visit or Evaluation,COINS APPLIES TO OUT OF POCKET",
        },
        {
          description:
            "Primary Care Visit or Evaluation,COINS APPLIES TO OUT OF POCKET",
        },
      ],
      eligibilityAdditionalInformation: {
        codeListQualifierCode: "ZZ",
        codeListQualifier: "Mutually Defined",
        industryCode: "11",
        industry: "Office",
      },
      eligibilityAdditionalInformationList: [
        {
          codeListQualifierCode: "ZZ",
          codeListQualifier: "Mutually Defined",
          industryCode: "11",
          industry: "Office",
        },
      ],
    },
    {
      code: "A",
      name: "Co-Insurance",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: ["98"],
      serviceTypes: ["Professional (Physician) Visit - Office"],
      benefitPercent: "0.5",
      inPlanNetworkIndicatorCode: "N",
      inPlanNetworkIndicator: "No",
      additionalInformation: [
        {
          description: "Walk In Clinic Visit,COINS APPLIES TO OUT OF POCKET",
        },
        {
          description:
            "Telemedicine General Medicine Visit,COINS APPLIES TO OUT OF POCKET",
        },
        {
          description:
            "Telemedicine Specialist Visit,COINS APPLIES TO OUT OF POCKET",
        },
      ],
    },
    {
      code: "A",
      name: "Co-Insurance",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: ["50"],
      serviceTypes: ["Hospital - Outpatient"],
      benefitPercent: "0.5",
      inPlanNetworkIndicatorCode: "N",
      inPlanNetworkIndicator: "No",
      additionalInformation: [
        {
          description:
            "Outpatient Surgery Facility,COINS APPLIES TO OUT OF POCKET",
        },
      ],
    },
    {
      code: "A",
      name: "Co-Insurance",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: ["UC", "86"],
      serviceTypes: ["Urgent Care", "Emergency Services"],
      benefitPercent: "0.5",
      inPlanNetworkIndicatorCode: "N",
      inPlanNetworkIndicator: "No",
      additionalInformation: [
        {
          description: "Urgent Care,COINS APPLIES TO OUT OF POCKET",
        },
      ],
    },
    {
      code: "A",
      name: "Co-Insurance",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: ["48"],
      serviceTypes: ["Hospital - Inpatient"],
      benefitPercent: "0.5",
      inPlanNetworkIndicatorCode: "N",
      inPlanNetworkIndicator: "No",
      additionalInformation: [
        {
          description:
            "Semi Private Room and Board,COINS APPLIES TO OUT OF POCKET",
        },
        {
          description: "Intensive Care,COINS APPLIES TO OUT OF POCKET",
        },
      ],
    },
    {
      code: "A",
      name: "Co-Insurance",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: ["48"],
      serviceTypes: ["Hospital - Inpatient"],
      benefitPercent: "0.5",
      inPlanNetworkIndicatorCode: "N",
      inPlanNetworkIndicator: "No",
      additionalInformation: [
        {
          description: "Facility,COINS APPLIES TO OUT OF POCKET",
        },
      ],
      eligibilityAdditionalInformation: {
        codeListQualifierCode: "ZZ",
        codeListQualifier: "Mutually Defined",
        industryCode: "21",
        industry: "Inpatient Hospital",
      },
      eligibilityAdditionalInformationList: [
        {
          codeListQualifierCode: "ZZ",
          codeListQualifier: "Mutually Defined",
          industryCode: "21",
          industry: "Inpatient Hospital",
        },
      ],
    },
    {
      code: "B",
      name: "Co-Payment",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: ["33"],
      serviceTypes: ["Chiropractic"],
      benefitAmount: "0",
      inPlanNetworkIndicatorCode: "N",
      inPlanNetworkIndicator: "No",
      additionalInformation: [
        {
          description: "Chiropractor Visit or Evaluation",
        },
        {
          description: "Lab Performed by Chiropractor",
        },
        {
          description: "Xray by Chiropractor",
        },
        {
          description: "Manipulation by Chiropractor",
        },
      ],
      eligibilityAdditionalInformation: {
        codeListQualifierCode: "ZZ",
        codeListQualifier: "Mutually Defined",
        industryCode: "11",
        industry: "Office",
      },
      eligibilityAdditionalInformationList: [
        {
          codeListQualifierCode: "ZZ",
          codeListQualifier: "Mutually Defined",
          industryCode: "11",
          industry: "Office",
        },
      ],
    },
    {
      code: "B",
      name: "Co-Payment",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: ["86"],
      serviceTypes: ["Emergency Services"],
      benefitAmount: "0",
      inPlanNetworkIndicatorCode: "N",
      inPlanNetworkIndicator: "No",
      additionalInformation: [
        {
          description: "Emergency Room Physician",
        },
      ],
    },
    {
      code: "B",
      name: "Co-Payment",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: ["86"],
      serviceTypes: ["Emergency Services"],
      benefitAmount: "350",
      inPlanNetworkIndicatorCode: "N",
      inPlanNetworkIndicator: "No",
      additionalInformation: [
        {
          description: "Emergency use of Emergency Room,COPAY INCLUDED IN OOP",
        },
      ],
    },
    {
      code: "B",
      name: "Co-Payment",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: ["98"],
      serviceTypes: ["Professional (Physician) Visit - Office"],
      benefitAmount: "0",
      inPlanNetworkIndicatorCode: "N",
      inPlanNetworkIndicator: "No",
      additionalInformation: [
        {
          description: "GYN Visit",
        },
        {
          description: "Specialist Visit or Evaluation",
        },
        {
          description: "Primary Care Visit or Evaluation",
        },
      ],
      eligibilityAdditionalInformation: {
        codeListQualifierCode: "ZZ",
        codeListQualifier: "Mutually Defined",
        industryCode: "11",
        industry: "Office",
      },
      eligibilityAdditionalInformationList: [
        {
          codeListQualifierCode: "ZZ",
          codeListQualifier: "Mutually Defined",
          industryCode: "11",
          industry: "Office",
        },
      ],
    },
    {
      code: "B",
      name: "Co-Payment",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: ["98"],
      serviceTypes: ["Professional (Physician) Visit - Office"],
      benefitAmount: "0",
      inPlanNetworkIndicatorCode: "N",
      inPlanNetworkIndicator: "No",
      additionalInformation: [
        {
          description: "Walk In Clinic Visit",
        },
        {
          description: "Telemedicine General Medicine Visit",
        },
        {
          description: "Telemedicine Specialist Visit",
        },
      ],
    },
    {
      code: "B",
      name: "Co-Payment",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: ["50"],
      serviceTypes: ["Hospital - Outpatient"],
      benefitAmount: "0",
      inPlanNetworkIndicatorCode: "N",
      inPlanNetworkIndicator: "No",
      additionalInformation: [
        {
          description: "Outpatient Surgery Facility",
        },
      ],
    },
    {
      code: "B",
      name: "Co-Payment",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: ["UC", "86"],
      serviceTypes: ["Urgent Care", "Emergency Services"],
      benefitAmount: "0",
      inPlanNetworkIndicatorCode: "N",
      inPlanNetworkIndicator: "No",
      additionalInformation: [
        {
          description: "Urgent Care",
        },
      ],
    },
    {
      code: "B",
      name: "Co-Payment",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: ["48"],
      serviceTypes: ["Hospital - Inpatient"],
      benefitAmount: "0",
      inPlanNetworkIndicatorCode: "N",
      inPlanNetworkIndicator: "No",
      additionalInformation: [
        {
          description: "Semi Private Room and Board",
        },
        {
          description: "Intensive Care",
        },
      ],
    },
    {
      code: "B",
      name: "Co-Payment",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: ["48"],
      serviceTypes: ["Hospital - Inpatient"],
      benefitAmount: "0",
      inPlanNetworkIndicatorCode: "N",
      inPlanNetworkIndicator: "No",
      additionalInformation: [
        {
          description: "Facility",
        },
      ],
      eligibilityAdditionalInformation: {
        codeListQualifierCode: "ZZ",
        codeListQualifier: "Mutually Defined",
        industryCode: "21",
        industry: "Inpatient Hospital",
      },
      eligibilityAdditionalInformationList: [
        {
          codeListQualifierCode: "ZZ",
          codeListQualifier: "Mutually Defined",
          industryCode: "21",
          industry: "Inpatient Hospital",
        },
      ],
    },
    {
      code: "F",
      name: "Limitations",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: ["86"],
      serviceTypes: ["Emergency Services"],
      inPlanNetworkIndicatorCode: "N",
      inPlanNetworkIndicator: "No",
      additionalInformation: [
        {
          description: "Emergency Room Physician/Plan Ded Waived",
        },
        {
          description: "Emergency use of Emergency Room/Plan Ded Waived",
        },
      ],
    },
    {
      code: "I",
      name: "Non-Covered",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: ["86"],
      serviceTypes: ["Emergency Services"],
      inPlanNetworkIndicatorCode: "W",
      inPlanNetworkIndicator: "Not Applicable",
      additionalInformation: [
        {
          description: "Non Emergency use of Emergency Room/EXCLUSION",
        },
      ],
    },
    {
      code: "I",
      name: "Non-Covered",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: ["UC", "86"],
      serviceTypes: ["Urgent Care", "Emergency Services"],
      inPlanNetworkIndicatorCode: "W",
      inPlanNetworkIndicator: "Not Applicable",
      additionalInformation: [
        {
          description:
            "Non Urgent Services at an Urgent Care Facility/EXCLUSION",
        },
      ],
    },
    {
      code: "I",
      name: "Non-Covered",
      coverageLevelCode: "EMP",
      coverageLevel: "Employee Only",
      serviceTypeCodes: ["98"],
      serviceTypes: ["Professional (Physician) Visit - Office"],
      inPlanNetworkIndicatorCode: "W",
      inPlanNetworkIndicator: "Not Applicable",
      additionalInformation: [
        {
          description:
            "Teladoc Virtual Primary Care General Medicine/EXCLUSION",
        },
      ],
    },
  ],
};
const y = [
  {
    code: "B",
    name: "Co-Payment",
    coverageLevelCode: "EMP",
    coverageLevel: "Employee Only",
    serviceTypeCodes: ["98"],
    serviceTypes: ["Professional (Physician) Visit - Office"],
    benefitAmount: "35",
    inPlanNetworkIndicatorCode: "Y",
    inPlanNetworkIndicator: "Yes",
    additionalInformation: [
      {
        description: "Patient's Primary Care Physician",
      },
      {
        description:
          "GYN Visit by Primary Care Physician,COPAY INCLUDED IN OOP",
      },
    ],
    eligibilityAdditionalInformation: {
      codeListQualifierCode: "ZZ",
      codeListQualifier: "Mutually Defined",
      industryCode: "11",
      industry: "Office",
    },
    eligibilityAdditionalInformationList: [
      {
        codeListQualifierCode: "ZZ",
        codeListQualifier: "Mutually Defined",
        industryCode: "11",
        industry: "Office",
      },
    ],
  },
  {
    code: "B",
    name: "Co-Payment",
    coverageLevelCode: "EMP",
    coverageLevel: "Employee Only",
    serviceTypeCodes: ["98"],
    serviceTypes: ["Professional (Physician) Visit - Office"],
    benefitAmount: "70",
    inPlanNetworkIndicatorCode: "Y",
    inPlanNetworkIndicator: "Yes",
    additionalInformation: [
      {
        description: "All Other In-Network Providers",
      },
      {
        description: "GYN Visit,COPAY INCLUDED IN OOP",
      },
      {
        description: "Specialist Visit or Evaluation,COPAY INCLUDED IN OOP",
      },
    ],
    eligibilityAdditionalInformation: {
      codeListQualifierCode: "ZZ",
      codeListQualifier: "Mutually Defined",
      industryCode: "11",
      industry: "Office",
    },
    eligibilityAdditionalInformationList: [
      {
        codeListQualifierCode: "ZZ",
        codeListQualifier: "Mutually Defined",
        industryCode: "11",
        industry: "Office",
      },
    ],
  },
];
