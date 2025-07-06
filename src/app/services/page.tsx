import React from 'react';
import { ServicesSection } from '@/components/ServicesSection';

export const metadata = {
  title: 'Dienstleistungen',
  description:
    'Entdecke unsere vielfältigen Kosmetikdienstleistungen für dein Wohlbefinden.',
};

export default async function ServicesPage() {
  return <ServicesSection mode='page' className='py-1! sm:py-20!' />;
}
