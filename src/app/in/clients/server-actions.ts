"use server";

import prisma from "@/lib/prisma";
import { Client } from "@prisma/client";

export async function saveClient(d: any) {
  try {
    await prisma.client.create({
      data: { ...d },
    });
    console.log("👌 Saved client...");
  } catch (e) {
    console.log("🤦 There was an error...");
    console.error(e);
  }
}
