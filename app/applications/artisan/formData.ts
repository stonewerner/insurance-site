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

const stringOrNumber = z.union([z.string(), z.number()]).transform((val) => {
  if (typeof val === 'string' && val.trim() === '') return undefined;
  return Number(val) || undefined;
});


// Define the form schema for all the components
export const formSchema = z.object({
  // General Information:
  contractorLicenseNumber: z.string().optional(),
  insuredContactName: z.string().optional(),
  companyName: z.string().optional(),
  phone: z.string().optional(),
  fax: z.string().optional(),
  email: z.string().email().optional(),
  policyTermRequested: z.string().optional(),
  mailingAddress: z.object({
    street: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    zip: z.string().optional(),
  }).optional(),
  premiseAddress: z.object({
    street: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    zip: z.string().optional(),
  }).optional(),
  // Payroll Information:
  jobClass: z.enum(jobClasses).optional(),
  expectedAnnualPayroll: stringOrNumber.optional(),
  hourlyWage: stringOrNumber.optional(),
  grossReceipts: z.object({
    next12Months: stringOrNumber.optional(),
    last12Months: stringOrNumber.optional(),
  }).optional(),
  // Operations Description:
  operationsDescription: z.string().optional(),
  activeOwners: z.enum(['1', '2', '3', '4', '5', 'none']).optional(),
  // Coverage Information:
  currentCoverage: z.enum(['yes', 'no']).optional(),
  currentCoverageDetails: z.string().optional(),
  coverageLimits: z.enum(['300000', '500000', '1000000', '2000000', 'other']).optional(),
  specialCoverages: z.enum(['yes', 'no']).optional(),
  specialCoveragesDescription: z.string().optional(),
  // Experience and Work:
  yearsExperienceContracting: stringOrNumber.optional(),
  yearsExperienceEntity: stringOrNumber.optional(),
  workPercentage: z.object({
    residential: stringOrNumber.optional(),
    industrial: stringOrNumber.optional(),
    commercial: stringOrNumber.optional(),
    newConstruction: stringOrNumber.optional(),
    structuralRemodel: stringOrNumber.optional(),
    nonStructuralRemodel: stringOrNumber.optional(),
  }).optional(),
  workRole: z.object({
    generalContractor: stringOrNumber.optional(),
    subcontractor: stringOrNumber.optional(),
    constructionManager: stringOrNumber.optional(),
  }).optional(),
  // Project Information:
  operatingStates: z.enum(states).optional(),
  otherOperatingStates: z.string().optional(),
  largeProject1: z.string().optional(),
  largeProject2: z.string().optional(),
  pastLargeProject1: z.string().optional(),
  pastLargeProject2: z.string().optional(),
  averageJobValue: stringOrNumber.optional(),
  newHomesNextYear: stringOrNumber.optional(),
  maxNewHomesInYear: stringOrNumber.optional(),
  // Additional Information:
  workInvolvingCondos: z.enum(['yes', 'no']).optional(),
  workInvolvingApartments: z.enum(['yes', 'no']).optional(),
  workInvolvingLargeProjects: z.enum(['yes', 'no']).optional(),
  newConstructionFromGround: z.enum(['yes', 'no']).optional(),
  newConstructionDetails: z.string().optional(),
  heavyStructuralEngineering: z.enum(['yes', 'no']).optional(),
  heavyStructuralEngineeringDescription: z.string().optional(),
  retainingWallHeight: stringOrNumber.optional(),
  roofWork: z.enum(['yes', 'no']).optional(),
  roofWorkDescription: z.string().optional(),
  hotTarPercentage: stringOrNumber.optional(),
  torchPercentage: stringOrNumber.optional(),
  totalPercentage: stringOrNumber.optional(),
  constructionManager: z.enum(['yes', 'no']).optional(),
  claimsHistory: z.enum(['yes', 'no']).optional(),
  claimsDetails: z.string().optional(),
  additionalComments: z.string().optional(),
}).partial();

export type FormValues = z.infer<typeof formSchema>;
