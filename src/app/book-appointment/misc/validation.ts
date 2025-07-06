export interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  preferredContactMethod: 'email' | 'phone';
  additionalNotes: string | undefined;
}

export interface CustomerInfoErrors {
  name: string;
  email: string;
  phone: string;
}

export function validateCustomerInfo(info: CustomerInfo): CustomerInfoErrors {
  const errors: CustomerInfoErrors = { name: '', email: '', phone: '' };

  if (!info.name.trim()) {
    errors.name = 'Bitte gib deinen Namen ein.';
  }

  if (!info.email.trim()) {
    errors.email = 'Bitte gib deine E-Mail-Adresse ein.';
  } else if (!/^\S+@\S+\.\S+$/.test(info.email)) {
    errors.email = 'Bitte gib eine gültige E-Mail-Adresse ein.';
  }

  if (!info.phone.trim()) {
    errors.phone = 'Bitte gib deine Telefonnummer ein.';
  }

  return errors;
}
