import { PriceItems } from '@/app/services/services-items';

const extractPrice = (price: string): number => {
  const cleanedPrice = price.replace('€', '').trim();
  const parsedPrice = parseFloat(cleanedPrice);
  return isNaN(parsedPrice) ? 0 : parsedPrice;
};

export const getPriceRange = (
  items: PriceItems
): {
  low: number;
  high: number;
} => {
  const mainPrices = items.map((item) => {
    const price = item.price.replace('€', '').trim();
    return extractPrice(price);
  });
  const additionalPrices = items
    .flatMap((item) => item.additionalPrices || [])
    .map((price) => extractPrice(price.price.replace('€', '')));
  const prices = [...mainPrices, ...additionalPrices];

  const sortedPrices = prices
    .filter((price) => price > 0)
    .sort((a, b) => a - b);

  const lowestPrice = sortedPrices.find((price) => !isNaN(price)) || 0;
  const highestPrice =
    sortedPrices
      .slice()
      .reverse()
      .find((price) => !isNaN(price)) || 0;

  return {
    low: lowestPrice,
    high: highestPrice,
  };
};
