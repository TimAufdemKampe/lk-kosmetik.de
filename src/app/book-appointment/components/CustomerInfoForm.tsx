import React from 'react';
import { CustomerInfo, CustomerInfoErrors } from '../misc/validation';

interface CustomerInfoFormProps {
  customerInfo: CustomerInfo;
  customerInfoErrors: CustomerInfoErrors;
  onCustomerInfoChange: React.Dispatch<React.SetStateAction<CustomerInfo>>;
  onCustomerInfoErrorsChange: React.Dispatch<
    React.SetStateAction<CustomerInfoErrors>
  >;
}

export const CustomerInfoForm: React.FC<CustomerInfoFormProps> = ({
  customerInfo,
  customerInfoErrors,
  onCustomerInfoChange,
  onCustomerInfoErrorsChange,
}) => {
  return (
    <div className='flex flex-col gap-4 rounded-xl border border-neutral-100 bg-white p-6 shadow-md'>
      <label className='mb-1 block font-medium'>Deine Kontaktdaten</label>
      <div className='flex flex-col gap-3'>
        <div>
          <label
            className='mb-1 block text-sm font-medium'
            htmlFor='customer-name'
          >
            Name
          </label>
          <input
            id='customer-name'
            type='text'
            className={`w-full rounded border px-3 py-2 text-base ${customerInfoErrors.name ? 'border-red-400' : 'border-neutral-300'}`}
            value={customerInfo.name}
            onChange={(e) => {
              onCustomerInfoChange({ ...customerInfo, name: e.target.value });
              onCustomerInfoErrorsChange({ ...customerInfoErrors, name: '' });
            }}
            placeholder='Dein Name'
            autoComplete='name'
          />
          {customerInfoErrors.name && (
            <div className='mt-1 text-xs text-red-500'>
              {customerInfoErrors.name}
            </div>
          )}
        </div>
        <div>
          <label
            className='mb-1 block text-sm font-medium'
            htmlFor='customer-email'
          >
            E-Mail
          </label>
          <input
            id='customer-email'
            type='email'
            className={`w-full rounded border px-3 py-2 text-base ${customerInfoErrors.email ? 'border-red-400' : 'border-neutral-300'}`}
            value={customerInfo.email}
            onChange={(e) => {
              onCustomerInfoChange({ ...customerInfo, email: e.target.value });
              onCustomerInfoErrorsChange({ ...customerInfoErrors, email: '' });
            }}
            placeholder='deine@email.de'
            autoComplete='email'
          />
          {customerInfoErrors.email && (
            <div className='mt-1 text-xs text-red-500'>
              {customerInfoErrors.email}
            </div>
          )}
        </div>
        <div>
          <label
            className='mb-1 block text-sm font-medium'
            htmlFor='customer-phone'
          >
            Telefonnummer
          </label>
          <input
            id='customer-phone'
            type='tel'
            className={`w-full rounded border px-3 py-2 text-base ${customerInfoErrors.phone ? 'border-red-400' : 'border-neutral-300'}`}
            value={customerInfo.phone}
            onChange={(e) => {
              onCustomerInfoChange({ ...customerInfo, phone: e.target.value });
              onCustomerInfoErrorsChange({ ...customerInfoErrors, phone: '' });
            }}
            placeholder='z.B. 0176 12345678'
            autoComplete='tel'
          />
          {customerInfoErrors.phone && (
            <div className='mt-1 text-xs text-red-500'>
              {customerInfoErrors.phone}
            </div>
          )}
        </div>
        <div>
          <label
            className='mb-1 block text-sm font-medium'
            htmlFor='customer-contact-preference'
          >
            Bevorzugte Kontaktmethode
          </label>
          <div className='relative'>
            <select
              id='customer-contact-preference'
              className='w-full cursor-pointer appearance-none rounded border border-neutral-300 bg-white px-3 py-2 pr-10 text-base focus:border-transparent focus:ring-2 focus:ring-[#bb9167] focus:outline-none'
              value={customerInfo.preferredContactMethod}
              onChange={(e) =>
                onCustomerInfoChange({
                  ...customerInfo,
                  preferredContactMethod: e.target.value as 'email' | 'phone',
                })
              }
            >
              <option value='email'>E-Mail</option>
              <option value='phone'>Telefon</option>
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
              <svg
                className='h-5 w-5 text-[#bb9167]'
                fill='none'
                viewBox='0 0 20 20'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <label
            className='mb-1 block text-sm font-medium'
            htmlFor='customer-notes'
          >
            Notizen
          </label>
          <textarea
            id='customer-notes'
            className='w-full rounded border border-neutral-300 px-3 py-2 text-base'
            value={customerInfo.additionalNotes}
            onChange={(e) =>
              onCustomerInfoChange({
                ...customerInfo,
                additionalNotes: e.target.value,
              })
            }
            placeholder='Optional: Deine Wünsche oder Anmerkungen'
            rows={3}
          />
        </div>
      </div>
    </div>
  );
};
