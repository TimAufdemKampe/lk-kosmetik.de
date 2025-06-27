import React from 'react';
import { PriceItem } from '../../services/services-items';
import { SERVICE_CATEGORIES } from '../misc/constants';
import { getServiceKey } from '../misc/utils';
import { CustomCheckbox } from './CustomCheckbox';

interface ServiceSelectionProps {
  category: string;
  selectedServices: PriceItem[];
  onServiceChange: (item: PriceItem) => void;
  onAddonChange: (service: PriceItem, addonName: string) => void;
  getSelectedAddonsForService: (service: PriceItem) => string[];
}

export const ServiceSelection: React.FC<ServiceSelectionProps> = ({
  category,
  selectedServices,
  onServiceChange,
  onAddonChange,
  getSelectedAddonsForService,
}) => {
  const getServicesForCategory = (category: string) => {
    const cat = SERVICE_CATEGORIES.find((k) => k.kategorie === category);
    return cat ? cat.items : [];
  };

  const services = getServicesForCategory(category);

  return (
    <div className='flex flex-col gap-4'>
      <label className='mb-1 block font-medium'>Leistungen wählen für {category}:</label>
      <div className='flex flex-col gap-2'>
        {services.map((item) => {
          const checked = !!selectedServices.find((l) => l.name === item.name && l.description === item.description);
          const key = getServiceKey(item);
          return (
            <div key={key} className='flex flex-col gap-1'>
              <label
                className={`flex items-center gap-3 rounded border px-3 py-2 cursor-pointer transition-colors duration-150
                  ${checked ? 'border-[#bb9167] bg-[#f7f2ee]' : 'border-neutral-200 bg-white hover:bg-neutral-50'}`}
              >
                <CustomCheckbox
                  checked={checked}
                  onChange={() => onServiceChange(item)}
                />
                <div className='flex flex-col select-none'>
                  <span className='font-medium'>{item.name}{item.description ? ` (${item.description})` : ''}</span>
                  {item.additionalDescription && <span className='text-xs text-neutral-500'>{item.additionalDescription}</span>}
                </div>
                <span className='ml-auto font-semibold text-[#bb9167] select-none'>{item.price}</span>
              </label>
              {/* Add-ons anzeigen, wenn Service ausgewählt und Add-ons vorhanden */}
              {checked && item.additionalPrices && item.additionalPrices.length > 0 && (
                <div className='ml-8 flex flex-col gap-1'>
                  {item.additionalPrices.map((addon) => (
                    <label key={addon.name} className='flex items-center gap-2 text-sm px-2 py-1 rounded bg-[#f7f2ee] border border-[#ecdcc7]'>
                      <CustomCheckbox
                        checked={getSelectedAddonsForService(item).includes(addon.name)}
                        onChange={() => onAddonChange(item, addon.name)}
                      />
                      <span>{addon.name}</span>
                      <span className='ml-auto text-[#bb9167] font-semibold'>{addon.price}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
