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
  // Operations Description:
  operationsDescription: z.string(),
  activeOwners: z.enum(['1', '2', '3', '4', '5', 'none']),
  // Coverage Information:
  currentCoverage: z.enum(['yes', 'no']),
  currentCoverageDetails: z.string().optional(),
  coverageLimits: z.enum(['300000', '500000', '1000000', '2000000', 'other']),
  specialCoverages: z.enum(['yes', 'no']),
  specialCoveragesDescription: z.string().optional(),
  
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
      // Operations Description
      operationsDescription: '',
      activeOwners: 'none',
      // Coverage Information
      currentCoverage: 'no',
      currentCoverageDetails: '',
      coverageLimits: '1000000',
      specialCoverages: 'no',
      specialCoveragesDescription: '',
      
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