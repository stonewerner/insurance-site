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


import { jobClasses, states, formSchema, FormValues } from './formData';



export default function ArtisanGeneralLiabilityForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // General Information
      contractorLicenseNumber: undefined,
      insuredContactName: undefined,
      companyName: undefined,
      phone: undefined,
      fax: undefined,
      email: undefined,
      policyTermRequested: undefined,
      mailingAddress: undefined,
      premiseAddress: undefined,
      // Payroll Information
      jobClass: undefined,
      expectedAnnualPayroll: 0,
      hourlyWage: 0,
      grossReceipts: {
        next12Months: 0,
        last12Months: 0,
      },
      // Operations Description
      operationsDescription: undefined,
      activeOwners: undefined,
      // Coverage Information
      currentCoverage: undefined,
      currentCoverageDetails: undefined,
      coverageLimits: undefined,
      specialCoverages: undefined,
      specialCoveragesDescription: undefined,
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
      operatingStates: undefined,
      otherOperatingStates: undefined,
      largeProject1: undefined,
      largeProject2: undefined,
      pastLargeProject1: undefined,
      pastLargeProject2: undefined,
      averageJobValue: 0,
      newHomesNextYear: 0,
      maxNewHomesInYear: 0,
      // Additional Information
      workInvolvingCondos: undefined,
      workInvolvingApartments: undefined,
      workInvolvingLargeProjects: undefined,
      newConstructionFromGround: undefined,
      newConstructionDetails: undefined,
      heavyStructuralEngineering: undefined,
      heavyStructuralEngineeringDescription: undefined,
      retainingWallHeight: 0,
      roofWork: undefined,
      roofWorkDescription: undefined,
      hotTarPercentage: 0,
      torchPercentage: 0,
      totalPercentage: 0,
      constructionManager: undefined,
      claimsHistory: undefined,
      claimsDetails: undefined,
      additionalComments: undefined,      
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      //console.log(form.formState);
      //console.log(form.formState.errors);
    } catch (error) {
      //console.error("Error in onSubmit:", error);
    }
  }

  return (
    <Section className="pt-24 md:pt-32">
      <Container>
        <h1 className="text-4xl font-bold mb-8">Artisan and General Liability Application</h1>
        
        <Form {...form}>
          <form 
            onSubmit={(e) => {
              e.preventDefault(); // Prevent default form submission
              //console.log("Form state before submission:", form.getValues());
              //console.log("Form errors before submission:", form.formState.errors);
              //console.log("Form is valid:", form.formState.isValid);
              form.handleSubmit(onSubmit)(e);
            }} 
            className="space-y-8"
          >
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