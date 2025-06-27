'use client';

import React from 'react';
import { useBookingWizard } from './hooks/useBookingWizard';
import { StepIndicator } from './components/StepIndicator';
import { CategorySelection } from './components/CategorySelection';
import { ServiceSelection } from './components/ServiceSelection';
import { TimeSelection } from './components/TimeSelection';
import { CustomerInfoForm } from './components/CustomerInfoForm';
import { BookingOverview } from './components/BookingOverview';
import { BookingSidebar } from './components/BookingSidebar';

export default function TerminBuchenPage() {
  const {
    step,
    selectedCategories,
    selectedServices,
    times,
    customerInfo,
    customerInfoErrors,
    selectedAddons,
    wizardSteps,
    timeErrors,
    hasTimeError,
    setTimes,
    setCustomerInfo,
    setCustomerInfoErrors,
    handleCategoryChange,
    handleServiceChange,
    handleAddonChange,
    getSelectedAddonsForService,
    handleStepChange,
  } = useBookingWizard();

  return (
    <div className='mx-auto max-w-5xl mt-12 mb-6 p-4'>
      <div className={`flex flex-col md:flex-row gap-8`}>  
        <div className={`flex-1 flex flex-col gap-8 min-w-[340px] ${step === selectedCategories.length + 3 ? 'max-w-full' : 'max-w-[600px]'}`}>  
          <StepIndicator
            wizardSteps={wizardSteps}
            currentStep={step}
            selectedCategories={selectedCategories}
            onStepClick={handleStepChange}
          />
          
          {step === 0 && (
            <CategorySelection
              selectedCategories={selectedCategories}
              onCategoryChange={handleCategoryChange}
            />
          )}
          
          {step > 0 && step <= selectedCategories.length && (
            <ServiceSelection
              category={selectedCategories[step - 1]}
              selectedServices={selectedServices}
              onServiceChange={handleServiceChange}
              onAddonChange={handleAddonChange}
              getSelectedAddonsForService={getSelectedAddonsForService}
            />
          )}
          
          {step === selectedCategories.length + 1 && (
            <TimeSelection
              times={times}
              onTimesChange={setTimes}
              timeErrors={timeErrors}
              hasTimeError={hasTimeError}
            />
          )}
          
          {step === selectedCategories.length + 2 && (
            <CustomerInfoForm
              customerInfo={customerInfo}
              customerInfoErrors={customerInfoErrors}
              onCustomerInfoChange={setCustomerInfo}
              onCustomerInfoErrorsChange={setCustomerInfoErrors}
            />
          )}
          
          {step === selectedCategories.length + 3 && (
            <BookingOverview
              customerInfo={customerInfo}
              times={times}
              selectedServices={selectedServices}
              selectedAddons={selectedAddons}
              onBackClick={() => handleStepChange(selectedCategories.length + 2)}
            />
          )}
        </div>
        
        {/* Sidebar sticky, Buttons in Sidebar, aber nicht im letzten Schritt */}
        {step !== selectedCategories.length + 3 && (
          <div className='w-full md:w-80 flex flex-col gap-4 z-30'>
            <BookingSidebar
              selectedServices={selectedServices}
              selectedAddons={selectedAddons}
              step={step}
              wizardSteps={wizardSteps}
              selectedCategories={selectedCategories}
              times={times}
              hasTimeError={hasTimeError}
              customerInfo={customerInfo}
              onStepChange={handleStepChange}
            />
          </div>
        )}
      </div>
    </div>
  );
}
