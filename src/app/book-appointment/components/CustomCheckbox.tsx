import React from 'react';

interface CustomCheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  checked,
  onChange,
  className = '',
  ...props
}) => (
  <span className='relative inline-flex h-5 w-5 items-center justify-center'>
    <input
      type='checkbox'
      checked={checked}
      onChange={onChange}
      className={`h-5 w-5 appearance-none rounded border border-neutral-300 transition-all duration-150 focus:ring-2 focus:ring-[#bb9167] ${checked ? 'border-[#bb9167] bg-[#bb9167]' : 'bg-white'} ${className}`}
      {...props}
    />
    {checked && (
      <svg
        className='pointer-events-none absolute top-0 left-0 h-5 w-5'
        viewBox='0 0 20 20'
        fill='none'
        stroke='white'
        strokeWidth='2.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <polyline points='5 11 9 15 15 7' />
      </svg>
    )}
  </span>
);
