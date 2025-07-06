import type { Metadata } from 'next';
import './globals.css';
import React from 'react';
import { Header } from '@/components/Header';
import { PoppinsFont, AliceFont } from '@/components/Fonts';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'LK-Kosmetik - Schönheit und Wohlbefinden',
    template: '%s | LK-Kosmetik',
  },
  description:
    'Willkommen bei LK-Kosmetik! Entdecke professionelle Kosmetikbehandlungen für Schönheit und Wohlbefinden. Dein Ort für Entspannung und Pflege.',
  keywords: [
    'Kosmetik',
    'Schönheit',
    'Wohlbefinden',
    'Gesichtsbehandlungen',
    'Hautpflege',
    'Entspannung',
    'Kosmetikstudio',
    'Lea Kosmetik',
    'LK-Kosmetik',
    'Schönheitsbehandlungen',
    'Natürliche Schönheit',
    'Professionelle Kosmetik',
    'Hautgesundheit',
    'Wellness',
    'Schönheitsberatung',
    'Kosmetikbehandlungen',
    'Entspannende Behandlungen',
    'Pflegeprodukte',
    'Schönheitsrituale',
    'Kosmetikexperte',
    'Schönheitsgeheimnisse',
    'Kosmetik Bruchmühlen',
    'Kosmetik Minden',
    'Kosmetik Rödinghausen',
  ],
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
