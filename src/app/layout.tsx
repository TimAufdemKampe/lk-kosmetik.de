import type { Metadata } from 'next';
import './globals.css';
import React from 'react';
import { Header } from '@/components/Header';
import { PoppinsFont, AliceFont } from '@/components/Fonts';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'LK-Kosmetik',
  description: 'LK-Kosmetik - Your Beauty Destination',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='de'>
      <body
        className={`${PoppinsFont.variable} ${AliceFont.variable} flex min-h-screen flex-col antialiased`}
      >
        <Header />
        <div className='flex flex-1 flex-col'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
