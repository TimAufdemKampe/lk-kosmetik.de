import React from 'react';
import { PriceTable } from '@/components/PriceTable';
import Image, { StaticImageData } from 'next/image';
import { PriceItems } from '@/app/services/services-items';
import { BookTreatmentButton } from '@/components/BookTreatmentButton';

interface ImageItem {
  src: StaticImageData;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

interface Props {
  categoryName: string;
  description: string;
  priceTableTitle: string;
  priceTableItems: PriceItems;
  images: ImageItem[];
}

export const ServicePageContent: React.FC<Props> = (props) => {
  const {
    categoryName,
    description,
    priceTableTitle,
    priceTableItems,
    images,
  } = props;

  return (
    <div className='bg-beige flex min-h-[100vh-200px-56px] w-full flex-1 flex-col items-center justify-start py-12 pt-24'>
      <div className='flex w-full max-w-5xl flex-col items-center gap-10 px-6 md:ml-12 md:flex-row md:items-start md:justify-center md:gap-16'>
        <div className='flex w-full flex-1 flex-col items-center md:sticky md:top-40 md:items-start md:overflow-y-auto md:pr-4'>
          <h2 className='mb-4 text-3xl font-semibold tracking-tight text-neutral-900'>
            Preise & Leistungen
          </h2>
          <p className='mb-4 w-full max-w-md text-base text-neutral-700'>
            {description}
          </p>

          <div className='mb-6'>
            <BookTreatmentButton initialCategories={[categoryName]} />
          </div>

          <PriceTable title={priceTableTitle} items={priceTableItems} />
        </div>
        {images.length > 0 && (
          <div className='mt-6 flex flex-1 flex-col items-center justify-center gap-6'>
            {images.map((item, index) => (
              <Image
                key={`service-${priceTableTitle}-${index}`}
                src={item.src}
                alt={item.alt ?? `Nageldesign Beispiel ${index}`}
                width={item.width ?? 440}
                height={item.height ?? 247}
                className={
                  item.className ??
                  'h-[350px] w-auto rounded-xl object-cover shadow-md'
                }
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
