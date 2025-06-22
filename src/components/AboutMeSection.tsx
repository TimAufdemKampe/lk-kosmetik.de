import React from 'react';
import Image from 'next/image';
import WomanImage from '../../public/stock/pexels-roman-odintsov-10159282.jpg';

export const AboutMeSection: React.FC = () => {
  return (
    <div className='bg-beige flex h-[calc(var(--spacing)*82)] w-full justify-center'>
      <div className='bg-beige flex w-full max-w-[1000px] flex-row items-center justify-center gap-8 p-8'>
        <div className='hidden flex-1 items-center justify-center sm:flex'>
          <Image
            src={WomanImage}
            alt='Lea'
            width={440}
            height={247}
            className='h-auto w-[440px] rounded-xl object-cover shadow-md'
          />
        </div>
        <div className='flex flex-1 flex-col items-center justify-center'>
          <h2 className='mb-4 text-2xl font-semibold'>Über mich</h2>
          <p className='text-sm text-neutral-600'>
            Ich bin Lea, die Gründerin von LK-Kosmetik. Mit Leidenschaft und
            Hingabe biete ich individuelle Behandlungen an, die auf deine
            Bedürfnisse abgestimmt sind. Mein Ziel ist es, dir ein Gefühl von
            Entspannung und Schönheit zu vermitteln.
          </p>
        </div>
      </div>
    </div>
  );
};
