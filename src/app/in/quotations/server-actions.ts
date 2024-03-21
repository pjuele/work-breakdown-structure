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

export async function deleteProjectPhaseQuotation(id: number) {
  try {
    await prisma.projectPhase.delete({
      where: { id },
    });
    console.log("👌 Deleted project phase quotation %o", id);
  } catch (e) {
    console.log("🤦 There was an error deleting quotation %o", id);
    console.error(e);
  }
}
