import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { formSchema } from '../formData';

type FormValues = z.infer<typeof formSchema>;

interface AdditionalQuestionsProps {
  form: UseFormReturn<FormValues>;
}

export default function AdditionalQuestions({ form }: AdditionalQuestionsProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Additional Questions</h2>
      
      <h3 className="text-xl font-semibold mt-6 mb-2">16. The following question applies to work done in any capacity, including general contractor, developer, artisan, remodeling contractor, site work contractor, supplier, etc.</h3>
      
      <FormField
        control={form.control}
        name="workInvolvingCondos"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>a. Have you or will you perform work involving, related to, or about the premise of: Condominiums or townhouses?</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-1"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="yes" />
                  </FormControl>
                  <FormLabel className="font-normal">Yes</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="no" />
                  </FormControl>
                  <FormLabel className="font-normal">No</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Repeat similar RadioGroup for b, c, and d */}

      <FormField
        control={form.control}
        name="newConstructionDetails"
        render={({ field }) => (
          <FormItem>
            <FormLabel>If yes to d, describe in detail:</FormLabel>
            <FormControl>
              <Textarea {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <h3 className="text-xl font-semibold mt-6 mb-2">17. Heavy structural engineering techniques</h3>

      <FormField
        control={form.control}
        name="heavyStructuralEngineering"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>Have or will any of your projects involve caissons, cantilevers, piers, retaining walls, shoring, underpinning, or other heavy structural engineering techniques?</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-1"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="yes" />
                  </FormControl>
                  <FormLabel className="font-normal">Yes</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="no" />
                  </FormControl>
                  <FormLabel className="font-normal">No</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="heavyStructuralEngineeringDescription"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description:</FormLabel>
            <FormControl>
              <Textarea {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="retainingWallHeight"
        render={({ field }) => (
          <FormItem>
            <FormLabel>If retaining walls have been or will be built, maximum height:</FormLabel>
            <FormControl>
              <Input {...field} type="number" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <h3 className="text-xl font-semibold mt-6 mb-2">18. Roof work</h3>

      <FormField
        control={form.control}
        name="roofWork"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>Have you or will you build, remove, repair or replace roofs?</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-1"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="yes" />
                  </FormControl>
                  <FormLabel className="font-normal">Yes</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="no" />
                  </FormControl>
                  <FormLabel className="font-normal">No</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="roofWorkDescription"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description:</FormLabel>
            <FormControl>
              <Textarea {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Add fields for Hot tar %, Torch %, and Total % */}

      <h3 className="text-xl font-semibold mt-6 mb-2">19. Construction manager</h3>

      <FormField
        control={form.control}
        name="constructionManager"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>Have you or will you work as a construction manager for a fee?</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-1"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="yes" />
                  </FormControl>
                  <FormLabel className="font-normal">Yes</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="no" />
                  </FormControl>
                  <FormLabel className="font-normal">No</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <h3 className="text-xl font-semibold mt-6 mb-2">20. Claims history</h3>

      <FormField
        control={form.control}
        name="claimsHistory"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>Have there been any losses, claims or suits against you in the past 5 years?</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-1"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="yes" />
                  </FormControl>
                  <FormLabel className="font-normal">Yes</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="no" />
                  </FormControl>
                  <FormLabel className="font-normal">No</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="claimsDetails"
        render={({ field }) => (
          <FormItem>
            <FormLabel>If yes, provide details:</FormLabel>
            <FormControl>
              <Textarea {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <h3 className="text-xl font-semibold mt-6 mb-2">21. Comments</h3>

      <FormField
        control={form.control}
        name="additionalComments"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Additional Comments:</FormLabel>
            <FormControl>
              <Textarea {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}