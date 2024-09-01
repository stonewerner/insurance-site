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


import { jobClasses, states, formSchema } from './formData';



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