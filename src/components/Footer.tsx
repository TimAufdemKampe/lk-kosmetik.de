import React from 'react';
import { Container } from '@/components/Container';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <div className='bg-beige py-4'>
      <Container className='flex h-full flex-col items-center justify-around gap-4 sm:flex-row'>
        <div className='flex flex-row gap-1'>
          <span>©</span>
          Copyright {new Date().getFullYear()}. All rights reserved.
        </div>
        <div className='flex flex-row gap-3'>
          <Link href='/imprint'>Impressum</Link>
          <span className='text-gray-500'>|</span>
          <Link href='/privacy-policy'>Datenschutzerklärung</Link>
        </div>
      </Container>
    </div>
  );
};
