import React from 'react';
import { ServicePageContent } from '@/components/ServicePageContent';
import { PERMANENT_MAKE_UP_ITEMS } from '@/app/services/services-items';

export default function PermanentMakeUpPage() {
  return (
    <ServicePageContent
      description='Bei LK-Kosmetik bieten wir professionelle Permanent Make-Up Behandlungen an. Hier findest du die aktuellen Preise für Powderbrows und Nachbehandlungen.'
      priceTableTitle='Permanent Make-Up'
      priceTableItems={PERMANENT_MAKE_UP_ITEMS}
      images={[]}
    />
  );
}
