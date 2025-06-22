import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { PartnersSection } from '@/components/PartnersSection';
import { AboutMeSection } from '@/components/AboutMeSection';
import { ServicesSection } from '@/components/ServicesSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <AboutMeSection />
      <ServicesSection />
    </>
  );
}
