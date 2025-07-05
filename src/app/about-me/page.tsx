import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/Container';
import PersonImage from '../../../public/real-person.jpeg';

export default function AboutPage() {
  return (
    <div className='min-h-screen px-8 py-12 sm:py-20'>
      <Container>
        <div className='mx-auto max-w-6xl'>
          {/* Hero Section */}
          <div className='mb-16 text-center'>
            <h1 className='mb-4 text-4xl font-bold text-[#272521] sm:text-5xl'>
              Über mich
            </h1>
            <p className='text-lg text-neutral-600 sm:text-xl'>
              Leidenschaft für Schönheit und Wohlbefinden
            </p>
          </div>

          {/* Main Content */}
          <div className='grid gap-12 lg:grid-cols-2 lg:gap-16'>
            {/* Image Section */}
            <div className='flex justify-center pr-4 lg:justify-start'>
              <div className='relative'>
                <Image
                  src={PersonImage}
                  alt='Lea - Gründerin von LK-Kosmetik'
                  width={500}
                  height={600}
                  className='rounded-2xl object-cover shadow-lg'
                  priority
                />
                <div className='absolute -right-4 -bottom-4 -z-10 h-full w-full rounded-2xl border border-white/20 bg-[#bb9167]/20 shadow-xl backdrop-blur-sm'></div>
              </div>
            </div>

            {/* Text Section */}
            <div className='flex flex-col justify-center space-y-6'>
              <div>
                <h2 className='mb-4 text-2xl font-semibold text-[#272521] sm:text-3xl'>
                  Hallo, ich bin Lea
                </h2>
                <p className='leading-relaxed text-neutral-600'>
                  Willkommen bei LK-Kosmetik! Ich bin Lea, die Gründerin dieses
                  Studios, und es erfüllt mich mit großer Freude, dir ein Ort
                  der Entspannung und Schönheit zu bieten.
                </p>
              </div>

              <div className='space-y-4'>
                <h3 className='text-xl font-semibold text-[#272521]'>
                  Meine Leidenschaft
                </h3>
                <p className='leading-relaxed text-neutral-600'>
                  Schon seit Jahren fasziniert mich die Welt der Kosmetik und
                  Schönheitspflege. Für mich ist es mehr als nur ein Beruf – es
                  ist meine Berufung, Menschen dabei zu helfen, sich in ihrer
                  Haut wohlzufühlen und ihre natürliche Schönheit zu
                  unterstreichen.
                </p>
              </div>

              <div className='space-y-4'>
                <h3 className='text-xl font-semibold text-[#272521]'>
                  Mein Versprechen
                </h3>
                <p className='leading-relaxed text-neutral-600'>
                  Jede Behandlung führe ich mit höchster Sorgfalt und Hingabe
                  durch. Mir ist es wichtig, dass du dich bei mir wohlfühlst und
                  mit einem Lächeln nach Hause gehst. Deine Zufriedenheit und
                  dein Wohlbefinden stehen für mich an erster Stelle.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className='mt-16 rounded-2xl bg-[#f7f2ee] p-8 sm:p-12'>
            <div className='grid gap-8 md:grid-cols-2'>
              <div>
                <h3 className='mb-4 text-xl font-semibold text-[#272521]'>
                  Meine Expertise
                </h3>
                <ul className='space-y-2 text-neutral-600'>
                  <li className='flex items-center'>
                    <span className='mr-2 h-2 w-2 rounded-full bg-[#bb9167]'></span>
                    Professionelle Nageldesign-Behandlungen
                  </li>
                  <li className='flex items-center'>
                    <span className='mr-2 h-2 w-2 rounded-full bg-[#bb9167]'></span>
                    Wimpern- und Augenbrauenbehandlungen
                  </li>
                  <li className='flex items-center'>
                    <span className='mr-2 h-2 w-2 rounded-full bg-[#bb9167]'></span>
                    Circadia Treatments für die Hautpflege
                  </li>
                  <li className='flex items-center'>
                    <span className='mr-2 h-2 w-2 rounded-full bg-[#bb9167]'></span>
                    Permanent Make-Up Anwendungen
                  </li>
                </ul>
              </div>

              <div>
                <h3 className='mb-4 text-xl font-semibold text-[#272521]'>
                  Warum LK-Kosmetik?
                </h3>
                <ul className='space-y-2 text-neutral-600'>
                  <li className='flex items-center'>
                    <span className='mr-2 h-2 w-2 rounded-full bg-[#bb9167]'></span>
                    Individuelle Beratung und Behandlung
                  </li>
                  <li className='flex items-center'>
                    <span className='mr-2 h-2 w-2 rounded-full bg-[#bb9167]'></span>
                    Verwendung hochwertiger Produkte
                  </li>
                  <li className='flex items-center'>
                    <span className='mr-2 h-2 w-2 rounded-full bg-[#bb9167]'></span>
                    Entspannte und freundliche Atmosphäre
                  </li>
                  <li className='flex items-center'>
                    <span className='mr-2 h-2 w-2 rounded-full bg-[#bb9167]'></span>
                    Faire Preise und transparente Kommunikation
                  </li>
                </ul>
              </div>
            </div>

            <div className='mt-8 text-center'>
              <p className='text-neutral-600 italic'>
                "Schönheit beginnt in dem Moment, in dem du dich entscheidest,
                du selbst zu sein." - Coco Chanel
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className='mt-16 text-center'>
            <h3 className='mb-4 text-2xl font-semibold text-[#272521]'>
              Bereit für deine Verwöhnzeit?
            </h3>
            <p className='mb-6 text-neutral-600'>
              Ich freue mich darauf, dich in meinem Studio begrüßen zu dürfen!
            </p>
            <a
              href='/book-appointment'
              className='inline-flex items-center rounded-full bg-[#bb9167] px-8 py-3 font-medium text-white transition-colors duration-200 hover:bg-[#a67d57]'
            >
              Termin buchen
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
