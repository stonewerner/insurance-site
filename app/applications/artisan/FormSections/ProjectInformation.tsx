import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

import { states, formSchema, FormValues } from '../formData';

//type FormValues = z.infer<typeof formSchema>;

interface ProjectInformationProps {
  form: UseFormReturn<FormValues>;
}


export default function ProjectInformation({ form }: ProjectInformationProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Project Information</h2>
      
      <FormField
        control={form.control}
        name="operatingStates"
        render={({ field }) => (
          <FormItem>
            <FormLabel>11. States in which you operate:</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select a state" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {states.map((state) => (
                  <SelectItem key={state} value={state}>{state}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="otherOperatingStates"
        render={({ field }) => (
          <FormItem>
            <FormLabel>If not on the list, enter here:</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <h3 className="text-xl font-semibold mt-6 mb-2">12. Describe your two largest projects currently underway or planned for the next year, including values:</h3>
      
      <FormField
        control={form.control}
        name="largeProject1"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Project 1:</FormLabel>
            <FormControl>
              <Textarea {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="largeProject2"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Project 2:</FormLabel>
            <FormControl>
              <Textarea {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <h3 className="text-xl font-semibold mt-6 mb-2">13. Describe your two largest projects over the past five years, including values:</h3>
      
      <FormField
        control={form.control}
        name="pastLargeProject1"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Project 1:</FormLabel>
            <FormControl>
              <Textarea {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="pastLargeProject2"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Project 2:</FormLabel>
            <FormControl>
              <Textarea {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="averageJobValue"
        render={({ field }) => (
          <FormItem>
            <FormLabel>14. Dollar value of average job completed (Including all materials, labor & equipment):</FormLabel>
            <FormControl>
              <Input {...field} type="number" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="newHomesNextYear"
        render={({ field }) => (
          <FormItem>
            <FormLabel>15a. How many new homes will you build as a general contractor in the next year?</FormLabel>
            <FormControl>
              <Input {...field} type="number" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="maxNewHomesInYear"
        render={({ field }) => (
          <FormItem>
            <FormLabel>15b. What is the greatest number of new homes you have built in any one year?</FormLabel>
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