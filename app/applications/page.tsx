import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { Section, Container } from '@/components/craft';

const applicationForms = [
  { name: "Artisan and General Liability Application", path: "/applications/artisan" },
  { name: "Commercial Auto Insurance Application", path: "/applications/artisan" },
  { name: "Workers' Compensation Insurance Application", path: "/applications/artisan" },
  { name: "Property Insurance Application", path: "/applications/artisan" },
  { name: "Professional Liability Insurance Application", path: "/applications/artisan" },
  { name: "Umbrella Insurance Application", path: "/applications/artisan" },
  { name: "Cyber Liability Insurance Application", path: "/applications/artisan" },
  { name: "Builders Risk Insurance Application", path: "/applications/artisan" },
  { name: "Contractors Equipment Insurance Application", path: "/applications/artisan" },
  { name: "Surety Bond Application", path: "/applications/artisan" },
  { name: "Business Owners Policy (BOP) Application", path: "/applications/artisan" },
  { name: "Environmental Liability Insurance Application", path: "/applications/artisan" },
  { name: "Inland Marine Insurance Application", path: "/applications/artisan" },
  { name: "Employment Liability Insurance Application", path: "/applications/artisan" },
  { name: "Directors Liability Application", path: "/applications/artisan" },
];

export default function ApplicationsPage() {
  return (
    <Section className="pt-24 md:pt-32">
      <Container>
        <h1 className="text-4xl font-bold mb-8">Insurance Applications</h1>
        <p className="text-lg mb-8">Select an application form to get started:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {applicationForms.map((form, index) => (
            <Link href={form.path} key={index}>
              <Button className="w-full h-auto py-4 text-left" variant="outline">
                <span className="text-lg font-semibold">{form.name}</span>
              </Button>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}