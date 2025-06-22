import { ServicePageContent } from '@/components/ServicePageContent';
import LashesImage from '@/../public/lashes/391FE8DA-986D-4CBD-B34A-26F94479E58D.jpeg';
import LashesImage2 from '@/../public/lashes/IMG_8792.jpeg';
import LashesImage3 from '@/../public/lashes/11B15B23-DF67-4A17-A012-26A22D39190A.jpeg';
import LashesImage4 from '@/../public/lashes/IMG_9004.jpeg';
import { LASHES_ITEMS } from '@/app/services/services-items';

export default function LashesPage() {
  return (
    <ServicePageContent
      description='Bei LK-Kosmetik bieten wir professionelle Wimpernbehandlungen und -verlängerungen an. Hier findest du eine Übersicht über unser Angebot und die aktuellen Preise.'
      priceTableTitle='Wimpern'
      priceTableItems={LASHES_ITEMS}
      images={[
        {
          src: LashesImage3,
        },
        {
          src: LashesImage4,
        },
        {
          src: LashesImage2,
        },
        {
          src: LashesImage,
        },
      ]}
    />
  );
}
