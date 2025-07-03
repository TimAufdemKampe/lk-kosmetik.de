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
    <div className='mb-4 w-full overflow-hidden'>
      <div className='flex min-w-0 items-center justify-between gap-1 px-2 sm:gap-2 sm:px-0'>
        {wizardSteps.map((label, idx) => (
          <React.Fragment key={label}>
            <button
              className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold sm:h-8 sm:w-8 sm:text-base ${currentStep === idx ? 'border-[#bb9167] bg-[#bb9167] text-white' : 'border-neutral-300 bg-white text-neutral-500'}`}
              onClick={() => onStepClick(idx)}
              disabled={
                idx > currentStep ||
                (idx === 0
                  ? false
                  : idx <= selectedCategories.length &&
                    selectedCategories.length === 0) ||
                (idx > 0 &&
                  idx <= selectedCategories.length &&
                  selectedCategories.length < idx)
              }
            >
              {idx + 1}
            </button>
            {idx < wizardSteps.length - 1 && (
              <div className='h-1 max-w-none min-w-1 flex-1 rounded-full bg-neutral-200'></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
