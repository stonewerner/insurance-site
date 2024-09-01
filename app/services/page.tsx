import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { Section, Container } from '@/components/craft';

const serviceForms = [
  { name: "Certificate Request", path: "/applications/artisan" },
  { name: "Auto Policy Change Request", path: "/applications/artisan" },
  { name: "Change of Address Request", path: "/applications/artisan" },
  { name: "Contractors License Status Check", path: "/applications/artisan" },
  { name: "Online Payment", path: "/applications/artisan" },
];

export default function OnlineServicesPage() {
  return (
    <Section className="pt-24 md:pt-32">
      <Container>
        <h1 className="text-4xl font-bold mb-8">Online Services</h1>
        <p className="text-lg mb-8">Select a service form to get started:</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {serviceForms.map((form, index) => (
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