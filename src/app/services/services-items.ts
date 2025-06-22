export type PriceItem = {
  name: string;
  price: string;
  description?: string;
  additionalDescription?: string;
  addon?: string;
  additionalPrices?: {
    name: string;
    price: string;
  }[];
};
export type PriceItems = PriceItem[];

export const BROWS_ITEMS: PriceItems = [
  { name: 'Augenbrauenlifting inkl. Färben & Pflege', price: '55€' },
  { name: 'Augenbrauen zupfen', price: '15€' },
  { name: 'Augenbrauen färben', price: '10€' },
  { name: 'Kombipreis (Zupfen + Färben)', price: '23€' },
];

export const CIRCADIA_TREATMENTS_ITEMS: PriceItems = [
  {
    name: 'Aquafacial (alle Hauttypen)',
    description:
      'Ein Aquafacial reinigt, peelt und hydratisiert die Haut für ein klares, gepflegtes Hautbild.',
    additionalDescription: 'Reinigung, Peeling, Pflege',
    price: '80€',
    additionalPrices: [
      {
        name: '+ Coldhammer',
        price: '90€',
      },
    ],
  },
  {
    name: 'Mini Behandlung',
    description: '',
    additionalDescription: 'Reinigung, Pflege',
    price: '55€',
  },
  {
    name: 'Basis Behandlung',
    description: '',
    additionalDescription: 'Reinigung, Maske, Serum, Pflege',
    price: '99€',
    additionalPrices: [
      {
        name: '+ Enzympeeling',
        price: '114€',
      },
    ],
  },
  {
    name: 'Oxygen RX Treatment (Akne, Rosazea)',
    description:
      'Durch die gezielte Erzeugung von Sauerstoff auf der Haut wird nicht nur Hautrötungen bei Akne, Rosazea und Teleangiektasien entgegengewirkt, sondern gleichzeitig ein strahlender Teint gefördert. Diese Behandlung verwöhnt und pflegt alle Hauttypen.',
    additionalDescription: 'Reinigung, Oxygen Maske, Seren, Pflege',
    price: '130€',
    additionalPrices: [
      {
        name: '+ Enzympeeling',
        price: '155€',
      },
    ],
  },
  {
    name: 'Firming Peptide (Aging, Feuchtigkeit, Lymphanregend)',
    description:
      'In dieser straffenden und festigenden Maske kommt eine Technologie zum Einsatz, die auf den neuesten Erkenntnissen über Peptide, Antioxidantien und Hautregeneration beruht und eine verbesserte Mikrozirkulation und Entgiftung sowie eine sofortige Straffung und Festigung bewirkt.',
    additionalDescription: 'Reinigung, Masken, Seren, Pflege',
    price: '130€',
    additionalPrices: [
      {
        name: '+ Enzympeeling',
        price: '155€',
      },
    ],
  },
  {
    name: 'Switch Treatment (natürliche Hautverjüngung)',
    description:
      'Circadias Signature-Behandlung ist eine liebevolle Alternative zu chemischen Peelings, indem sie sanft den natürlichen Reparaturmechanismus der Haut aktiviert. Die Behandlung verleiht der Haut sofortige Frische und ein angenehmes Gefühl.',
    additionalDescription:
      'Reinigung, Switch Treatment, Seren, Pflege inkl. Produkte für die Nachbehandlung',
    price: '169€',
  },
];

export const LASHES_ITEMS: PriceItems = [
  {
    name: 'Wimpernlifting',
    price: '55€',
    additionalPrices: [
      {
        name: 'inkl. Farben & Pflege',
        price: '60€',
      },
    ],
  },
  { name: 'Wimpern färben', price: '10€' },
  {
    name: 'Wimpernverlängerung 1:1',
    description: 'Erstbehandlung',
    price: '90€',
  },
  {
    name: 'Wimpernverlängerung 1:1',
    description: 'Auffüllen bis 2 Wochen',
    price: '45€',
  },
  {
    name: 'Wimpernverlängerung 1:1',
    description: 'Auffüllen bis 3 Wochen',
    price: '50€',
  },
  {
    name: 'Wimpernverlängerung 1:1',
    description: 'Auffüllen bis 4 Wochen',
    price: '60€',
  },
  {
    name: 'Wimpernverlängerung Light Volume/Mix',
    description: 'Erstbehandlung',
    price: '110€',
  },
  {
    name: 'Wimpernverlängerung Light Volume/Mix',
    description: 'Auffüllen bis 2 Wochen',
    price: '50€',
  },
  {
    name: 'Wimpernverlängerung Light Volume/Mix',
    description: 'Auffüllen bis 3 Wochen',
    price: '55€',
  },
  {
    name: 'Wimpernverlängerung Light Volume/Mix',
    description: 'Auffüllen bis 4 Wochen',
    price: '65€',
  },
  {
    name: 'Wimpernverlängerung Volume',
    description: 'Erstbehandlung',
    price: '130€',
  },
  {
    name: 'Wimpernverlängerung Volume',
    description: 'Auffüllen bis 2 Wochen',
    price: '55€',
  },
  {
    name: 'Wimpernverlängerung Volume',
    description: 'Auffüllen bis 3 Wochen',
    price: '60€',
  },
  {
    name: 'Wimpernverlängerung Volume',
    description: 'Auffüllen bis 4 Wochen',
    price: '70€',
  },
  { name: 'Mini Fresh Up', price: 'ab 20€' },
  { name: 'Wimpernverlängerung entfernen', price: '20€' },
  {
    name: 'Hinweis',
    price: '',
    addon: 'Ein Zeitraum von mehr als 4 Wochen wird als Neuanlage berechnet.',
  },
];

export const NAILS_ITEMS: PriceItems = [
  { name: 'Neumodellage Natur', price: '50€' },
  { name: 'Neumodellage Natur + Verlängerung', price: '60€' },
  { name: 'Neumodellage Farbe', price: '53€' },
  { name: 'Neumodellage Farbe + Verlängerung', price: '63€' },
  { name: 'Auffüllen', price: '43€' },
  { name: 'Auffüllen + Farbe', price: '45€' },
  { name: 'Shellac', price: '40€' },
  { name: 'Shellac + Farbe', price: '45€' },
  { name: 'Maniküre', price: '20€' },
  { name: 'Überlänge', price: '+ 20€' },
  { name: 'Design', price: 'ab 1€ pro Nagel' },
  { name: 'Babyboomer/French', price: '+ 5€' },
];

export const PERMANENT_MAKE_UP_ITEMS: PriceItems = [
  {
    name: 'Powderbrows',
    price: '300€',
  },
  {
    name: 'Nachbehandlung bis 2 Monate',
    price: '50€',
  },
  {
    name: 'Nachbehandlung nach 1 Jahr',
    price: '125€',
  },
];
