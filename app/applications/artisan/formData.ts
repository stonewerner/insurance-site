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
  expectedAnnualPayroll: z.number().min(0),
  hourlyWage: z.number().min(0),
  grossReceipts: z.object({
    next12Months: z.number().min(0),
    last12Months: z.number().min(0),
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
  yearsExperienceContracting: z.number().min(0),
  yearsExperienceEntity: z.number().min(0),
  workPercentage: z.object({
    residential: z.number().min(0).max(100),
    industrial: z.number().min(0).max(100),
    commercial: z.number().min(0).max(100),
    newConstruction: z.number().min(0).max(100),
    structuralRemodel: z.number().min(0).max(100),
    nonStructuralRemodel: z.number().min(0).max(100),
  }),
  workRole: z.object({
    generalContractor: z.number().min(0).max(100),
    subcontractor: z.number().min(0).max(100),
    constructionManager: z.number().min(0).max(100),
  }),
  // Project Information:
  operatingStates: z.enum(states),
  otherOperatingStates: z.string().optional(),
  largeProject1: z.string(),
  largeProject2: z.string(),
  pastLargeProject1: z.string(),
  pastLargeProject2: z.string(),
  averageJobValue: z.number().min(0),
  newHomesNextYear: z.number().min(0),
  maxNewHomesInYear: z.number().min(0),
  // Additional Information:
  workInvolvingCondos: z.enum(['yes', 'no']),
  workInvolvingApartments: z.enum(['yes', 'no']),
  workInvolvingLargeProjects: z.enum(['yes', 'no']),
  newConstructionFromGround: z.enum(['yes', 'no']),
  newConstructionDetails: z.string().optional(),
  heavyStructuralEngineering: z.enum(['yes', 'no']),
  heavyStructuralEngineeringDescription: z.string().optional(),
  retainingWallHeight: z.number().min(0).optional(),
  roofWork: z.enum(['yes', 'no']),
  roofWorkDescription: z.string().optional(),
  hotTarPercentage: z.number().min(0).max(100),
  torchPercentage: z.number().min(0).max(100),
  totalPercentage: z.number().min(0).max(100),
  constructionManager: z.enum(['yes', 'no']),
  claimsHistory: z.enum(['yes', 'no']),
  claimsDetails: z.string().optional(),
  additionalComments: z.string().optional(),
  
});
