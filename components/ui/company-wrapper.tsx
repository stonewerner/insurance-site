'use client';
import { companies } from "@/data"
import { CompanyCards } from "./company-cards"


import React from 'react';

export default function CompanyWrapper() {
  return (
    <div>
        <h1 className="heading">
            Our trusted partners
        </h1>
        <div
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
          >
            <CompanyCards items={companies} />
        </div>
    </div>
  );
}


