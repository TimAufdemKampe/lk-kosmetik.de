import React from 'react';
import Link from 'next/link';

export const NotFoundPage: React.FC = () => {
  return (
    <div className='bg-background mx-4 flex h-[calc(100vh-200px-56px)] items-center justify-center'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold text-neutral-900'>
          404 - Seite nicht gefunden
        </h1>
        <p className='mt-4 text-lg text-neutral-600'>
          Die angeforderte Seite konnte nicht gefunden werden.
        </p>
        <Link
          href='/'
          className='mt-6 inline-block rounded bg-[#bb9167] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#a87b54]'
        >
          Zur Startseite
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
