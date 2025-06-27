import React from 'react';
import { CustomerInfo, CustomerInfoErrors } from '../misc/validation';

interface CustomerInfoFormProps {
  customerInfo: CustomerInfo;
  customerInfoErrors: CustomerInfoErrors;
  onCustomerInfoChange: React.Dispatch<React.SetStateAction<CustomerInfo>>;
  onCustomerInfoErrorsChange: React.Dispatch<React.SetStateAction<CustomerInfoErrors>>;
}

export const CustomerInfoForm: React.FC<CustomerInfoFormProps> = ({
  customerInfo,
  customerInfoErrors,
  onCustomerInfoChange,
  onCustomerInfoErrorsChange,
}) => {
  return (
    <div className="flex flex-col gap-4 bg-white rounded-xl shadow-md p-6 border border-neutral-100">
      <label className='mb-1 block font-medium'>Deine Kontaktdaten</label>
      <div className='flex flex-col gap-3'>
        <div>
          <label className='block text-sm font-medium mb-1' htmlFor='customer-name'>Name</label>
          <input
            id='customer-name'
            type='text'
            className={`w-full rounded border px-3 py-2 text-base ${customerInfoErrors.name ? 'border-red-400' : 'border-neutral-300'}`}
            value={customerInfo.name}
            onChange={e => {
              onCustomerInfoChange({ ...customerInfo, name: e.target.value });
              onCustomerInfoErrorsChange({ ...customerInfoErrors, name: '' });
            }}
            placeholder='Dein Name'
            autoComplete='name'
          />
          {customerInfoErrors.name && <div className='text-xs text-red-500 mt-1'>{customerInfoErrors.name}</div>}
        </div>
        <div>
          <label className='block text-sm font-medium mb-1' htmlFor='customer-email'>E-Mail</label>
          <input
            id='customer-email'
            type='email'
            className={`w-full rounded border px-3 py-2 text-base ${customerInfoErrors.email ? 'border-red-400' : 'border-neutral-300'}`}
            value={customerInfo.email}
            onChange={e => {
              onCustomerInfoChange({ ...customerInfo, email: e.target.value });
              onCustomerInfoErrorsChange({ ...customerInfoErrors, email: '' });
            }}
            placeholder='deine@email.de'
            autoComplete='email'
          />
          {customerInfoErrors.email && <div className='text-xs text-red-500 mt-1'>{customerInfoErrors.email}</div>}
        </div>
        <div>
          <label className='block text-sm font-medium mb-1' htmlFor='customer-phone'>Telefonnummer</label>
          <input
            id='customer-phone'
            type='tel'
            className={`w-full rounded border px-3 py-2 text-base ${customerInfoErrors.phone ? 'border-red-400' : 'border-neutral-300'}`}
            value={customerInfo.phone}
            onChange={e => {
              onCustomerInfoChange({ ...customerInfo, phone: e.target.value });
              onCustomerInfoErrorsChange({ ...customerInfoErrors, phone: '' });
            }}
            placeholder='z.B. 0176 12345678'
            autoComplete='tel'
          />
          {customerInfoErrors.phone && <div className='text-xs text-red-500 mt-1'>{customerInfoErrors.phone}</div>}
        </div>
      </div>
    </div>
  );
};
