import {
  NAILS_ITEMS,
  LASHES_ITEMS,
  BROWS_ITEMS,
  CIRCADIA_TREATMENTS_ITEMS,
  PERMANENT_MAKE_UP_ITEMS,
} from '../../services/services-items';

export const SERVICE_CATEGORIES = [
  {
    kategorie: 'Nägel',
    items: NAILS_ITEMS,
  },
  {
    kategorie: 'Wimpern',
    items: LASHES_ITEMS,
  },
  {
    kategorie: 'Augenbrauen',
    items: BROWS_ITEMS,
  },
  {
    kategorie: 'Circadia Treatments',
    items: CIRCADIA_TREATMENTS_ITEMS,
  },
  {
    kategorie: 'Permanent Make Up',
    items: PERMANENT_MAKE_UP_ITEMS,
  },
];

export const WEEKDAYS = [
  'Montag',
  'Dienstag',
  'Mittwoch',
  'Donnerstag',
  'Freitag',
];

export const OPENING_HOURS: Record<string, { start: string; end: string }> = {
  Montag: { start: '08:30', end: '19:00' },
  Dienstag: { start: '08:30', end: '19:00' },
  Mittwoch: { start: '08:30', end: '19:00' },
  Donnerstag: { start: '08:30', end: '11:00' },
  Freitag: { start: '08:30', end: '16:30' },
};

export const WIZARD_STEPS_BASE = [
  'Kategorien wählen',
  'Verfügbare Zeiten',
  'Anfrage prüfen & absenden',
];
