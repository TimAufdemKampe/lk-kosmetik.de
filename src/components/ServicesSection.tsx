import React, { Suspense } from 'react';
import Image from 'next/image';
import NailsImage from '@/../public/stock/pexels-designecologist-887352.jpg';
import BrowsImage from '@/../public/stock/pexels-almadastudio-609549.jpg';
import LashesImage from '@/../public/stock/pexels-pixabay-63320.jpg';
import CircadiaImage from '@/../public/stock/pexels-shiny-diamond-3373716.jpg';
import PermanentMakeupImage from '@/../public/stock/460x321px-bilder-unten-quer-permanent-make-up.jpg';
import { getPriceRange } from '@/app/services/getPriceRange';
import {
  BROWS_ITEMS,
  CIRCADIA_TREATMENTS_ITEMS,
  LASHES_ITEMS,
  NAILS_ITEMS,
  PERMANENT_MAKE_UP_ITEMS,
} from '@/app/services/services-items';
import { BookTreatmentButton } from '@/components/BookTreatmentButton';

const services = [
  {
    title: 'Nägel',
    image: NailsImage,
    alt: 'Nägel',
    desc: 'Neumodellage, Auffüllen, Shellac, Maniküre, Design u.v.m.',
    link: '/services/nails',
    items: NAILS_ITEMS,
  },
  {
    title: 'Augenbrauen',
    image: BrowsImage,
    alt: 'Augenbrauen',
    desc: 'Lifting, Färben, Zupfen, Pflege und mehr für perfekte Brauen.',
    link: '/services/brows',
    items: BROWS_ITEMS,
  },
  {
    title: 'Wimpern',
    image: LashesImage,
    alt: 'Wimpern',
    desc: 'Lifting, Färben, Verlängerung (1:1, Volume, Mix), Auffüllen.',
    link: '/services/lashes',
    items: LASHES_ITEMS,
  },
  {
    title: 'Circadia Treatments',
    image: CircadiaImage,
    alt: 'Circadia Treatments',
    desc: 'Aquafacial, Peptide, Oxygen, Switch & mehr für gesunde Haut.',
    link: '/services/circadia-treatments',
    items: CIRCADIA_TREATMENTS_ITEMS,
  },
  {
    title: 'Permanent Make Up',
    image: PermanentMakeupImage,
    alt: 'Permanent Make-up',
    desc: 'Augenbrauen, Lippen, Lidstrich – langanhaltende Schönheit.',
    link: '/services/permanent-make-up',
    items: PERMANENT_MAKE_UP_ITEMS,
  },
];

interface Props {
  className?: string;
  mode?: 'page' | 'landing';
}

export const ServicesSection: React.FC<Props> = (props) => {
  const { mode = 'landing' } = props;

  return (
    <section className={`bg-background py-10 ${props.className || ''}`}>
      <div className='mx-auto flex max-w-[1400px] flex-col items-center p-8 sm:px-20'>
        {mode === 'landing' ? (
          <>
            <h2 className='mb-2 text-center text-2xl leading-tight font-semibold tracking-tight text-neutral-900'>
              Leistungen
            </h2>
            <span className='mb-10 block max-w-xl text-center text-sm text-neutral-600'>
              Für dich individuell abgestimmt – von klassischer Maniküre bis zu
              modernen Treatments.
            </span>
          </>
        ) : (
          <div className='mb-16 text-center'>
            <h1 className='mb-4 text-4xl font-bold text-[#272521] sm:text-5xl'>
              Leistungen
            </h1>
            <p className='text-lg text-neutral-600 sm:text-xl'>
              Für dich individuell abgestimmt – von klassischer Maniküre bis zu
              modernen Treatments.
            </p>
          </div>
        )}
        <div className='grid w-full grid-cols-1 place-items-center gap-8 md:grid-cols-2'>
          {services.map((service, idx) => {
            const isLastOdd =
              services.length % 2 === 1 && idx === services.length - 1;
            const prices = getPriceRange(service.items);

            return (
              <div
                key={service.title}
                className={`flex min-h-[180px] w-full flex-col overflow-hidden rounded-xl border border-[#e5c08d]/30 bg-white/80 p-0 shadow-sm sm:max-w-[700px] sm:flex-row ${
                  isLastOdd ? 'md:col-span-2 md:mx-auto md:w-2/3' : ''
                }`}
              >
                <div className='relative flex w-full min-w-[140px] items-stretch sm:w-1/3'>
                  <div className='relative h-full min-h-[180px] w-full'>
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      className='rounded-none object-cover sm:rounded-l-xl'
                    />
                  </div>
                </div>
                <div className='flex flex-1 flex-col items-start justify-center p-8'>
                  <h3 className='mb-2 text-xl font-semibold text-neutral-900'>
                    {service.title}
                  </h3>
                  <p className='mb-2 text-neutral-600'>{service.desc}</p>
                  <div className='mb-2 text-sm text-neutral-500'>
                    ab {prices.low}€ - {prices.high}€
                  </div>
                  <div className='mt-2 flex flex-row gap-2'>
                    <a
                      href={service.link}
                      className='rounded bg-neutral-200 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-300'
                    >
                      Details
                    </a>

                    <Suspense>
                      <BookTreatmentButton
                        initialCategories={[service.title]}
                      />
                    </Suspense>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
