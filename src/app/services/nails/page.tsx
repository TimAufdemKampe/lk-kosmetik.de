import NailImage from '@/../public/nails/8ad51d50-61f0-4937-ad4e-6a1fafbeec5e.jpeg';
import NailImage2 from '@/../public/nails/IMG_8012.jpeg';
import NailImage3 from '@/../public/nails/IMG_8019.jpeg';
import NailImage4 from '@/../public/nails/IMG_8148.jpeg';
import NailImage5 from '@/../public/nails/IMG_8644.jpeg';
import NailImage6 from '@/../public/nails/IMG_8751.jpeg';
import NailImage7 from '@/../public/nails/IMG_9212.jpeg';
import NailImage8 from '@/../public/nails/IMG_9351.jpeg';
import React from 'react';
import { ServicePageContent } from '@/components/ServicePageContent';
import { NAILS_ITEMS } from '@/app/services/services-items';

export default function NailsPage() {
  return (
    <ServicePageContent
      description={
        'Bei LK-Kosmetik bieten wir eine Vielzahl von Behandlungen rund um Nägel, Augenbrauen und Permanent Make-Up an. Hier findest du eine Übersicht über unser Angebot und die aktuellen Preise.'
      }
      priceTableTitle='Nägel'
      priceTableItems={NAILS_ITEMS}
      images={[
        {
          src: NailImage,
        },
        {
          src: NailImage2,
        },
        {
          src: NailImage3,
        },
        {
          src: NailImage4,
        },
        {
          src: NailImage5,
        },
        {
          src: NailImage6,
        },
        {
          src: NailImage7,
        },
        {
          src: NailImage8,
        },
      ]}
    />
  );
}
