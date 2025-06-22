import React from 'react';
import Link from 'next/link';
import { IconX } from '@tabler/icons-react';
import Image from 'next/image';
import Logo from '../../public/logo.png';
import { Button } from '@/components/ui/button';

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export const MobileNavOffCanvas: React.FC<MobileNavProps> = ({
  open,
  onClose,
}) => {
  return (
    <div
      className={`fixed inset-0 z-[1200] bg-black/40 transition-opacity duration-200 ${open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
      onClick={onClose}
    >
      <div
        className={`absolute top-0 right-0 flex h-full w-64 flex-col gap-6 bg-white p-6 shadow-lg transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className='mb-4 self-end'
          onClick={onClose}
          aria-label='Menü schließen'
        >
          <IconX size={28} />
        </button>
        <nav className='flex flex-col gap-4'>
          <Link href='/'>
            <Image src={Logo} width={200} height={200} alt='Logo' />
          </Link>

          <Link href='/' className='text-lg font-medium' onClick={onClose}>
            Startseite
          </Link>

          <Link
            href='/services'
            className='text-lg font-medium'
            onClick={onClose}
          >
            Leistungen
          </Link>

          <Link
            href='/about-me'
            className='text-lg font-medium'
            onClick={onClose}
          >
            Über mich
          </Link>

          <Link
            href='https://www.instagram.com/lk.kosmetik_/'
            target='_blank'
            className='text-lg font-medium'
            onClick={onClose}
          >
            Instagram
          </Link>

          <Button className='mt-4 inline-block rounded bg-[#bb9167] px-6 text-sm font-medium text-white transition hover:bg-[#a87b54]'>
            Termin vereinbaren
          </Button>
        </nav>
      </div>
    </div>
  );
};
