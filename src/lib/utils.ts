import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { dogSizeHours, fxFlags, fxRates } from "./constants";
import { DogSize, isoCurrencyCode } from "../types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function fxConvertAmount(
  amount: number,
  from: isoCurrencyCode,
  to: isoCurrencyCode
) {
  if (from === to) {
    return amount;
  }
  const fromAmount = fxRates.get(from) || 0;
  const toAmount = fxRates.get(to) || 0;
  if (!fromAmount || !toAmount) {
    return null;
  }
  return Math.floor((amount * fromAmount) / toAmount);
}

export function pad(num: number, size: number): string {
  let s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
}

export const formatNumber = (number: number) =>
  Intl.NumberFormat("en-CA").format(number);

export const formatCurrencyNumber = (
  number: number,
  currency: isoCurrencyCode | null
) =>
  (currency ? fxFlags.get(currency) + "  " + currency : "") +
  " " +
  formatNumber(number);

export function getDogSizeToHours(size: DogSize): number {
  return dogSizeHours.get(size) || 0;
}

export function getDogSizeCostAsString(
  size: DogSize,
  hourlyRate: number,
  currency: isoCurrencyCode
): string {
  return formatCurrencyNumber(
    (getDogSizeToHours(size) || 0) * hourlyRate,
    currency
  );
}
