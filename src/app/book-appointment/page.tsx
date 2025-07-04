/* eslint react-hooks/rules-of-hooks: 0 */
'use client';

import React, { Suspense, useEffect } from 'react';
import { useBookingWizard } from './hooks/useBookingWizard';
import { StepIndicator } from './components/StepIndicator';
import { CategorySelection } from './components/CategorySelection';
import { ServiceSelection } from './components/ServiceSelection';
import { TimeSelection } from './components/TimeSelection';
import { CustomerInfoForm } from './components/CustomerInfoForm';
import { BookingOverview } from './components/BookingOverview';
import { BookingSidebar } from './components/BookingSidebar';
import { BookingSuccess } from './components/BookingSuccess';
import { useSearchParams } from 'next/navigation';
import { Render } from '@/components/Render';

export default function TerminBuchenPage() {
  return (
    <Suspense>
      <Render>
        {() => {
          const searchParams = useSearchParams();
          const initialCategories =
            searchParams.get('categories')?.split(',') || [];

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
            isSuccess,
            submittedAt,
            setTimes,
            setCustomerInfo,
            setCustomerInfoErrors,
            handleCategoryChange,
            handleServiceChange,
            handleAddonChange,
            getSelectedAddonsForService,
            handleStepChange,
            handleBookingSuccess,
          } = useBookingWizard();

          useEffect(() => {
            if (initialCategories.length > 0) {
              initialCategories.forEach((category) => {
                if (!selectedCategories.includes(category)) {
                  handleCategoryChange(category);
                }
              });
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
          }, [initialCategories]);

          if (isSuccess && submittedAt) {
            return (
              <div className='mx-auto mt-12 mb-6 max-w-2xl p-4'>
                <BookingSuccess
                  customerName={customerInfo.name}
                  customerEmail={customerInfo.email}
                  submittedAt={submittedAt}
                />
              </div>
            );
          }

          return (
            <div className='mx-auto mt-12 mb-6 max-w-5xl min-w-full p-4 sm:min-w-xl'>
              <div className={`flex flex-col gap-8 md:flex-row`}>
                <div
                  className={`flex min-w-[340px] flex-1 flex-col gap-8 ${step === selectedCategories.length + 3 ? 'max-w-full' : 'max-w-[600px]'}`}
                >
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
                      onBackClick={() =>
                        handleStepChange(selectedCategories.length + 2)
                      }
                      onBookingSuccess={handleBookingSuccess}
                    />
                  )}
                </div>

                {step !== selectedCategories.length + 3 && (
                  <div className='z-30 flex w-full flex-col gap-4 md:w-80'>
                    <BookingSidebar
                      selectedServices={selectedServices}
                      selectedAddons={selectedAddons}
                      step={step}
                      wizardSteps={wizardSteps}
                      selectedCategories={selectedCategories}
                      times={times}
                      hasTimeError={hasTimeError}
                      customerInfo={customerInfo}
                      onStepChange={(newStep) => {
                        handleStepChange(newStep);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          );
        }}
      </Render>
    </Suspense>
  );
}
