const { Prisma } = require("@prisma/client");
const WDPJ_CLERK_ID = "user_2cjaSqnQ5RTHCGRC3B567A1uJm0";

export const data = [];

data[0] =
  // VLY data tree - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  {
    tennantId: WDPJ_CLERK_ID,
    id: "VLY",
    name: "Vandelay Industries",
    color: "purple",
    logoUrl: "/logos/clients/VLY.logo.webp",
    projects: {
      create: [
        {
          tennantId: WDPJ_CLERK_ID,
          id: "VDW",
          name: "Import/Export Website",
          color: "purple",
          phases: {
            create: [
              {
                tennantId: WDPJ_CLERK_ID,
                name: "One : Vandelay Landing Page",
              },
            ],
          },
        },
      ],
    },
  };

data[1] =
  // ACM data tree - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  {
    tennantId: WDPJ_CLERK_ID,
    id: "ACM",
    name: "ACME Corp.",
    color: "darkred",
    logoUrl: "/logos/clients/ACM.logo.webp",
    projects: {
      create: [
        {
          tennantId: WDPJ_CLERK_ID,
          id: "RKS",
          name: "Rocket-powered Skates Launch",
          color: "lightgreen",
          phases: {
            create: [
              {
                tennantId: WDPJ_CLERK_ID,
                name: "One : Draft a cunning plan",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus asperiores impedit recusandae non? Cum, quidem eius eligendi soluta nesciunt numquam consequuntur quam dicta, incidunt adipisci rerum earum pariatur nulla natus.",
                deliverables: {
                  create: [
                    {
                      tennantId: WDPJ_CLERK_ID,
                      name: "Rolled-up blueprint",
                      startDate: randomDate(),
                      elements: {
                        create: [
                          {
                            tennantId: WDPJ_CLERK_ID,
                            name: "Buy chart paper",
                            size: "xs",
                          },
                          {
                            tennantId: WDPJ_CLERK_ID,
                            // id: 2,
                            name: "Draw schematics",
                            size: "m",
                          },
                        ],
                      },
                    },
                    {
                      tennantId: WDPJ_CLERK_ID,
                      name: "Source components",
                      startDate: randomDate(),
                      elements: {
                        create: [
                          {
                            tennantId: WDPJ_CLERK_ID,
                            name: "Roller skates",
                            size: "s",
                          },
                          {
                            tennantId: WDPJ_CLERK_ID,
                            // id: 2,
                            name: "Parachute harness",
                            size: "m",
                          },
                          {
                            tennantId: WDPJ_CLERK_ID,
                            // id: 3,
                            name: "Red rocket",
                            size: "l",
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  };

data[2] =
  // LPH data tree - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  {
    tennantId: WDPJ_CLERK_ID,
    id: "LPH",
    name: "Los Pollos Hermanos",
    color: "yellow",
    logoUrl: "/logos/clients/LPH.logo.png",
  };

data[3] =
  // RIT data tree - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  {
    tennantId: WDPJ_CLERK_ID,
    id: "RIT",
    name: "Responsive IT",
    color: "navy",
    logoUrl: "/logos/clients/RIT.cli.logo.png",
    projects: {
      create: [
        {
          tennantId: WDPJ_CLERK_ID,
          id: "EFF",
          name: "Ethhar Firebase Functions Backend",
          color: "blue",
          phases: {
            create: [
              {
                tennantId: WDPJ_CLERK_ID,
                name: "Phase 7 : Add Third location",
                description:
                  'Esta fase involucra literalmente el agregar una tercer ciudad ("location") al sistema luego de haber ya establecido MVD y CABA. Ademas, esta estimacion sera utilizada como estimacion generica para pasarle a Daniel como costo de agregar nuevaas ciudades/locations de ahi en mas (con una cota maxima porque llega un volument en el que habria que revisar la arquitectura en Firestore, digamos mas de 10 ciudades).',
                deliverables: {
                  create: [
                    {
                      tennantId: WDPJ_CLERK_ID,
                      name: "Skeleton & constants",
                      startDate: randomDate(),
                      elements: {
                        create: [
                          {
                            tennantId: WDPJ_CLERK_ID,
                            name: "Add constants (locations, questionNames, collectionNames)",
                            size: "s",
                          },
                          {
                            tennantId: WDPJ_CLERK_ID,
                            name: "Add seeder functionfor QAXXX (skeleton)",
                            size: "m",
                          },
                          {
                            tennantId: WDPJ_CLERK_ID,
                            name: "Add ethharFlags for XXX",
                            size: "xs",
                          },
                          {
                            tennantId: WDPJ_CLERK_ID,
                            name: "Add minimal seeder function for songListXXX",
                            size: "m",
                          },
                        ],
                      },
                    },
                    {
                      tennantId: WDPJ_CLERK_ID,
                      name: "Playlists",
                      startDate: randomDate(),
                      elements: {
                        create: [
                          {
                            tennantId: WDPJ_CLERK_ID,
                            name: "Add XXX handling to checkSetCategoriesFlag",
                            size: "l",
                          },
                          {
                            tennantId: WDPJ_CLERK_ID,
                            name: "Import into FF index",
                            size: "xs",
                          },
                          {
                            tennantId: WDPJ_CLERK_ID,
                            name: "Add XXX handling to checkFirestoreFlags",
                            size: "l",
                          },
                        ],
                      },
                    },
                    {
                      tennantId: WDPJ_CLERK_ID,
                      name: "Other",
                      startDate: randomDate(),
                      elements: {
                        create: [
                          {
                            tennantId: WDPJ_CLERK_ID,
                            name: "Testing (manual or unit-test updates)",
                            size: "l",
                          },
                          {
                            tennantId: WDPJ_CLERK_ID,
                            name: "Bugfixes / feedback",
                            size: "l",
                          },
                          {
                            tennantId: WDPJ_CLERK_ID,
                            name: "Meetings / email / documentation",
                            size: "l",
                          },
                          {
                            tennantId: WDPJ_CLERK_ID,
                            name: "Error margin / unforeseen",
                            size: "l",
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  };

function randomDate() {
  const start = new Date(2020, 0, 1);
  const end = new Date();
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}
