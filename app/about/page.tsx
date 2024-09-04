import React from 'react';
import { Section, Container } from '@/components/craft';

const AboutUsPage = () => {
  return (
    <Section className="pt-24 md:pt-32">
      <Container>
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Company Story</h2>
            <p className="mb-4">
              <strong>For more than 35 years, Lange & Associates Insurance Agency has specialized in the insurance needs of the business and industry.</strong> We have placed thousands of Commercial Insurance policies and over 90% of our clients are Businesses which is why we have been dubbed &quot;The Commercial Insurance Specialists.&quot; We offer unbeatable value on Apartment Building Packages, Condo Association Packages, Home Builder and Developer Specialized Policies & Programs, Business Owner Package Policies (BOP) and other Commercial Policies.
            </p>
            <p className="mb-4">
              Our exceptionally knowledgeable staff delivers a level of service second to none. We provide General Liability, Workers&apos; Compensation, Commercial Auto, Property & Inland Marine, as well as Surety Bonds and Group Health Insurance at the most competitive premiums. We can also assist you with risk management and loss control services.
            </p>
            <p>
              In addition to our access to exclusive and specialized contractor&apos;s programs, we work with most major carriers, including AIG (now Chartis), Allied, CNA, Fireman&apos;s Fund, Hartford, and St. Paul.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Mission Statement</h2>
            <p className="mb-4">
              Integrity, innovation, education, value, professionalism, service and cutting edge technology, these are the principles, core values and foundation upon which we have built Lange & Associates Insurance Agency, Inc.
            </p>
            <p>
              Instead of fitting our clients&apos; insurance needs into some industry template, we ask focused questions to find out what is important to our clients when protecting their businesses from risk. With this information, we design a customized Risk Management program that incorporates the values and reflects the priorities important to our individual clients.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutUsPage;