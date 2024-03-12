"use server";

import prisma from "@/lib/prisma";
import { ProjectPhase } from "@prisma/client";

export async function saveProjectPhaseQuotation(d: any) {
  try {
    await prisma.projectPhase.create({
      data: { ...d },
    });
    console.log("👌 Saved project phase quotation...");
  } catch (e) {
    console.log("🤦 There was an error...");
    console.error(e);
  }
}
