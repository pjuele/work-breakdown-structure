import { PrismaClient } from "@prisma/client";
const WDPJ_CLERK_ID = "user_2cjaSqnQ5RTHCGRC3B567A1uJm0";
import { data } from "./seed-data.sample";

const prisma = new PrismaClient();
async function main() {
  try {
    // First empty the collections in the right order:
    await prisma.element.deleteMany();
    await prisma.deliverable.deleteMany();
    await prisma.projectPhase.deleteMany();
    await prisma.project.deleteMany();
    await prisma.client.deleteMany();
    // Then seed the collections:
    for (const d of data) {
      const result = await prisma.client.create({
        include: {
          projects: {
            include: {
              phases: {
                include: {
                  deliverables: {
                    include: {
                      elements: true,
                    },
                  },
                },
              },
            },
          },
        },
        data: d,
      });
      console.log("Seeded client", result.id);
      console.dir(result, { depth: 10 });
    }
  } catch (e) {
    console.log("🤦 There was an error seeding the DB.");
    console.error(e);
    process.exit(1);
  }
}
// const rit = await prisma.client.create({
//   include: {
//     projects: {
//       include: {
//         phases: {
//           include: {
//             deliverables: {
//               include: {
//                 elements: true,
//               },
//             },
//           },
//         },
//       },
//     },
//   },
//   data: [
//     {
//       tennantId: WDPJ_CLERK_ID,
//       id: "RIT",
//       name: "Rambunctious IT",
//       color: "blue",
//       logoUrl: "/RIT.cli.logo.png",
//       projects: {
//         create: [
//           {
//             tennantId: WDPJ_CLERK_ID,
//             id: "EFF",
//             name: "Ethhar Firebase Functions Backend",
//             color: "navy",
//             phases: {
//               create: [
//                 {
//                   tennantId: WDPJ_CLERK_ID,
//                   name: "Phase I - Blah",
//                   deliverables: {
//                     create: [
//                       {
//                         tennantId: WDPJ_CLERK_ID,
//                         name: "Online DB for all WDPJ projects",
//                         startDate: randomDate(),
//                         elements: {
//                           create: [
//                             {
//                               tennantId: WDPJ_CLERK_ID,
//                               name: "Online DB for all WDPJ projects",
//                               size: "S",
//                             },
//                             {
//                               tennantId: WDPJ_CLERK_ID,
//                               name: "Online DB for all WDPJ projects",
//                               size: "M",
//                             },
//                             {
//                               tennantId: WDPJ_CLERK_ID,
//                               name: "Online DB for all WDPJ projects",
//                               size: "L",
//                             },
//                           ],
//                         },
//                       },
//                     ],
//                   },
//                 },
//               ],
//             },
//           },
//         ],
//       },
//     },
//   ],
// });
// console.dir({ rit }, { depth: 10 });
// }

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

// function randomDate() {
//   const start = new Date(2020, 0, 1);
//   const end = new Date();
//   return new Date(
//     start.getTime() + Math.random() * (end.getTime() - start.getTime())
//   );
// }
