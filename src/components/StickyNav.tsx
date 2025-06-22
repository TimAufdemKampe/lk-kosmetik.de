import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconBrandInstagram, IconMenu2 } from '@tabler/icons-react';
import { Button } from '@/components/ui/button';
import Logo from '../../public/logo.png';
import Image from 'next/image';
import { MobileNavOffCanvas } from '@/components/MobileNavOffCanvas';

const StickyNav: React.FC = () => {
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  return (
    <>
      <MobileNavOffCanvas
        open={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
      />

      <div className='sticky top-0 z-[1100] bg-white shadow-md'>
        <div className='container mx-auto flex h-[64px] items-center justify-between rounded-md p-2'>
          <Image src={Logo} width={48} height={48} alt='Logo' />
          <nav className='hidden items-center gap-4 md:flex'>
            <Link
              href='/'
              className={`group relative flex flex-col items-center rounded-lg px-2 py-0.5 font-medium transition-all duration-300 ${pathname === '/' ? 'text-primary scale-105' : 'hover:text-primary'} text-black`}
            >
              <span className='text-primary hover:text-primary/80 z-10 transition-colors duration-300'>
                Home
              </span>
              {pathname === '/' ? (
                <span className='pointer-events-none mt-px block h-0.5 w-8 rounded-full bg-gradient-to-r from-[#bb9167] via-[#d9b384] to-[#e5c08d]'></span>
              ) : (
                <span className='pointer-events-none mt-px block h-0.5 w-0 rounded-full bg-gradient-to-r from-[#bb9167] via-[#d9b384] to-[#e5c08d] transition-all duration-300 group-hover:w-8 group-hover:opacity-80'></span>
              )}
            </Link>
            <Link
              href='/services'
              className={`group relative flex flex-col items-center rounded-lg px-2 py-0.5 font-medium transition-all duration-300 ${pathname === '/services' ? 'text-primary scale-105' : 'hover:text-primary'} text-black`}
            >
              <span className='text-primary hover:text-primary/80 z-10 transition-colors duration-300'>
                Leistungen
              </span>
              {pathname.includes('/services') ? (
                <span className='pointer-events-none mt-px block h-0.5 w-8 rounded-full bg-gradient-to-r from-[#bb9167] via-[#d9b384] to-[#e5c08d]'></span>
              ) : (
                <span className='pointer-events-none mt-px block h-0.5 w-0 rounded-full bg-gradient-to-r from-[#bb9167] via-[#d9b384] to-[#e5c08d] transition-all duration-300 group-hover:w-8 group-hover:opacity-80'></span>
              )}
            </Link>
            <Link
              href='/about-me'
              className={`group relative flex flex-col items-center rounded-lg px-2 py-0.5 font-medium transition-all duration-300 ${pathname === '/about-me' ? 'text-primary scale-105' : 'hover:text-primary'} text-black`}
            >
              <span className='text-primary hover:text-primary/80 z-10 transition-colors duration-300'>
                Über mich
              </span>
              {pathname === '/about-me' ? (
                <span className='pointer-events-none mt-px block h-0.5 w-8 rounded-full bg-gradient-to-r from-[#bb9167] via-[#d9b384] to-[#e5c08d]'></span>
              ) : (
                <span className='pointer-events-none mt-px block h-0.5 w-0 rounded-full bg-gradient-to-r from-[#bb9167] via-[#d9b384] to-[#e5c08d] transition-all duration-300 group-hover:w-8 group-hover:opacity-80'></span>
              )}
            </Link>
          </nav>
          <div className='hidden flex-row items-center gap-4 md:flex'>
            <Button
              size='sm'
              className='inline-block rounded bg-[#bb9167] px-6 text-sm font-medium text-white transition hover:bg-[#a87b54]'
            >
              Termin vereinbaren
            </Button>
            <Link
              target='_blank'
              href='https://www.instagram.com/lk.kosmetik_/'
              className='text-primary hover:text-primary/80 transition-colors duration-300'
            >
              <IconBrandInstagram size={24} />
            </Link>
          </div>
          <div className='flex items-center justify-center gap-4 md:hidden'>
            <Button
              size='sm'
              className='inline-block rounded bg-[#bb9167] px-4 text-sm font-medium text-white transition hover:bg-[#a87b54]'
            >
              Termin vereinbaren
            </Button>

            <IconMenu2
              size={32}
              className='text-primary cursor-pointer'
              onClick={() => setMobileNavOpen(true)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default StickyNav;
