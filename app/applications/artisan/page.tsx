"use client"

import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"

import { Section, Container } from '@/components/craft';

// Import form section components
import GeneralInformation from './FormSections/GeneralInformation';
import PayrollInformation from './FormSections/PayrollInformation';
import OperationsDescription from './FormSections/OperationsDescription';
import CoverageInformation from './FormSections/CoverageInformation';
import ExperienceAndWork from './FormSections/ExperienceAndWork';
import ProjectInformation from './FormSections/ProjectInformation';
import AdditionalQuestions from './FormSections/AdditionalQuestions';


import { jobClasses, states } from './formData';

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

export default function ArtisanGeneralLiabilityForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // General Information
      contractorLicenseNumber: '',
      insuredContactName: '',
      companyName: '',
      phone: '',
      fax: '',
      email: '',
      policyTermRequested: '',
      mailingAddress: {
        street: '',
        city: '',
        state: '',
        zip: '',
      },
      premiseAddress: {
        street: '',
        city: '',
        state: '',
        zip: '',
      },
      // Payroll Information
      jobClass: jobClasses[0],
      expectedAnnualPayroll: 0,
      hourlyWage: 0,
      grossReceipts: {
        next12Months: 0,
        last12Months: 0,
      },
      // Operations Description
      operationsDescription: '',
      activeOwners: 'none',
      // Coverage Information
      currentCoverage: 'no',
      currentCoverageDetails: '',
      coverageLimits: '1000000',
      specialCoverages: 'no',
      specialCoveragesDescription: '',
      // Experience and Work
      yearsExperienceContracting: 0,
      yearsExperienceEntity: 0,
      workPercentage: {
        residential: 0,
        industrial: 0,
        commercial: 0,
        newConstruction: 0,
        structuralRemodel: 0,
        nonStructuralRemodel: 0,
      },
      workRole: {
        generalContractor: 0,
        subcontractor: 0,
        constructionManager: 0,
      },
      // Project Information
      operatingStates: states[0],
      otherOperatingStates: '',
      largeProject1: '',
      largeProject2: '',
      pastLargeProject1: '',
      pastLargeProject2: '',
      averageJobValue: 0,
      newHomesNextYear: 0,
      maxNewHomesInYear: 0,
      // Additional Information
      workInvolvingCondos: 'no',
      workInvolvingApartments: 'no',
      workInvolvingLargeProjects: 'no',
      newConstructionFromGround: 'no',
      newConstructionDetails: '',
      heavyStructuralEngineering: 'no',
      heavyStructuralEngineeringDescription: '',
      retainingWallHeight: 0,
      roofWork: 'no',
      roofWorkDescription: '',
      hotTarPercentage: 0,
      torchPercentage: 0,
      constructionManager: 'no',
      claimsHistory: 'no',
      claimsDetails: '',
      additionalComments: '',      
  }});

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Handle form submission
    console.log(values);
  }

  return (
    <Section className="pt-24 md:pt-32">
      <Container>
        <h1 className="text-4xl font-bold mb-8">Artisan and General Liability Application</h1>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <GeneralInformation form={form} />
            <PayrollInformation form={form} />
            <OperationsDescription form={form} />
            <CoverageInformation form={form} />
            <ExperienceAndWork form={form} />
            <ProjectInformation form={form} />
            <AdditionalQuestions form={form} />

            <Button type="submit">Submit Application</Button>
          </form>
        </Form>
      </Container>
    </Section>
  );
}