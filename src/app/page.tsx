import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { PartnersSection } from '@/components/PartnersSection';
import { AboutMeSection } from '@/components/AboutMeSection';
import { ServicesSection } from '@/components/ServicesSection';

export const metadata = {
  title: 'LK-Kosmetik - Schönheit und Wohlbefinden',
  description:
    'Willkommen bei LK-Kosmetik, deinem Ziel für Schönheit und Wohlbefinden. Entdecke unsere professionellen Kosmetikdienstleistungen und buche deinen Termin online.',
};

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
