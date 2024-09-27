'use client'

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { Section, Container } from "@/components/craft";
import Placeholder1 from "@/public/business-stock.png";
import Placeholder2 from "@/public/insurance-stock.jpg";
import Placeholder3 from "@/public/office.jpg";
import Slide from '@mui/material/Slide';
import { Button } from '../ui/button';
import { ArrowRight } from "lucide-react";
import Link from "next/link";


export default function Hero4() {
  const [activeStep, setActiveStep] = useState(0);
  const images = [Placeholder1, Placeholder2, Placeholder3]; // Replace with actual different images later

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prevActiveStep) => (prevActiveStep + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => {
      clearInterval(timer);
    };
  }, []); // Added empty dependency array to avoid unnecessary re-renders

  return (
    <main className="pb-20">
        <div className="flex flex-col lg:flex-row items-center bg-background pt-10">
            <div className="p-10 flex flex-col bg-background space-y-5">
            <h1 className="text-6xl font-extrabold">
                Lange and Associates Insurance Agency, Inc.<br />
            </h1>
            <h3 className="text-2xl font-bold">
                &quot;The Contractors&apos; Insurance Specialist.&quot;
            </h3>
            <p className="pb-20">
                We&apos;ve been providing expert insurance solutions for over 35 years, specializing in comprehensive coverage for contractors across California and New York.
                 With offices on both coasts, we&apos;re uniquely positioned to serve contractors throughout the nation, ensuring you have the right protection no matter your needs.
            </p>
            <Button
            asChild
            className="not-prose mb-8 flex items-center justify-center px-10 py-5 text-xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105"
            variant="outline"
        >
            <Link href="#cta" className="flex items-center">
                Get a Free Quote <ArrowRight className="ml-3 w-8" />
            </Link>
        </Button>
        </div>
        <div className="h-96 w-full overflow-hidden rounded-lg border md:h-[480px] md:rounded-xl relative">
            {images.map((img, index) => (
              <Slide direction="left" in={activeStep === index} key={index}>
                <div className={`absolute top-0 left-0 w-full h-full ${activeStep === index ? 'z-10' : 'z-0'}`}>
                  <Image
                    className="not-prose h-full w-full object-cover object-bottom"
                    src={img}
                    width={1920}
                    height={1080}
                    alt={`Lange and Associates Insurance`}
                    placeholder="blur"
                  />
                </div>
              </Slide>
            ))}
          </div>
    </div>
</main>
  );
}