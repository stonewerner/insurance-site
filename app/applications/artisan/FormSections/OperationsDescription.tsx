import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

import { z } from 'zod';
import { UseFormReturn } from 'react-hook-form';
import { formSchema } from '../page';


// Define the shape of your form values
type FormValues = z.infer<typeof formSchema>;

interface OperationsDescriptionProps {
  form: UseFormReturn<FormValues>;
}

export default function OperationsDescription({ form }: OperationsDescriptionProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">3. Describe your operations</h2>
      
      <FormField
        control={form.control}
        name="operationsDescription"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Operations Description</FormLabel>
            <FormControl>
              <Textarea {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="activeOwners"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Number of owners, officers, and partners active at job sites or performing supervisory duties</FormLabel>
            <FormControl>
              <RadioGroup onValueChange={field.onChange} defaultValue={field.value}>
                {['1', '2', '3', '4', '5', 'none'].map((value) => (
                  <FormItem key={value} className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value={value} />
                    </FormControl>
                    <FormLabel className="font-normal">{value}</FormLabel>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}