import { dogImageSizes, dogSizeImageUrls } from "@/lib/constants";
import { DogSize } from "@/types";

export default class Dog {
  static imageUrl(size: DogSize): string {
    if (!dogSizeImageUrls.has(size)) {
      return "";
    } else {
      return dogSizeImageUrls.get(size) || "";
    }
  }

  static imageSize(size: DogSize): number {
    if (!dogImageSizes.has(size)) {
      return 0;
    } else {
      return dogImageSizes.get(size) || 0;
    }
  }
}
