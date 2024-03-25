import { getDogSizeToHours } from "@/lib/utils";
import { DogSize } from "@/types";
import DeliverableTree from "@/types/DeliverableTree.type";

export default function deliverableTotalHours(d: DeliverableTree): number {
  let totalHours = 0;
  d.elements.forEach((element) => {
    totalHours += getDogSizeToHours(element.size as DogSize) || 0;
  });
  return totalHours;
}
