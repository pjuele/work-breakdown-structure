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
    logoUrl: "/VLY.logo.webp",
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
    logoUrl: "/ACM.logo.webp",
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
                            // id: 1,
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
                            // id: 1,
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
    logoUrl: "/LPH.logo.png",
  };

data[3] =
  // RIT data tree - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  {
    tennantId: WDPJ_CLERK_ID,
    id: "RIT",
    name: "Responsive IT",
    color: "navy",
    logoUrl: "/RIT.cli.logo.png",
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
                name: "Six : Add third location",
                description:
                  'Esta fase involucra literalmente el agregar una tercer ciudad ("location") al sistema luego de haber ya establecido MVD y CABA. Ademas, esta estimacion sera utilizada como estimacion generica para pasarle a Daniel como costo de agregar nuevaas ciudades/locations de ahi en mas (con una cota maxima porque llega un volument en el que habria que revisar la arquitectura en Firestore, digamos mas de 10 ciudades).',
                deliverables: {
                  create: [],
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
