import { Poppins, Alice } from 'next/font/google';

export const PoppinsFont = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const AliceFont = Alice({
  variable: '--font-alice',
  subsets: ['latin'],
  weight: '400',
});
