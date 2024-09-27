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
    <main className="">
    <div className="flex flex-col lg:flex-row items-center bg-[#1E1919] dark:bg-slate-800">
        <div
            className="p-10 flex flex-col bg-[#2B2929]
      dark:bg-slate-800 text-white space-y-5"
        >
            <h1 className="text-5xl font-bold">
                Welcome to IntelliDrive. <br />
                <br />
                Storing everything for you and your academic needs. All
                in one place, supercharged by AI.
            </h1>
            <p className="pb-20">
                Enhance your personal storage with IntelliDrive, a fast,
                efficient, and AI-powered solution to upload, organize,
                search, and access files from anywhere. Securely store
                important documents and media, and experience the
                convenience of easy file management and sharing in one
                centralized AI-solution.
            </p>
            <Link
                href="/dashboard"
                className="flex cursor-pointer bg-blue-500 p-5 w-fit"
            >
                Try it for free!
                <ArrowRight className="ml-10" />
            </Link>
        </div>
        <div className="bg-[#1E1919] dark:bg-slate-800 h-full p-10">
            <video autoPlay loop muted className="rounded-lg">
                <source
                    src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4"
                    type="video/mp4"
                />
                Video not supported by browser.
            </video>
        </div>
    </div>
</main>
  );
}