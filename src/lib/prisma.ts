import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  // if global has a prisma property:
  if (!Object.keys(global).includes("prisma")) {
    (global as any).prisma = new PrismaClient();
  }
  prisma = (global as any).prisma;
}

export default prisma;

// OR:
// import { PrismaClient } from '@prisma/client'
// declare global {
//   var prisma: PrismaClient | undefined
// }
// export const prisma =
//   global.prisma ||
//   new PrismaClient()
// if (process.env.NODE_ENV !== 'production') global.prisma = prisma
