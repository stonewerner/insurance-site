import { Container, Main, Section } from '@/components/craft'
import CTA from '@/components/home-page/cta';
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
          <FeatureLeft />
          <FeatureRight />
          <CTA />
        </Container>
      </Section>
    </Main>
  );
}