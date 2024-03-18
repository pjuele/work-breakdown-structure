const { Prisma } = require("@prisma/client");
const WDPJ_CLERK_ID = "user_2cjaSqnQ5RTHCGRC3B567A1uJm0";

export const data = [];

data[0] =
  // RIT data tree - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  {
    tennantId: WDPJ_CLERK_ID,
    id: "VLY",
    name: "Vandelay Industries",
    color: "purple",
    logoUrl: "/RIT.cli.logo.png",
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
                name: "PH1 | Landing Page",
              },
            ],
          },
        },
      ],
    },
  };

data[1] =
  // WDP data tree - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  {
    tennantId: WDPJ_CLERK_ID,
    id: "ACM",
    name: "ACME Corp.",
    color: "darkred",
    logoUrl: "/WDPJ.logo.jpg",
    projects: {
      create: [
        {
          tennantId: WDPJ_CLERK_ID,
          id: "RKS",
          name: "Rocket-powered Skates",
          color: "lightgreen",
          phases: {
            create: [
              {
                tennantId: WDPJ_CLERK_ID,
                name: "PH1 | Cunning Plan",
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
  // REN data tree - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  {
    tennantId: WDPJ_CLERK_ID,
    id: "LPH",
    name: "Los Pollos Hermanos",
    color: "yelloy",
    logoUrl: "/REN.logo.webp",
  };

function randomDate() {
  const start = new Date(2020, 0, 1);
  const end = new Date();
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}
