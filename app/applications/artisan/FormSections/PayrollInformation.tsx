import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

import { formSchema } from '../page';
import { jobClasses } from '../formData';

type FormValues = z.infer<typeof formSchema>;

interface PayrollInformationProps {
  form: UseFormReturn<FormValues>;
}



export default function PayrollInformation({ form }: PayrollInformationProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">2. Payroll excluding Owners, Officers & Clerical</h2>
      
      {/* You might want to use a dynamic form here for multiple job classes */}
      <FormField
        control={form.control}
        name="jobClass"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Job Class</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select a job class" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {jobClasses.map((jobClass) => (
                  <SelectItem key={jobClass} value={jobClass}>{jobClass}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="expectedAnnualPayroll"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Expected Annual Payroll</FormLabel>
            <FormControl>
              <Input {...field} type="number" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="hourlyWage"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Hourly Wage</FormLabel>
            <FormControl>
              <Input {...field} type="number" step="0.01" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <h3 className="text-xl font-semibold mt-4 mb-2">Gross receipts for the next 12 months and last 12 months</h3>
      
      <FormField
        control={form.control}
        name="grossReceipts.next12Months"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Next 12 months $</FormLabel>
            <FormControl>
              <Input {...field} type="number" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="grossReceipts.last12Months"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Last 12 months $</FormLabel>
            <FormControl>
              <Input {...field} type="number" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}