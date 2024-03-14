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

// Elements - - - - - - - - - - - - - - - - - - - - -

export async function saveElement(e: any) {
  try {
    console.dir(e, { depth: 10 });
    await prisma.element.create({
      data: { ...e },
    });
    console.log("👌 Saved element...");
  } catch (e) {
    console.log("🤦 There was an error...");
    console.error(e);
  }
}

export async function deleteElement(e: any) {
  try {
    await prisma.element.create({
      data: { ...e },
    });
    console.log("👌 Saved element...");
  } catch (e) {
    console.log("🤦 There was an error...");
    console.error(e);
  }
}
