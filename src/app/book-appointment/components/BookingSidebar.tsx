import React from 'react';
import { PriceItem } from '../../services/services-items';
import { CustomerInfo, validateCustomerInfo } from '../misc/validation';
import {
  getSidebarAddonLabel,
  getSidebarDisplayPrice,
  getTotalPriceSidebar,
  formatDuration,
  calculateTotalDuration,
} from '../misc/utils';
import { SERVICE_CATEGORIES } from '../misc/constants';

interface BookingSidebarProps {
  selectedServices: PriceItem[];
  selectedAddons: { [serviceKey: string]: string[] };
  step: number;
  wizardSteps: string[];
  selectedCategories: string[];
  times: { [key: string]: { from: string; to: string } };
  hasTimeError: boolean;
  customerInfo: CustomerInfo;
  onStepChange: (newStep: number) => void;
}

export const BookingSidebar: React.FC<BookingSidebarProps> = ({
  selectedServices,
  selectedAddons,
  step,
  wizardSteps,
  selectedCategories,
  times,
  hasTimeError,
  customerInfo,
  onStepChange,
}) => {
  const getServicesForCategory = (category: string) => {
    const cat = SERVICE_CATEGORIES.find((k) => k.kategorie === category);
    return cat ? cat.items : [];
  };

  const handleNextStep = () => {
    if (step === selectedCategories.length + 2) {
      const errors = validateCustomerInfo(customerInfo);
      if (Object.values(errors).some(Boolean)) return;
    }
    onStepChange(step + 1);
  };

  const isNextDisabled = () => {
    return (
      (step === 0 && selectedCategories.length === 0) ||
      (step > 0 &&
        step <= selectedCategories.length &&
        getServicesForCategory(selectedCategories[step - 1]).length > 0 &&
        !getServicesForCategory(selectedCategories[step - 1]).some((item) =>
          selectedServices.find(
            (l) => l.name === item.name && l.description === item.description
          )
        )) ||
      (step === selectedCategories.length + 1 &&
        (Object.keys(times).length === 0 || hasTimeError)) ||
      (step === selectedCategories.length + 2 &&
        Object.values(validateCustomerInfo(customerInfo)).some(Boolean))
    );
  };

  return (
    <div className='sticky top-24'>
      <div className='flex w-full flex-col gap-2 rounded-xl bg-white p-4 shadow-md md:w-80'>
        <h3 className='mb-2 text-lg font-semibold'>Deine Auswahl</h3>
        <ul className='mb-2 flex flex-col'>
          {selectedServices.length === 0 ? (
            <li className='text-neutral-400'>Noch keine Leistung gewählt</li>
          ) : (
            selectedServices.map((item, i) => {
              const addonLabel = getSidebarAddonLabel(item, selectedAddons);
              return (
                <React.Fragment key={item.name + (item.description || '') + i}>
                  <li className='flex flex-col px-1 py-1'>
                    <div className='flex items-center justify-between gap-2'>
                      <span>
                        {item.name}
                        {item.description ? ` (${item.description})` : ''}
                      </span>
                      <span className='font-semibold text-[#bb9167]'>
                        {getSidebarDisplayPrice(item, selectedAddons)}
                      </span>
                    </div>
                    {addonLabel && (
                      <div className='ml-4 text-xs text-neutral-700'>
                        {addonLabel}
                      </div>
                    )}
                  </li>
                  {i < selectedServices.length - 1 && (
                    <hr className='my-1 border-t border-neutral-200' />
                  )}
                </React.Fragment>
              );
            })
          )}
        </ul>
        <div className='border-t-2'></div>
        <div className='flex justify-between pt-2 font-bold'>
          <span>Geschätzter Preis:</span>
          <span className='text-[#bb9167]'>
            ca.{' '}
            {getTotalPriceSidebar(selectedServices, selectedAddons).toFixed(2)}{' '}
            €
          </span>
        </div>
        <div className='mt-2 text-xs text-neutral-500'>
          Geschätzte Dauer: ca.{' '}
          {formatDuration(
            calculateTotalDuration(selectedServices, selectedAddons)
          )}
        </div>
      </div>

      <div className='mt-4 flex gap-2 pt-2'>
        {step > 0 && (
          <button
            className={`rounded border border-neutral-300 bg-white px-4 py-2 hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-50`}
            onClick={() => onStepChange(step - 1)}
          >
            Zurück
          </button>
        )}
        {step < wizardSteps.length - 1 && (
          <button
            className={`rounded bg-[#bb9167] px-4 py-2 text-white hover:bg-[#a87b54] disabled:cursor-not-allowed disabled:opacity-50`}
            onClick={handleNextStep}
            disabled={isNextDisabled()}
          >
            Weiter
          </button>
        )}
      </div>
    </div>
  );
};
