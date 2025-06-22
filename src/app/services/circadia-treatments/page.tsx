import { ServicePageContent } from '@/components/ServicePageContent';
import CircadiaImage from '@/../public/circadia-treatments/IMG_8915.jpeg';
import { CIRCADIA_TREATMENTS_ITEMS } from '@/app/services/services-items';

export default function CircadiaTreatmentsPage() {
  return (
    <ServicePageContent
      description='Circadia Treatments bieten innovative und individuell abgestimmte Behandlungen für verschiedene Hauttypen und -bedürfnisse. Hier findest du eine Übersicht über die angebotenen Behandlungen und Preise.'
      priceTableTitle='Circadia Treatments'
      priceTableItems={CIRCADIA_TREATMENTS_ITEMS}
      images={[
        {
          src: CircadiaImage,
        },
      ]}
    />
  );
}
