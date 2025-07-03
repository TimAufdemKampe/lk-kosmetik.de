import { PriceItem } from '../../services/services-items';

export function getPriceNumber(price: string): number {
  const match = price.match(/([\d,.]+)/);
  return match ? parseFloat(match[1].replace(',', '.')) : 0;
}

export const getServiceKey = (item: PriceItem): string =>
  item.name + (item.description || '');

export function formatDuration(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h > 0 && m > 0)
    return `${h} ${h === 1 ? 'Stunde' : 'Stunden'} ${m} ${m === 1 ? 'Minute' : 'Minuten'}`;
  if (h > 0) return `${h} ${h === 1 ? 'Stunde' : 'Stunden'}`;
  return `${m} ${m === 1 ? 'Minute' : 'Minuten'}`;
}

export function getSidebarDisplayPrice(
  item: PriceItem,
  selectedAddons: { [serviceKey: string]: string[] }
): string {
  const key = getServiceKey(item);
  const addons = selectedAddons[key] || [];
  if (addons.length > 0 && item.additionalPrices) {
    let maxAddon = item.additionalPrices[0];
    for (const addonName of addons) {
      const found = item.additionalPrices.find((a) => a.name === addonName);
      if (
        found &&
        getPriceNumber(found.price) > getPriceNumber(maxAddon.price)
      ) {
        maxAddon = found;
      }
    }
    return maxAddon.price;
  }
  return item.price;
}

export function getSidebarAddonLabel(
  item: PriceItem,
  selectedAddons: { [serviceKey: string]: string[] }
): string | undefined {
  const key = getServiceKey(item);
  const addons = selectedAddons[key] || [];
  if (addons.length > 0) {
    return addons.join(', ');
  }
  return undefined;
}

export function getTotalPriceSidebar(
  items: PriceItem[],
  selectedAddons: { [serviceKey: string]: string[] }
): number {
  let sum = 0;
  for (const item of items) {
    sum += getPriceNumber(getSidebarDisplayPrice(item, selectedAddons));
  }
  return sum;
}

export function calculateTotalDuration(
  items: PriceItem[],
  selectedAddons: { [serviceKey: string]: string[] }
): number {
  let totalMinutes = 0;

  for (const item of items) {
    const key = getServiceKey(item);
    const addons = selectedAddons[key] || [];

    if (addons.length > 0 && item.additionalPrices) {
      let maxDurationAddon = item.additionalPrices[0];
      for (const addonName of addons) {
        const found = item.additionalPrices.find((a) => a.name === addonName);
        if (found && found.duration && maxDurationAddon.duration) {
          if (
            found.duration.averageInMinutes >
            maxDurationAddon.duration.averageInMinutes
          ) {
            maxDurationAddon = found;
          }
        } else if (found && found.duration && !maxDurationAddon.duration) {
          maxDurationAddon = found;
        }
      }
      totalMinutes +=
        maxDurationAddon.duration?.averageInMinutes ||
        item.duration?.averageInMinutes ||
        0;
    } else {
      totalMinutes += item.duration?.averageInMinutes || 0;
    }
  }

  return totalMinutes;
}
