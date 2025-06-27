import React from 'react';

interface StepIndicatorProps {
  wizardSteps: string[];
  currentStep: number;
  selectedCategories: string[];
  onStepClick: (step: number) => void;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({
  wizardSteps,
  currentStep,
  selectedCategories,
  onStepClick,
}) => {
  return (
    <div className='flex items-center gap-2 mb-4'>
      {wizardSteps.map((label, idx) => (
        <React.Fragment key={label}>
          <button
            className={`rounded-full w-8 h-8 flex items-center justify-center font-bold border-2 ${currentStep === idx ? 'bg-[#bb9167] text-white border-[#bb9167]' : 'bg-white border-neutral-300 text-neutral-500'}`}
            onClick={() => onStepClick(idx)}
            disabled={
              idx > currentStep ||
              (idx === 0 ? false : idx <= selectedCategories.length && selectedCategories.length === 0) ||
              (idx > 0 && idx <= selectedCategories.length && selectedCategories.length < idx)
            }
          >
            {idx + 1}
          </button>
          {idx < wizardSteps.length - 1 && <span className='w-8 h-1 bg-neutral-200 rounded-full'></span>}
        </React.Fragment>
      ))}
    </div>
  );
};
