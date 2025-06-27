import React from 'react';

interface CustomCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
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
  <span className="relative inline-flex items-center justify-center w-5 h-5">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className={`appearance-none w-5 h-5 rounded border border-neutral-300 focus:ring-2 focus:ring-[#bb9167] transition-all duration-150 ${checked ? 'bg-[#bb9167] border-[#bb9167]' : 'bg-white'} ${className}`}
      {...props}
    />
    {checked && (
      <svg
        className="absolute pointer-events-none left-0 top-0 w-5 h-5"
        viewBox="0 0 20 20"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="5 11 9 15 15 7" />
      </svg>
    )}
  </span>
);
