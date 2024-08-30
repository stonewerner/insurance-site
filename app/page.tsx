import Clients from '@/components/clients';
import { Container, Main, Section } from '@/components/craft'
import CTA from '@/components/home-page/cta';
import FAQ from '@/components/home-page/faq';
import FeatureLeft from '@/components/home-page/feature-left';
import FeatureRight from '@/components/home-page/feature-right';
import Hero from '@/components/home-page/hero';
import React from 'react'


export default function Page() {
  return (
    <Main>
      <Section>
        <Container>
          <Hero />
          <Clients />
          <FeatureLeft />
          <FeatureRight />
          <FAQ />
          <CTA />
        </Container>
      </Section>
    </Main>
  );
}