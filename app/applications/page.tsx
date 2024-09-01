import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { Section, Container } from '@/components/craft';

const applicationForms = [
  { name: "Artisan and General Liability", path: "/applications/artisan" },
  { name: "Commercial Auto Insurance", path: "/applications/artisan" },
  { name: "Workers' Compensation Insurance", path: "/applications/artisan" },
  { name: "Property Insurance", path: "/applications/artisan" },
  { name: "Professional Liability Insurance", path: "/applications/artisan" },
  { name: "Umbrella Insurance", path: "/applications/artisan" },
  { name: "Cyber Liability Insurance", path: "/applications/artisan" },
  { name: "Builders Risk Insurance", path: "/applications/artisan" },
  { name: "Contractors Equipment Insurance", path: "/applications/artisan" },
  { name: "Surety Bond", path: "/applications/artisan" },
  { name: "Business Owners Policy (BOP)", path: "/applications/artisan" },
  { name: "Environmental Liability Insurance", path: "/applications/artisan" },
  { name: "Inland Marine Insurance", path: "/applications/artisan" },
  { name: "Employment Liability Insurance", path: "/applications/artisan" },
  { name: "Directors Liability", path: "/applications/artisan" },
];

export default function ApplicationsPage() {
  return (
    <Section className="pt-24 md:pt-32">
      <Container>
        <h1 className="text-4xl font-bold mb-8">Insurance Applications</h1>
        <p className="text-lg mb-8">Select an application form to get started:</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {applicationForms.map((form, index) => (
            <Link href={form.path} key={index} className="w-full">
              <Button 
                className="w-full h-full min-h-[4rem] py-2 px-4 text-left flex items-center justify-start" 
                variant="outline"
              >
                <span className="text-sm sm:text-base font-semibold line-clamp-2">
                  {form.name}
                </span>
              </Button>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}