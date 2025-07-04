import React, { Suspense } from 'react';
import { AliceFont } from '@/components/Fonts';
import { RoleSwitcher } from '@/components/RoleSwitcher';
import Image from 'next/image';
import Person from '../../public/person.png';
import { BookTreatmentButton } from '@/components/BookTreatmentButton';

export const HeroSection: React.FC = () => {
  return (
    <div className='bg-beige flex h-full w-full justify-center sm:h-[calc(var(--spacing)*82)]'>
      <div className='bg-beige flex h-full w-full max-w-[1000px] flex-col overflow-hidden sm:flex-row'>
        <div className='flex flex-none flex-col items-center justify-center px-6 pt-16 sm:flex-2/3 sm:pt-0'>
          <h1
            className={`mb-3 text-center text-5xl leading-tight font-semibold tracking-tight text-neutral-900 md:text-4xl ${AliceFont.className}`}
          >
            Willkommen bei LK-Kosmetik
          </h1>
          <span
            className={`md:text-md mb-3 block max-w-lg text-center text-base font-normal text-neutral-600 ${AliceFont.className}`}
          >
            Egal ob du mehr über LK-Kosmetik erfahren oder dein Treatment buchen
            möchtest, fühl dich wie Zuhause.
          </span>

          <Suspense>
            <BookTreatmentButton />
          </Suspense>
        </div>
        <div className='hidden h-full flex-1/3 md:relative'>
          <div className='absolute flex h-full min-w-[280px]'>
            <div className='flex w-[140px] flex-row items-center select-none sm:pt-64'>
              <div className='flex flex-1 flex-col items-end'>
                <span className='text font-medium tracking-wide whitespace-nowrap text-black'>
                  <strong>Lea</strong>
                </span>
                <span className='text-xs'>
                  <RoleSwitcher />
                </span>
              </div>
            </div>
            <Image
              alt='Person'
              style={{ overflow: 'hidden' }}
              src={Person}
              height={400}
              width={300}
            />
          </div>
        </div>
        <div className='sm:hidden md:flex'>
          <div className='flex h-full min-w-[280px]'>
            <div className='flex w-[140px] flex-row items-center select-none sm:pt-64'>
              <div className='flex flex-1 flex-col items-end'>
                <span className='text font-medium tracking-wide whitespace-nowrap text-black'>
                  <strong>Lea</strong>
                </span>
                <span className='text-xs'>
                  <RoleSwitcher />
                </span>
              </div>
            </div>
            <Image
              alt='Person'
              style={{ overflow: 'hidden' }}
              src={Person}
              height={400}
              width={280}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
