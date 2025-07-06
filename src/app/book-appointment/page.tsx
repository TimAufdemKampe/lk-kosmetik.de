import React from 'react';
import { BookAppointmentSection } from '@/app/book-appointment/BookAppointmentSection';

export const metadata = {
  title: 'Termin buchen',
  description:
    'Buchen Sie Ihren Termin bei LK-Kosmetik einfach und bequem online.',
};

export default function TerminBuchenPage() {
  return <BookAppointmentSection />;
}
