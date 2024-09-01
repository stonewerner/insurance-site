import { z } from "zod";

export const jobClasses = [
    "Air Conditioning System Installation",
    "Appliance & Access. Install., Service, Repair",
    // ... add all job classes here
  ] as const;

export const states = ["AK", 
"AL", "AR", "AZ", "CA", "CO", "CT", 
"DC", "DE", "FL", "GA", "HI", "IA", "ID", 
"IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", 
"MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", 
"NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "RI", "SC", 
"SD", "TN", "TX", "UT", "VA", "VT", "WA", "WI", "WV", "WY"] as const;

// How to parse Number from user input:
// z.string().transform((val) => Number(val)),
// instead of z.number().min(0).max(100),


// Define the form schema for all the components
export const formSchema = z.object({
  // General Information:
  contractorLicenseNumber: z.string(),
  insuredContactName: z.string(),
  companyName: z.string(),
  phone: z.string(),
  fax: z.string().optional(),
  email: z.string().email(),
  policyTermRequested: z.string(),
  mailingAddress: z.object({
    street: z.string(),
    city: z.string(),
    state: z.string(),
    zip: z.string(),
  }),
  premiseAddress: z.object({
    street: z.string(),
    city: z.string(),
    state: z.string(),
    zip: z.string(),
  }),
  // Payroll Information:
  jobClass: z.enum(jobClasses),
  expectedAnnualPayroll: z.string().transform((val) => Number(val)),
  hourlyWage: z.string().transform((val) => Number(val)),
  grossReceipts: z.object({
    next12Months: z.string().transform((val) => Number(val)),
    last12Months: z.string().transform((val) => Number(val)),
  }),
  // Operations Description:
  operationsDescription: z.string(),
  activeOwners: z.enum(['1', '2', '3', '4', '5', 'none']),
  // Coverage Information:
  currentCoverage: z.enum(['yes', 'no']),
  currentCoverageDetails: z.string().optional(),
  coverageLimits: z.enum(['300000', '500000', '1000000', '2000000', 'other']),
  specialCoverages: z.enum(['yes', 'no']),
  specialCoveragesDescription: z.string().optional(),
  // Experience and Work:
  yearsExperienceContracting: z.string().transform((val) => Number(val)),
  yearsExperienceEntity: z.string().transform((val) => Number(val)),
  workPercentage: z.object({
    residential: z.string().transform((val) => Number(val)),
    industrial: z.string().transform((val) => Number(val)),
    commercial: z.string().transform((val) => Number(val)),
    newConstruction: z.string().transform((val) => Number(val)),
    structuralRemodel: z.string().transform((val) => Number(val)),
    nonStructuralRemodel: z.string().transform((val) => Number(val)),
  }),
  workRole: z.object({
    generalContractor: z.string().transform((val) => Number(val)),
    subcontractor: z.string().transform((val) => Number(val)),
    constructionManager: z.string().transform((val) => Number(val)),
  }),
  // Project Information:
  operatingStates: z.enum(states),
  otherOperatingStates: z.string().optional(),
  largeProject1: z.string(),
  largeProject2: z.string(),
  pastLargeProject1: z.string(),
  pastLargeProject2: z.string(),
  averageJobValue: z.string().transform((val) => Number(val)),
  newHomesNextYear: z.string().transform((val) => Number(val)),
  maxNewHomesInYear: z.string().transform((val) => Number(val)),
  // Additional Information:
  workInvolvingCondos: z.enum(['yes', 'no']),
  workInvolvingApartments: z.enum(['yes', 'no']),
  workInvolvingLargeProjects: z.enum(['yes', 'no']),
  newConstructionFromGround: z.enum(['yes', 'no']),
  newConstructionDetails: z.string().optional(),
  heavyStructuralEngineering: z.enum(['yes', 'no']),
  heavyStructuralEngineeringDescription: z.string().optional(),
  retainingWallHeight: z.string().transform((val) => Number(val)),
  roofWork: z.enum(['yes', 'no']),
  roofWorkDescription: z.string().optional(),
  hotTarPercentage: z.string().transform((val) => Number(val)),
  torchPercentage: z.string().transform((val) => Number(val)),
  totalPercentage: z.string().transform((val) => Number(val)),
  constructionManager: z.enum(['yes', 'no']),
  claimsHistory: z.enum(['yes', 'no']),
  claimsDetails: z.string().optional(),
  additionalComments: z.string().optional(),
  
});
