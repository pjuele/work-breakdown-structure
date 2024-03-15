"use server";

import prisma from "@/lib/prisma";
import { Project } from "@prisma/client";

export async function saveProject(d: any) {
  try {
    await prisma.project.create({
      data: { ...d },
    });
    console.log("👌 Saved project...");
  } catch (e) {
    console.log("🤦 There was an error...");
    console.error(e);
  }
}
