'use client'

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, Container } from "@/components/craft";
import Placeholder1 from "@/public/business-stock.png";
import Placeholder2 from "@/public/insurance-stock.jpg";
import Placeholder3 from "@/public/office.jpg";
import Slide from '@mui/material/Slide';

export default function Hero2() {
  const [activeStep, setActiveStep] = useState(0);
  const images = [Placeholder1, Placeholder2, Placeholder3]; // Replace with actual different images later

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prevActiveStep) => (prevActiveStep + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <Section>
      <Container>
        <div className="flex flex-col items-center text-center">
          <Button
            asChild
            className="not-prose mb-6 flex w-fit"
            size="sm"
            variant="outline"
          >
            <Link href="#cta">
              Get a Free Quote <ArrowRight className="ml-2 w-4" />
            </Link>
          </Button>
          <h1 className="!mb-0">
            <Balancer>
              Lange & Associates Insurance Agency, Inc.
            </Balancer>
          </h1>
          <h3 className="text-muted-foreground">
            <Balancer>
              &quot;The Contractors&apos; Insurance Specialist.&quot; We&apos;ve been providing expert insurance solutions for over 25 years.
            </Balancer>
          </h3>
          <div className="my-8 h-96 w-full overflow-hidden rounded-lg border md:h-[480px] md:rounded-xl relative">
            {images.map((img, index) => (
              <Slide direction="left" in={activeStep === index} key={index}>
                <div className={`absolute top-0 left-0 w-full h-full ${activeStep === index ? 'z-10' : 'z-0'}`}>
                  <Image
                    className="not-prose h-full w-full object-cover object-bottom"
                    src={img}
                    width={1920}
                    height={1080}
                    alt={`Lange and Associates Insurance - Slide ${index + 1}`}
                    placeholder="blur"
                  />
                </div>
              </Slide>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}