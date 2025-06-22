'use client';

import React, { useState, useEffect } from 'react';
import Logo from '@/../public/logo.png';
import Image from 'next/image';
import {
  IconAt,
  IconBrandInstagram,
  IconClock,
  IconPhone,
} from '@tabler/icons-react';
import { Container } from '@/components/Container';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import StickyNav from '@/components/StickyNav';
import { MobileNavOffCanvas } from '@/components/MobileNavOffCanvas';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const handleScroll = () => {
      const navElement = document.querySelector('.header-container .absolute');
      if (navElement) {
        const navRect = navElement.getBoundingClientRect();
        setIsHeaderVisible(navRect.top > 0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

  return (
    <>
      {(isMobile || !isHeaderVisible) && <StickyNav />}
      <MobileNavOffCanvas
        open={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
      />

      <Container className='header-container relative'>
        <div className='bg-background'>
          <div className='container mx-auto flex items-center justify-between'>
            <Image src={Logo} width={200} height={200} alt='Logo' />

            <div className='hidden items-center space-x-4 sm:flex'>
              <div className='flex flex-row items-center gap-3'>
                <IconPhone size={36} className='text-gray-500' />
                <div className='flex flex-col'>
                  <span className='text-start text-sm text-gray-500'>
                    Telefon
                  </span>
                  <span className='text-foreground text-start'>
                    <strong>0155 631 480 73</strong>
                  </span>
                </div>
              </div>

              <div className='h-10 w-[2px] bg-gray-500'></div>

              <div className='flex flex-row items-center gap-3'>
                <IconAt size={36} className='text-gray-500' />
                <div className='flex flex-col'>
                  <span className='text-start text-sm text-gray-500'>
                    E-Mail
                  </span>
                  <span className='text-foreground text-start'>
                    <strong>lea@lk-kosmetik.de</strong>
                  </span>
                </div>
              </div>

              <div className='h-10 w-[2px] bg-gray-500'></div>

              <div className='flex flex-row items-center gap-3'>
                <IconClock size={36} className='text-gray-500' />
                <div className='flex flex-col'>
                  <span className='text-start text-sm text-gray-500'>
                    Öffnungszeiten
                  </span>
                  <span className='text-foreground text-start'>
                    <strong>Termine nach Vereinbarung</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute top-[180px] left-1/2 z-[999] hidden h-[50px] w-full max-w-[600px] -translate-x-1/2 transform items-center rounded-md bg-white p-2 shadow-md sm:flex sm:w-[calc(100%-200px)]'>
          <div className='flex w-full items-center justify-between'>
            <nav className='flex items-center gap-4'>
              <Link
                href='/'
                className={`group relative flex flex-col items-center rounded-lg px-2 py-0.5 font-medium transition-all duration-300 ${pathname === '/' ? 'text-primary scale-105' : 'hover:text-primary'} text-black`}
              >
                <span className='text-primary hover:text-primary/80 z-10 transition-colors duration-300'>
                  Startseite
                </span>
                {pathname === '/' && (
                  <span className='pointer-events-none mt-px block h-0.5 w-8 rounded-full bg-gradient-to-r from-[#bb9167] via-[#d9b384] to-[#e5c08d]'></span>
                )}
                {pathname !== '/' && (
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
                {pathname.includes('/services') && (
                  <span className='pointer-events-none mt-px block h-0.5 w-8 rounded-full bg-gradient-to-r from-[#bb9167] via-[#d9b384] to-[#e5c08d]'></span>
                )}
                {!pathname.includes('/services') && (
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
                {pathname === '/about-me' && (
                  <span className='pointer-events-none mt-px block h-0.5 w-8 rounded-full bg-gradient-to-r from-[#bb9167] via-[#d9b384] to-[#e5c08d]'></span>
                )}
                {pathname !== '/about-me' && (
                  <span className='pointer-events-none mt-px block h-0.5 w-0 rounded-full bg-gradient-to-r from-[#bb9167] via-[#d9b384] to-[#e5c08d] transition-all duration-300 group-hover:w-8 group-hover:opacity-80'></span>
                )}
              </Link>
            </nav>
            <div className='flex gap-4'>
              <Link
                target='_blank'
                href='https://www.instagram.com/lk.kosmetik_/'
                className='text-primary hover:text-primary/80 transition-colors duration-300'
              >
                <IconBrandInstagram size={24} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
