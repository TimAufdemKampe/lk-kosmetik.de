import React from 'react';
import Link from 'next/link';

interface BookingSuccessProps {
  customerName: string;
  customerEmail: string;
  submittedAt: Date;
}

export const BookingSuccess: React.FC<BookingSuccessProps> = ({
  customerName,
  customerEmail,
  submittedAt,
}) => {
  return (
    <div className='flex w-full flex-col items-center justify-center rounded-xl bg-white p-8 text-center shadow-md'>
      <div className='mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100'>
        <svg
          className='h-10 w-10 text-green-600'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M5 13l4 4L19 7'
          />
        </svg>
      </div>

      <h2 className='mb-4 text-2xl font-bold text-gray-900'>
        Terminanfrage erfolgreich versendet!
      </h2>

      <p className='mb-6 max-w-md text-lg text-gray-700'>
        Liebe/r {customerName}, vielen Dank für deine Terminanfrage!
      </p>

      <div className='mb-6 w-full max-w-md rounded-lg border border-[#ecdcc7] bg-[#f7f2ee] p-4'>
        <h3 className='mb-3 font-semibold text-[#bb9167]'>
          Was passiert als nächstes?
        </h3>
        <ul className='space-y-2 text-left text-sm text-gray-600'>
          <li className='flex items-start'>
            <span className='mr-2 text-[#bb9167]'>1.</span>
            <span>
              Du erhältst eine Bestätigungs-E-Mail an{' '}
              <strong>{customerEmail}</strong>
            </span>
          </li>
          <li className='flex items-start'>
            <span className='mr-2 text-[#bb9167]'>2.</span>
            Ich melde mich schnellstmöglich bei dir
          </li>
          <li className='flex items-start'>
            <span className='mr-2 text-[#bb9167]'>3.</span>
            Wir finden gemeinsam den perfekten Termin für dich
          </li>
        </ul>
      </div>

      <p className='mb-6 text-sm text-gray-500'>
        Anfrage gesendet am {submittedAt.toLocaleDateString('de-DE')} um{' '}
        {submittedAt.toLocaleTimeString('de-DE')}
      </p>

      <div className='flex w-full max-w-md flex-col justify-between gap-3 sm:flex-row'>
        <Link href='/'>
          <button
            onClick={() => (window.location.href = '/')}
            className='rounded bg-[#bb9167] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#a87b54]'
          >
            Zur Startseite
          </button>
        </Link>
        <Link href='/services'>
          <button
            onClick={() => (window.location.href = '/services')}
            className='rounded border border-[#bb9167] bg-white px-6 py-3 font-semibold text-[#bb9167] transition-colors hover:bg-[#f7f2ee]'
          >
            Leistungen ansehen
          </button>
        </Link>
      </div>

      <div className='mt-8 text-center'>
        <p className='mb-2 text-sm text-gray-500'>
          Fragen? Melde dich gerne jederzeit!
        </p>
        <div className='flex justify-center space-x-4 text-sm'>
          <a
            href='mailto:lea@lk-kosmetik.de'
            className='text-[#bb9167] hover:underline'
          >
            info@lk-kosmetik.de
          </a>
          <span className='text-gray-300'>|</span>
          <a href='tel:015563148073' className='text-[#bb9167] hover:underline'>
            Telefon
          </a>
        </div>
      </div>
    </div>
  );
};
