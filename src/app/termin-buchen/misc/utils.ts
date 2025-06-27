import { PriceItem } from '../../services/services-items';

export function getPriceNumber(price: string): number {
  // Extract number from e.g. '55€', 'ab 20€', '+ 5€'
  const match = price.match(/([\d,.]+)/);
  return match ? parseFloat(match[1].replace(',', '.')) : 0;
}

// Hilfsfunktion: Service-Key (eindeutig pro Service+Beschreibung)
export const getServiceKey = (item: PriceItem): string => 
  item.name + (item.description || '');

// Hilfsfunktion: Dauer als "1 h 30 min" formatieren
export function formatDuration(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h > 0 && m > 0) return `${h} ${h === 1 ? "Stunde" : "Stunden"} ${m} ${m === 1 ? "Minute" : "Minuten"}`;
  if (h > 0) return `${h} ${h === 1 ? "Stunde" : "Stunden"}`;
  return `${m} ${m === 1 ? "Minute" : "Minuten"}`;
}

// Hilfsfunktion: Für Services mit gewähltem Add-on: zeige nur den höchsten Preis, nicht Basis+Add-on
export function getSidebarDisplayPrice(item: PriceItem, selectedAddons: { [serviceKey: string]: string[] }): string {
  const key = getServiceKey(item);
  const addons = selectedAddons[key] || [];
  if (addons.length > 0 && item.additionalPrices) {
    // Finde das Add-on mit dem höchsten Preis (falls mehrere auswählbar)
    let maxAddon = item.additionalPrices[0];
    for (const addonName of addons) {
      const found = item.additionalPrices.find(a => a.name === addonName);
      if (found && getPriceNumber(found.price) > getPriceNumber(maxAddon.price)) {
        maxAddon = found;
      }
    }
    // Zeige Add-on Preis
    return maxAddon.price;
  }
  // Sonst Basispreis
  return item.price;
}

// Hilfsfunktion: Add-on Label für Sidebar (nur wenn Add-on gewählt)
export function getSidebarAddonLabel(item: PriceItem, selectedAddons: { [serviceKey: string]: string[] }): string | undefined {
  const key = getServiceKey(item);
  const addons = selectedAddons[key] || [];
  if (addons.length > 0) {
    return addons.join(', ');
  }
  return undefined;
}

// Angepasste Preisberechnung für Sidebar/Review: Nur höchster Preis zählt
export function getTotalPriceSidebar(items: PriceItem[], selectedAddons: { [serviceKey: string]: string[] }): number {
  let sum = 0;
  for (const item of items) {
    sum += getPriceNumber(getSidebarDisplayPrice(item, selectedAddons));
  }
  return sum;
}

// Berechne die Gesamtdauer basierend auf den tatsächlichen Service-Dauern
export function calculateTotalDuration(items: PriceItem[], selectedAddons: { [serviceKey: string]: string[] }): number {
  let totalMinutes = 0;
  
  for (const item of items) {
    const key = getServiceKey(item);
    const addons = selectedAddons[key] || [];
    
    // Wenn Add-ons gewählt sind, verwende die Dauer des Add-ons
    if (addons.length > 0 && item.additionalPrices) {
      // Finde das Add-on mit der längsten Dauer (falls mehrere auswählbar)
      let maxDurationAddon = item.additionalPrices[0];
      for (const addonName of addons) {
        const found = item.additionalPrices.find(a => a.name === addonName);
        if (found && found.duration && maxDurationAddon.duration) {
          if (found.duration.averageInMinutes > maxDurationAddon.duration.averageInMinutes) {
            maxDurationAddon = found;
          }
        } else if (found && found.duration && !maxDurationAddon.duration) {
          maxDurationAddon = found;
        }
      }
      // Verwende die Dauer des gewählten Add-ons oder fallback zur Service-Basisdauer
      totalMinutes += maxDurationAddon.duration?.averageInMinutes || item.duration?.averageInMinutes || 0;
    } else {
      // Verwende die Basisdauer des Services
      totalMinutes += item.duration?.averageInMinutes || 0;
    }
  }
  
  return totalMinutes;
}
