import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export default function ExperienceAndWork({ form }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">7. Experience and Work</h2>
      
      <div className="space-y-4">
        <FormField
          control={form.control}
          name="yearsExperienceContracting"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Years of experience in the contracting business:</FormLabel>
              <FormControl>
                <Input {...field} type="number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="yearsExperienceEntity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Years in business of entities seeking coverage:</FormLabel>
              <FormControl>
                <Input {...field} type="number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-2">8. What percentage of your work is: (each line must add to 100%)</h3>
      
      <div className="space-y-4">
        <div className="flex space-x-4">
          <FormField
            control={form.control}
            name="workPercentage.residential"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Residential %</FormLabel>
                <FormControl>
                  <Input {...field} type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="workPercentage.industrial"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Industrial %</FormLabel>
                <FormControl>
                  <Input {...field} type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="workPercentage.commercial"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Commercial %</FormLabel>
                <FormControl>
                  <Input {...field} type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex space-x-4">
          <FormField
            control={form.control}
            name="workPercentage.newConstruction"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>New Construction %</FormLabel>
                <FormControl>
                  <Input {...field} type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="workPercentage.structuralRemodel"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Structural remodel/additions %</FormLabel>
                <FormControl>
                  <Input {...field} type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="workPercentage.nonStructuralRemodel"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Non-structural remodel %</FormLabel>
                <FormControl>
                  <Input {...field} type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-2">9. What percentage of your work is as a:</h3>
      
      <div className="flex space-x-4">
        <FormField
          control={form.control}
          name="workRole.generalContractor"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>General Contractor %</FormLabel>
              <FormControl>
                <Input {...field} type="number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="workRole.subcontractor"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Subcontractor %</FormLabel>
              <FormControl>
                <Input {...field} type="number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="workRole.constructionManager"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Construction Manager %</FormLabel>
              <FormControl>
                <Input {...field} type="number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}