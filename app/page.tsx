import Clients from '@/components/clients';
import { Container, Main, Section } from '@/components/craft'
import CTA from '@/components/home-page/cta';
import FAQ from '@/components/home-page/faq';
import FeatureDouble from '@/components/home-page/feature-double';
import Hero from '@/components/home-page/hero';
import React from 'react'
import CompanyWrapper from '@/components/ui/company-wrapper';
import Hero2 from '@/components/home-page/hero2';
import Hero4 from '@/components/home-page/hero4';
import HeroWavy from '@/components/home-page/hero-wavy';



export default function Page() {
  return (
    <Main>
      <Section>
        <Container>
          <Hero4 />
          <CompanyWrapper />
          <FeatureDouble />
          <FAQ />
          <CTA />
        </Container>
      </Section>
    </Main>
  );
}