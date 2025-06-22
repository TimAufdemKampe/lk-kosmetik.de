import { ServicePageContent } from '@/components/ServicePageContent';
import { BROWS_ITEMS } from '@/app/services/services-items';

export default function BrowsPage() {
  return (
    <ServicePageContent
      description='Bei LK-Kosmetik bieten wir eine Vielzahl von Behandlungen rund um Augenbrauen und Permanent Make-Up an. Hier findest du eine Übersicht über unser Angebot und die aktuellen Preise.'
      priceTableTitle='Augenbrauen'
      priceTableItems={BROWS_ITEMS}
      images={[]}
    />
  );
}
