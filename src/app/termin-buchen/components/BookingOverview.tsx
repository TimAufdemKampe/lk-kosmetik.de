import React from 'react';
import { PriceItem } from '../../services/services-items';
import { CustomerInfo } from '../misc/validation';
import { getSidebarAddonLabel, getSidebarDisplayPrice, getTotalPriceSidebar } from '../misc/utils';

interface BookingOverviewProps {
  customerInfo: CustomerInfo;
  times: { [key: string]: { from: string; to: string } };
  selectedServices: PriceItem[];
  selectedAddons: { [serviceKey: string]: string[] };
  onBackClick: () => void;
}

export const BookingOverview: React.FC<BookingOverviewProps> = ({
  customerInfo,
  times,
  selectedServices,
  selectedAddons,
  onBackClick,
}) => {
  return (
    <div className='w-full bg-white rounded-xl shadow-md p-6 flex flex-col gap-4 relative'>
      {/* Zurück-Button oben rechts als Link-Button */}
      <div className='absolute right-6 top-6'>
        <button
          className='text-[#bb9167] hover:underline text-base font-medium px-2 py-1'
          onClick={onBackClick}
        >
          ← Zurück
        </button>
      </div>
      <h2 className='text-xl font-bold mb-2'>Deine Anfrage</h2>
      {/* Kundendaten anzeigen */}
      <div>
        <h3 className='font-semibold mb-1'>Deine Kontaktdaten:</h3>
        <ul className='mb-2'>
          <li><span className='font-medium'>Name:</span> {customerInfo.name}</li>
          <li><span className='font-medium'>E-Mail:</span> {customerInfo.email}</li>
          <li><span className='font-medium'>Telefon:</span> {customerInfo.phone}</li>
        </ul>
      </div>
      {/* Zuerst Zeiten, dann Leistungen */}
      <div>
        <h3 className='font-semibold mb-1'>Verfügbare Zeiten:</h3>
        <ul>
          {Object.entries(times).map(([tag, z]) => {
            return z.from && z.to ? 
              <li key={tag}>{tag}: {z.from} - {z.to}</li>
              : null;
            }
          )}
        </ul>
      </div>
      <div>
        <h3 className='font-semibold mb-1'>Leistungen:</h3>
        <ul className='mb-2'>
          {selectedServices.map((item, i) => {
            const addonLabel = getSidebarAddonLabel(item, selectedAddons);
            return (
              <li key={item.name + (item.description || '') + i} className='flex flex-col'>
                <div className='flex justify-between gap-2'>
                  <span className="max-w-xl">{item.name}{item.description ? ` (${item.description})` : ''}</span>
                  <span className='text-[#bb9167] font-semibold'>{getSidebarDisplayPrice(item, selectedAddons)}</span>
                </div>
                {addonLabel && (
                  <div className='ml-4 text-xs text-neutral-700'>{addonLabel}</div>
                )}
              </li>
            );
          })}
        </ul>
        <div className='flex justify-between font-bold border-t pt-2'>
          <span>Gesamtpreis</span>
          <span className='text-[#bb9167]'>{getTotalPriceSidebar(selectedServices, selectedAddons).toFixed(2)} €</span>
        </div>
      </div>
      <button
        className='rounded bg-[#bb9167] px-4 py-2 text-white hover:bg-[#a87b54] w-full text-lg font-semibold mt-2'
        disabled={selectedServices.length === 0}
      >
        Termin anfragen
      </button>
    </div>
  );
};
