import { DogSize, isoCurrencyCode } from "../types";

// Path placeholders:
export const PATH_TO_QUOTATIONS = "/in/quotations";
export const PATH_TO_PROJECTS = "/in/projects";
export const PATH_TO_CLIENTS = "/in/clients";

// Model constants:
export const MASTER_HOURLY_RATE = 34;
export const MASTER_HOURLY_RATE_CURRENCY_CODE = "CAD";

export const TINY_DOG: DogSize = "xs";
export const SMALL_DOG: DogSize = "s";
export const MEDIUM_DOG: DogSize = "m";
export const LARGE_DOG: DogSize = "l";
export const HUGE_DOG: DogSize = "xl";
export const dogSizes = [TINY_DOG, SMALL_DOG, MEDIUM_DOG, LARGE_DOG, HUGE_DOG];

export const dogSizeImageUrls = new Map<DogSize, string>();
dogSizeImageUrls.set(
  TINY_DOG,
  "https://cdn-icons-png.flaticon.com/512/427/427506.png"
);
dogSizeImageUrls.set(
  SMALL_DOG,
  "https://cdn-icons-png.flaticon.com/512/4780/4780984.png"
);
// dogSizeImageUrls.set(TINY_DOG, "https://cdn-icons-png.flaticon.com/512/4780/4780984.png");
// dogSizeImageUrls.set(SMALL_DOG, "https://cdn-icons-png.flaticon.com/512/4780/4780980.png");
dogSizeImageUrls.set(
  MEDIUM_DOG,
  "https://cdn-icons-png.flaticon.com/512/4780/4780952.png"
);
dogSizeImageUrls.set(
  LARGE_DOG,
  "https://cdn-icons-png.flaticon.com/512/4781/4781006.png"
);
dogSizeImageUrls.set(
  HUGE_DOG,
  "https://cdn-icons-png.flaticon.com/512/427/427560.png"
);

export const XS_PIC = 10;
export const S_PIC = 25;
export const M_PIC = 30;
export const L_PIC = 35;
export const XL_PIC = 40;

export const dogImageSizes = new Map<DogSize, number>();
dogImageSizes.set(TINY_DOG, XS_PIC);
dogImageSizes.set(SMALL_DOG, S_PIC);
dogImageSizes.set(MEDIUM_DOG, S_PIC);
dogImageSizes.set(LARGE_DOG, S_PIC);
dogImageSizes.set(HUGE_DOG, S_PIC);

export const dogSizeLegends = new Map<DogSize, string>();
dogSizeLegends.set(TINY_DOG, "tiny");
dogSizeLegends.set(SMALL_DOG, "small dog");
dogSizeLegends.set(MEDIUM_DOG, "medium dog");
dogSizeLegends.set(LARGE_DOG, "large dog");
dogSizeLegends.set(HUGE_DOG, "huge/unknown");

export const dogSizeHours = new Map<DogSize, number>();
dogSizeHours.set(TINY_DOG, 0.5);
dogSizeHours.set(SMALL_DOG, 1);
dogSizeHours.set(MEDIUM_DOG, 2);
dogSizeHours.set(LARGE_DOG, 4);
dogSizeHours.set(HUGE_DOG, 8);

export const fxFlags = new Map<isoCurrencyCode, string>();
fxFlags.set("USD", "🇺🇸");
fxFlags.set("EUR", "🇪🇺");
fxFlags.set("CAD", "🇨🇦");
fxFlags.set("GBP", "🇬🇧");
fxFlags.set("UYU", "🇺🇾");

export const fxRates = new Map<isoCurrencyCode, number>();
fxRates.set("USD", 1);
fxRates.set("EUR", 0.93);
fxRates.set("CAD", 1.35);
fxRates.set("GBP", 0.79);
fxRates.set("UYU", 39.12);
