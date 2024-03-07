"use server";

import prisma from "@/lib/prisma";
import { Deliverable } from "@prisma/client";

export async function saveDeliverable(d: any) {
  try {
    await prisma.deliverable.create({
      data: { ...d },
    });
    console.log("👌 Saved deliverable...");
  } catch (e) {
    console.log("🤦 There was an error...");
    console.error(e);
  }
}
