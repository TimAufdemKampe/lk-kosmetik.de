import React from 'react';
import { ServicePageContent } from '@/components/ServicePageContent';
import { PERMANENT_MAKE_UP_ITEMS } from '@/app/services/services-items';

export const metadata = {
  title: 'Permanent Make Up',
  description:
    'Entdecke unsere professionellen Permanent Make-Up Behandlungen bei LK-Kosmetik. Von Powderbrows bis zu Nachbehandlungen bieten wir alles für ein perfektes Aussehen.',
};

export default function PermanentMakeUpPage() {
  return (
    <ServicePageContent
      categoryName='Permanent Make Up'
      description='Bei LK-Kosmetik bieten wir professionelle Permanent Make-Up Behandlungen an. Hier findest du die aktuellen Preise für Powderbrows und Nachbehandlungen.'
      priceTableTitle='Permanent Make-Up'
      priceTableItems={PERMANENT_MAKE_UP_ITEMS}
      images={[]}
    />
  );
}
