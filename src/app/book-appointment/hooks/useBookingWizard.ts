import { useState } from 'react';
import { PriceItem } from '../../services/services-items';
import {
  CustomerInfo,
  CustomerInfoErrors,
  validateCustomerInfo,
} from '../misc/validation';
import {
  SERVICE_CATEGORIES,
  OPENING_HOURS,
  WIZARD_STEPS_BASE,
} from '../misc/constants';
import { getServiceKey } from '../misc/utils';

export const useBookingWizard = () => {
  const [step, setStep] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedServices, setSelectedServices] = useState<PriceItem[]>([]);
  const [times, setTimes] = useState<{
    [key: string]: { from: string; to: string };
  }>({});
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: '',
    email: '',
    phone: '',
    preferredContactMethod: 'email',
    additionalNotes: undefined,
  });
  const [customerInfoErrors, setCustomerInfoErrors] =
    useState<CustomerInfoErrors>({ name: '', email: '', phone: '' });
  const [selectedAddons, setSelectedAddons] = useState<{
    [serviceKey: string]: string[];
  }>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedAt, setSubmittedAt] = useState<Date | null>(null);

  const wizardSteps = [
    WIZARD_STEPS_BASE[0],
    ...selectedCategories.map((cat) => `Leistungen wählen: ${cat}`),
    'Verfügbare Zeiten',
    'Deine Kontaktdaten',
    'Anfrage prüfen & absenden',
  ];

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
    setSelectedServices((prev) =>
      prev.filter((service) => {
        const cat = SERVICE_CATEGORIES.find((k) => k.kategorie === category);
        if (!cat) return true;
        return !cat.items.some(
          (item) =>
            item.name === service.name &&
            item.description === service.description
        );
      })
    );
  };

  const handleServiceChange = (item: PriceItem) => {
    setSelectedServices((prev) => {
      if (
        prev.find(
          (l) => l.name === item.name && l.description === item.description
        )
      ) {
        return prev.filter(
          (l) => !(l.name === item.name && l.description === item.description)
        );
      } else {
        return [...prev, item];
      }
    });
  };

  const handleAddonChange = (service: PriceItem, addonName: string) => {
    const key = getServiceKey(service);
    setSelectedAddons((prev) => {
      const current = prev[key] || [];
      if (current.includes(addonName)) {
        return { ...prev, [key]: current.filter((n) => n !== addonName) };
      } else {
        return { ...prev, [key]: [...current, addonName] };
      }
    });
  };

  const getSelectedAddonsForService = (service: PriceItem) => {
    const key = getServiceKey(service);
    return selectedAddons[key] || [];
  };

  const timeErrors: Record<string, string> = {};
  Object.entries(times).forEach(([day, { from, to }]) => {
    const min = OPENING_HOURS[day].start;
    const max = OPENING_HOURS[day].end;
    if (from < min || from > max || to < min || to > max) {
      timeErrors[day] =
        `Bitte nur Zeiten zwischen ${min} und ${max} auswählen.`;
    } else if (from >= to) {
      timeErrors[day] = 'Die Endzeit muss nach der Startzeit liegen.';
    }
  });
  const hasTimeError = Object.keys(timeErrors).length > 0;

  const handleStepChange = (newStep: number) => {
    if (newStep === selectedCategories.length + 3) {
      const errors = validateCustomerInfo(customerInfo);
      setCustomerInfoErrors(errors);
      if (Object.values(errors).some(Boolean)) return;
    }
    setStep(newStep);
  };

  const handleBookingSuccess = () => {
    setIsSuccess(true);
    setSubmittedAt(new Date());
  };

  return {
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

    setStep,
    setTimes,
    setCustomerInfo,
    setCustomerInfoErrors,

    handleCategoryChange,
    handleServiceChange,
    handleAddonChange,
    getSelectedAddonsForService,
    handleStepChange,
    handleBookingSuccess,
  };
};
