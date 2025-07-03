'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface BookTreatmentButtonProps {
  initialCategories?: string[];
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
}

export const BookTreatmentButton: React.FC<BookTreatmentButtonProps> = (
  props
) => {
  const { initialCategories = [], size, className } = props;

  const searchParams = useSearchParams();
  const categoriesFromParams = searchParams.get('categories')?.split(',') || [];

  const categories =
    initialCategories.length > 0 ? initialCategories : categoriesFromParams;
  const categoriesString = categories.join(',');

  const bookingUrl = `/book-appointment?categories=${encodeURIComponent(categoriesString)}`;

  return (
    <Link href={bookingUrl} className='inline-block'>
      <Button
        size={size}
        className={
          className ??
          'inline-block rounded bg-[#bb9167] px-6 text-sm font-medium text-white transition hover:bg-[#a87b54]'
        }
      >
        Termin vereinbaren
      </Button>
    </Link>
  );
};
