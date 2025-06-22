import Image from 'next/image';
import React from 'react';

export const PartnersSection: React.FC = () => {
  return (
    <div className='bg-background flex w-full justify-center py-12'>
      <div className='flex w-full max-w-[1000px] flex-col flex-wrap items-center justify-around gap-12 sm:flex-row'>
        <Image
          src='/partners/dr-massing.webp'
          alt='Dr. Massing Cosmetics Logo'
          className='h-20 w-auto opacity-80 brightness-75 grayscale filter transition hover:scale-105 hover:opacity-100 hover:filter-none'
          width={256}
          height={80}
        />
        <Image
          src='/partners/circadia.png'
          alt='Circadia Logo'
          className='h-20 w-auto opacity-80 brightness-75 grayscale filter transition hover:scale-105 hover:opacity-100 hover:filter-none'
          width={109}
          height={80}
        />
        <Image
          src='/partners/cure-concept.png'
          alt='Cure Concept Logo'
          className='h-20 w-auto opacity-80 brightness-75 grayscale filter transition hover:scale-105 hover:opacity-100 hover:filter-none'
          width={142}
          height={80}
        />
      </div>
    </div>
  );
};
