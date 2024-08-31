"use client"

import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Section, Container } from '@/components/craft';

// Import form section components
import GeneralInformation from './FormSections/GeneralInformation';
import PayrollInformation from './FormSections/PayrollInformation';
import OperationsDescription from './FormSections/OperationsDescription';
import CoverageInformation from './FormSections/CoverageInformation';
import ExperienceAndWork from './FormSections/ExperienceAndWork';
import ProjectInformation from './FormSections/ProjectInformation';
import AdditionalQuestions from './FormSections/AdditionalQuestions';

// Define the form schema
const formSchema = z.object({
  // The schema will be defined in each section component
});

export default function ArtisanGeneralLiabilityForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // Default values will be set in each section component
    },
  });

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