export type PriceItem = {
  name: string;
  price: string;
  description?: string;
  additionalDescription?: string;
  addon?: string;
  duration?: {
    display: string;
    averageInMinutes: number;
  };
  additionalPrices?: {
    name: string;
    price: string;
    duration?: {
      display: string;
      averageInMinutes: number;
    };
  }[];
};
export type PriceItems = PriceItem[];

export const BROWS_ITEMS: PriceItems = [
  {
    name: 'Augenbrauenlifting inkl. Färben & Pflege',
    price: '55€',
    duration: { display: '45 Min. - 1 Std.', averageInMinutes: 55 },
  },
  {
    name: 'Augenbrauen zupfen',
    price: '15€',
    duration: { display: '15 Min.', averageInMinutes: 15 },
  },
  {
    name: 'Augenbrauen färben',
    price: '10€',
    duration: { display: '15 Min.', averageInMinutes: 15 },
  },
  {
    name: 'Kombipreis (Zupfen + Färben)',
    price: '23€',
    duration: { display: '30 Min.', averageInMinutes: 30 },
  },
];

export const CIRCADIA_TREATMENTS_ITEMS: PriceItems = [
  {
    name: 'Aquafacial (alle Hauttypen)',
    description:
      'Ein Aquafacial reinigt, peelt und hydratisiert die Haut für ein klares, gepflegtes Hautbild.',
    additionalDescription: 'Reinigung, Peeling, Pflege',
    price: '80€',
    duration: {
      display: '1 Std.',
      averageInMinutes: 60,
    },
    additionalPrices: [
      {
        name: '+ Coldhammer',
        price: '90€',
        duration: {
          display: '1 Std. 30 Min.',
          averageInMinutes: 90,
        },
      },
    ],
  },
  {
    name: 'Mini Behandlung',
    description: '',
    additionalDescription: 'Reinigung, Pflege',
    price: '55€',
    duration: {
      display: '45 Min.',
      averageInMinutes: 45,
    },
  },
  {
    name: 'Basis Behandlung',
    description: '',
    additionalDescription: 'Reinigung, Maske, Serum, Pflege',
    price: '99€',
    duration: {
      display: '1 Std. - 1 Std. 30 Min.',
      averageInMinutes: 75,
    },
    additionalPrices: [
      {
        name: '+ Enzympeeling',
        price: '114€',
        duration: {
          display: '1 Std. - 1 Std. 30 Min.',
          averageInMinutes: 75,
        },
      },
    ],
  },
  {
    name: 'Oxygen RX Treatment (Akne, Rosazea)',
    description:
      'Durch die gezielte Erzeugung von Sauerstoff auf der Haut wird nicht nur Hautrötungen bei Akne, Rosazea und Teleangiektasien entgegengewirkt, sondern gleichzeitig ein strahlender Teint gefördert. Diese Behandlung verwöhnt und pflegt alle Hauttypen.',
    additionalDescription: 'Reinigung, Oxygen Maske, Seren, Pflege',
    price: '130€',
    duration: {
      display: '1 Std. 30 Min. - 2 Std.',
      averageInMinutes: 105,
    },
    additionalPrices: [
      {
        name: '+ Enzympeeling',
        price: '155€',
        duration: {
          display: '1 Std. 30 Min. - 2 Std.',
          averageInMinutes: 105,
        },
      },
    ],
  },
  {
    name: 'Firming Peptide (Aging, Feuchtigkeit, Lymphanregend)',
    description:
      'In dieser straffenden und festigenden Maske kommt eine Technologie zum Einsatz, die auf den neuesten Erkenntnissen über Peptide, Antioxidantien und Hautregeneration beruht und eine verbesserte Mikrozirkulation und Entgiftung sowie eine sofortige Straffung und Festigung bewirkt.',
    additionalDescription: 'Reinigung, Masken, Seren, Pflege',
    price: '130€',
    duration: {
      display: '1 Std. 30 Min. - 2 Std.',
      averageInMinutes: 105,
    },
    additionalPrices: [
      {
        name: '+ Enzympeeling',
        price: '155€',
        duration: {
          display: '1 Std. 30 Min. - 2 Std.',
          averageInMinutes: 105,
        },
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
    duration: {
      display: '1 Std. 30 Min. - 2 Std.',
      averageInMinutes: 105,
    },
  },
];

export const LASHES_ITEMS: PriceItems = [
  {
    name: 'Wimpernlifting',
    price: '55€',
    duration: { display: '45 Min. - 1 Std.', averageInMinutes: 55 },
    additionalPrices: [
      {
        name: 'inkl. Farben & Pflege',
        price: '60€',
        duration: { display: '1 Std.', averageInMinutes: 60 },
      },
    ],
  },
  {
    name: 'Wimpern färben',
    price: '10€',
    duration: { display: '15 Min.', averageInMinutes: 15 },
  },
  {
    name: 'Wimpernverlängerung 1:1',
    description: 'Erstbehandlung',
    price: '90€',
    duration: { display: '2 Std.', averageInMinutes: 120 },
  },
  {
    name: 'Wimpernverlängerung 1:1',
    description: 'Auffüllen bis 2 Wochen',
    price: '45€',
    duration: { display: '30 Min. - 1 Std.', averageInMinutes: 45 },
  },
  {
    name: 'Wimpernverlängerung 1:1',
    description: 'Auffüllen bis 3 Wochen',
    price: '50€',
    duration: { display: '30 Min. - 1 Std.', averageInMinutes: 45 },
  },
  {
    name: 'Wimpernverlängerung 1:1',
    description: 'Auffüllen bis 4 Wochen',
    price: '60€',
    duration: { display: '30 Min. - 1 Std.', averageInMinutes: 45 },
  },
  {
    name: 'Wimpernverlängerung Light Volume/Mix',
    description: 'Erstbehandlung',
    price: '110€',
    duration: { display: '2 Std. - 2 Std. 30 Min.', averageInMinutes: 135 },
  },
  {
    name: 'Wimpernverlängerung Light Volume/Mix',
    description: 'Auffüllen bis 2 Wochen',
    price: '50€',
    duration: { display: '1 Std. - 1 Std. 30 Min.', averageInMinutes: 75 },
  },
  {
    name: 'Wimpernverlängerung Light Volume/Mix',
    description: 'Auffüllen bis 3 Wochen',
    price: '55€',
    duration: { display: '1 Std. - 1 Std. 30 Min.', averageInMinutes: 75 },
  },
  {
    name: 'Wimpernverlängerung Light Volume/Mix',
    description: 'Auffüllen bis 4 Wochen',
    price: '65€',
    duration: { display: '1 Std. - 1 Std. 30 Min.', averageInMinutes: 75 },
  },
  {
    name: 'Wimpernverlängerung Volume',
    description: 'Erstbehandlung',
    price: '130€',
    duration: { display: '2 Std. - 2 Std. 30 Min.', averageInMinutes: 135 },
  },
  {
    name: 'Wimpernverlängerung Volume',
    description: 'Auffüllen bis 2 Wochen',
    price: '55€',
    duration: { display: '1 Std. - 1 Std. 30 Min.', averageInMinutes: 75 },
  },
  {
    name: 'Wimpernverlängerung Volume',
    description: 'Auffüllen bis 3 Wochen',
    price: '60€',
    duration: { display: '1 Std. - 1 Std. 30 Min.', averageInMinutes: 75 },
  },
  {
    name: 'Wimpernverlängerung Volume',
    description: 'Auffüllen bis 4 Wochen',
    price: '70€',
    duration: { display: '1 Std. - 1 Std. 30 Min.', averageInMinutes: 75 },
  },
  {
    name: 'Mini Fresh Up',
    price: 'ab 20€',
    duration: { display: '30 Min.', averageInMinutes: 30 },
  },
  {
    name: 'Wimpernverlängerung entfernen',
    price: '20€',
    duration: { display: '30 Min.', averageInMinutes: 30 },
  },
  {
    name: 'Hinweis',
    price: '',
    addon: 'Ein Zeitraum von mehr als 4 Wochen wird als Neuanlage berechnet.',
  },
];

export const NAILS_ITEMS: PriceItems = [
  {
    name: 'Neumodellage Natur',
    price: '50€',
    duration: { display: '45 Min.', averageInMinutes: 45 },
  },
  {
    name: 'Neumodellage Natur + Verlängerung',
    price: '60€',
    duration: { display: '1 Std. 30 Min.', averageInMinutes: 90 },
  },
  {
    name: 'Neumodellage Farbe',
    price: '53€',
    duration: { display: '1 Std.', averageInMinutes: 60 },
  },
  {
    name: 'Neumodellage Farbe + Verlängerung',
    price: '63€',
    duration: { display: '1 Std. 30 Min.', averageInMinutes: 90 },
  },
  {
    name: 'Auffüllen',
    price: '43€',
    duration: { display: '45 Min.', averageInMinutes: 45 },
  },
  {
    name: 'Auffüllen + Farbe',
    price: '45€',
    duration: { display: '1 Std.', averageInMinutes: 60 },
  },
  {
    name: 'Shellac',
    price: '40€',
    duration: { display: '45 Min.', averageInMinutes: 45 },
  },
  {
    name: 'Shellac + Farbe',
    price: '45€',
    duration: { display: '1 Std.', averageInMinutes: 60 },
  },
  {
    name: 'Maniküre',
    price: '20€',
    duration: { display: '30 Min.', averageInMinutes: 30 },
  },
  { name: 'Überlänge', price: '+ 20€' },
  { name: 'Design', price: 'ab 1€ pro Nagel' },
  { name: 'Babyboomer/French', price: '+ 5€' },
];

export const PERMANENT_MAKE_UP_ITEMS: PriceItems = [
  {
    name: 'Powderbrows',
    price: '300€',
    duration: { display: '2 Std. - 3 Std.', averageInMinutes: 150 },
  },
  {
    name: 'Nachbehandlung bis 2 Monate',
    price: '50€',
    duration: { display: '1 Std.', averageInMinutes: 60 },
  },
  {
    name: 'Nachbehandlung nach 1 Jahr',
    price: '125€',
    duration: { display: '1 Std.', averageInMinutes: 60 },
  },
];
