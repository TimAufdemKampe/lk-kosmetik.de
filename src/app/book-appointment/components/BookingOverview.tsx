'use client';

import React, { useState } from 'react';
import { PriceItem } from '../../services/services-items';
import { CustomerInfo } from '../misc/validation';
import {
  getSidebarAddonLabel,
  getSidebarDisplayPrice,
  getTotalPriceSidebar,
  getServiceKey,
} from '../misc/utils';

interface BookingOverviewProps {
  customerInfo: CustomerInfo;
  times: { [key: string]: { from: string; to: string } };
  selectedServices: PriceItem[];
  selectedAddons: { [serviceKey: string]: string[] };
  onBackClick: () => void;
  onBookingSuccess: () => void;
}

export const BookingOverview: React.FC<BookingOverviewProps> = ({
  customerInfo,
  times,
  selectedServices,
  selectedAddons,
  onBackClick,
  onBookingSuccess,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmitBooking = async () => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formattedServices = selectedServices.map((service) => {
        const serviceKey = getServiceKey(service);
        const addons = selectedAddons[serviceKey] || [];

        return {
          name: service.name,
          description: service.description || '',
          price: getSidebarDisplayPrice(service, selectedAddons),
          addons: addons.length > 0 ? addons : undefined,
        };
      });

      const bookingData = {
        customerInfo,
        selectedServices: formattedServices,
        times,
        totalPrice: getTotalPriceSidebar(selectedServices, selectedAddons),
      };

      const response = await fetch('/api/send-booking-emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Fehler beim Versenden der E-Mails');
      }

      await response.json();
      setSubmitStatus('success');
      setSubmitMessage(
        'Ihre Terminanfrage wurde erfolgreich versendet! Wir melden uns bald bei Ihnen.'
      );

      onBookingSuccess();
    } catch (error) {
      console.error('Fehler beim Absenden:', error);
      setSubmitStatus('error');
      setSubmitMessage(
        error instanceof Error
          ? `Fehler: ${error.message}`
          : 'Ein unbekannter Fehler ist aufgetreten. Bitte versuchen Sie es erneut.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='relative flex w-full flex-col gap-4 rounded-xl bg-white p-6 shadow-md'>
      <div className='absolute top-6 right-6'>
        <button
          className='px-2 py-1 text-base font-medium text-[#bb9167] hover:underline'
          onClick={onBackClick}
          disabled={isSubmitting}
        >
          ← Zurück
        </button>
      </div>

      <h2 className='mb-2 text-xl font-bold'>Deine Anfrage</h2>

      {submitStatus !== 'idle' && (
        <div
          className={`mb-4 rounded-lg p-4 ${
            submitStatus === 'success'
              ? 'border border-green-200 bg-green-50 text-green-800'
              : 'border border-red-200 bg-red-50 text-red-800'
          }`}
        >
          <p
            className={`text-sm ${submitStatus === 'success' ? 'text-green-700' : 'text-red-700'}`}
          >
            {submitMessage}
          </p>
        </div>
      )}

      <div>
        <h3 className='mb-1 font-semibold'>Deine Kontaktdaten:</h3>
        <ul className='mb-2'>
          <li>
            <span className='font-medium'>Name:</span> {customerInfo.name}
          </li>
          <li>
            <span className='font-medium'>E-Mail:</span> {customerInfo.email}
          </li>
          <li>
            <span className='font-medium'>Telefon:</span> {customerInfo.phone}
          </li>
          <li>
            <span className='font-medium'>Bevorzugter Kontaktweg:</span>{' '}
            {customerInfo.preferredContactMethod === 'email'
              ? 'E-Mail'
              : 'Telefon'}
          </li>
          <li>
            <span className='font-medium'>Anmerkungen:</span>{' '}
            {customerInfo.additionalNotes || 'Keine'}
          </li>
        </ul>
      </div>

      <div>
        <h3 className='mb-1 font-semibold'>Verfügbare Zeiten:</h3>
        <ul>
          {Object.entries(times).map(([tag, z]) => {
            return z.from && z.to ? (
              <li key={tag}>
                {tag}: {z.from} - {z.to}
              </li>
            ) : null;
          })}
        </ul>
      </div>

      <div>
        <h3 className='mb-1 font-semibold'>Leistungen:</h3>
        <ul className='mb-2'>
          {selectedServices.map((item, i) => {
            const addonLabel = getSidebarAddonLabel(item, selectedAddons);
            return (
              <li
                key={item.name + (item.description || '') + i}
                className='flex flex-col'
              >
                <div className='flex justify-between gap-2'>
                  <span className='max-w-xl'>
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
            );
          })}
        </ul>
        <div className='flex justify-between border-t pt-2 font-bold'>
          <span>Geschätzter Preis</span>
          <span className='text-[#bb9167]'>
            {getTotalPriceSidebar(selectedServices, selectedAddons).toFixed(2)}{' '}
            €
          </span>
        </div>
      </div>

      <button
        className={`mt-2 w-full rounded px-4 py-2 text-lg font-semibold text-white transition-colors ${
          isSubmitting || submitStatus === 'success'
            ? 'cursor-not-allowed bg-gray-400'
            : 'bg-[#bb9167] hover:bg-[#a87b54]'
        }`}
        disabled={
          selectedServices.length === 0 ||
          isSubmitting ||
          submitStatus === 'success'
        }
        onClick={handleSubmitBooking}
      >
        {isSubmitting
          ? 'Wird versendet...'
          : submitStatus === 'success'
            ? '✓ Anfrage versendet'
            : 'Termin anfragen'}
      </button>
    </div>
  );
};
