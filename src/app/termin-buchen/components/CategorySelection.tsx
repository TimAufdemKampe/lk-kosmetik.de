import React from 'react';
import { SERVICE_CATEGORIES } from '../misc/constants';
import { CustomCheckbox } from './CustomCheckbox';

interface CategorySelectionProps {
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
}

export const CategorySelection: React.FC<CategorySelectionProps> = ({
  selectedCategories,
  onCategoryChange,
}) => {
  return (
    <div className='flex flex-col gap-4'>
      <label className='mb-1 block font-medium'>Kategorien wählen:</label>
      <div className='flex flex-wrap gap-2 mb-2'>
        {SERVICE_CATEGORIES.map((k) => (
          <label
            key={k.kategorie}
            className={`flex items-center gap-2 border rounded px-3 py-2 cursor-pointer transition-colors duration-150
              ${selectedCategories.includes(k.kategorie) ? 'border-[#bb9167] bg-[#f7f2ee]' : 'border-neutral-200 bg-white hover:bg-neutral-50'}`}
          >
            <CustomCheckbox
              checked={selectedCategories.includes(k.kategorie)}
              onChange={() => onCategoryChange(k.kategorie)}
            />
            <span className='font-medium text-base select-none'>{k.kategorie}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
