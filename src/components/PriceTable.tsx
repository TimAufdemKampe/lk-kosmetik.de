import React from 'react';
import { PriceItems } from '@/app/services/services-items';

export function PriceTable({
  title,
  items,
}: {
  title: string;
  items: PriceItems;
}) {
  return (
    <div className='mb-8 w-full max-w-md rounded-xl bg-white/80 p-6 shadow'>
      <h3 className='mb-4 text-xl font-bold text-neutral-800'>{title}</h3>
      <ul className='divide-y divide-neutral-200'>
        {items.map((item, i) => (
          <li key={i} className='py-4 text-neutral-700'>
            <div className='flex items-center justify-between gap-1'>
              <span className='font-semibold'>{item.name}</span>
              <span className='font-semibold'>{item.price}</span>
            </div>
            {item.additionalPrices && item.additionalPrices.length > 0 && (
              <ul className='space-y-1'>
                {item.additionalPrices.map((subItem, j) => (
                  <li
                    key={j}
                    className='flex items-center justify-between gap-1'
                  >
                    <span className='text-sm text-neutral-600'>
                      {subItem.name}
                    </span>
                    <span className='font-semibold text-neutral-700'>
                      {subItem.price}
                    </span>
                  </li>
                ))}
              </ul>
            )}
            {item.description && (
              <div className='mt-2 text-sm text-neutral-600'>
                {item.description}
              </div>
            )}
            {item.additionalDescription && (
              <div className='text-sm text-neutral-500'>
                {item.additionalDescription}
              </div>
            )}
            {item.addon && (
              <div className='mt-1 text-sm text-neutral-400'>{item.addon}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
