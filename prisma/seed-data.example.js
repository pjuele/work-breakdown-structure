const { Prisma } = require("@prisma/client");
const WDPJ_CLERK_ID = "user_2cjaSqnQ5RTHCGRC3B567A1uJm0";

// Clients to seed:
// RIT | Rambunctious IT | blue | /RIT.cli.logo.webp
// WDP | Web Design Pablo Juele | goldenrod | /WDP.cli.logo.webp
// REN | REVAMPED Inc. | cyan | /REN.cli.logo.webp
// NIK | Nike | black | /NIK.cli.logo.webp
// CCC | Coca Cola Inc. | tomato | /CCC.cli.logo.webp
// SEB | Sebastopol LLC. | darkblue | /SEB.cli.logo.webp
// PAC | Pacman Labs. | black | /PAC.cli.logo.webp
const clients = [
  {
    tennantId: WDPJ_CLERK_ID,
    id: "RIT",
    name: "Rambunctious IT",
    color: "blue",
    logoUrl: "/RIT.cli.logo.webp",
  },
  {
    tennantId: WDPJ_CLERK_ID,
    id: "WDP",
    name: "Web Design Pablo Juele",
    color: "goldenrod",
    logoUrl: "/WDPJ.logo.webp",
  },
  {
    tennantId: WDPJ_CLERK_ID,
    id: "REN",
    name: "REVAMPED Inc.",
    color: "cyan",
    logoUrl: "/REN.logo.webp",
  },
  {
    tennantId: WDPJ_CLERK_ID,
    id: "NIK",
    name: "Nike",
    color: "black",
    logoUrl: "/NIK.logo.webp",
  },
  {
    tennantId: WDPJ_CLERK_ID,
    id: "CCC",
    name: "Coca Cola Inc.",
    color: "tomato",
    logoUrl: "/CCC.logo.webp",
  },
  {
    tennantId: WDPJ_CLERK_ID,
    id: "SEB",
    name: "Sebastopol LLC.",
    color: "darkblue",
    logoUrl: "/SEB.logo.webp",
  },
  {
    tennantId: WDPJ_CLERK_ID,
    id: "PAC",
    name: "Pacman Labs.",
    color: "black",
    logoUrl: "/PAC.logo.webp",
  },
];

// Projects to seed:
// NIK | SHW | Shoes Locos Website | green
// RIT | EFF | Emerald Firebase Functions Backend | navy
// RIT | ZMB | Zorro Backend | darkred
// RIT | QRI | Quantum Certification | red
// REN | REW | REVAMPED Website | cyan
// WDP | PJW | New WDPJ Website | goldenrod
// CCC | PXM | Promo Xmas Website | tomato
// SEB | BPC | BPC Landing Page | darkblue
// PAC | ILP | Infinity Landing Page | black
const projects = [
  {
    tennantId: WDPJ_CLERK_ID,
    id: "EFF",
    name: "Ethhar Firebase Functions Backend",
    color: "navy",
    clientId: "RIT",
  },
  {
    tennantId: WDPJ_CLERK_ID,
    id: "ZMB",
    name: "Zimbra Mail Monitor Backend",
    color: "darkred",
    clientId: "RIT",
  },
  {
    tennantId: WDPJ_CLERK_ID,
    id: "RIT",
    name: "Rambunctious IT",
    color: "blue",
    clientId: "RIT",
  },
  {
    tennantId: WDPJ_CLERK_ID,
    id: "PJD",
    name: "WDPJ Admin Data in Banana DB",
    color: "lightgreen",
    clientId: "WDP",
  },
];

// Deliverables to seed:
// NIK | SHW | SHW - Home | Home
// NIK | SHW | SHW - Navbar | Navbar

const deliverables = [
  {
    tennantId: WDPJ_CLERK_ID,
    id: 1,
    name: "Online DB for all WDPJ projects",
    projectId: "PJD",
    startDate: randomDate(),
  },
  {
    tennantId: WDPJ_CLERK_ID,
    id: 2,
    name: "Knowledge from [la-la-land]",
    projectId: "PJD",
    startDate: randomDate(),
  },
  {
    tennantId: WDPJ_CLERK_ID,
    id: 3,
    name: "Seeded Banana DB (example data)",
    projectId: "PJD",
    startDate: randomDate(),
  },
  {
    tennantId: WDPJ_CLERK_ID,
    id: 4,
    name: "[work-breakdown-system] Connected to Banana DB",
    projectId: "PJD",
    startDate: randomDate(),
  },
];

// Elements to seed:
// 1 | Find Banana DB credentials | xs | 1
// 2 | Create wdpj-admin DB from Banana dashboard | xs | 1
// 3 | Find & clone github repo | s | 2
// 4 | Install dependencies | s | 2
// 5 | Get DB connection string from Banana | xs | 2
// 6 | Get API key from Clickety-clack | m | 2
// 7 | Configure .env files and get it running locally | m | 2
// 8 | Adjust Prisma schema to current needs for [work-breakdown-system] | m | 3
// 9 | Add seed script and data (and execute) | m | 3
// 10 | Copy Prisma code from [la-la-land] | xl | 4
// 11 | Get [la-la-land] to list projects seeded to Banana | m | 2
const elements = [
  {
    tennantId: WDPJ_CLERK_ID,
    id: 1,
    name: "Find Banana DB credentials",
    size: "xs",
    deliverableId: 1,
  },
  {
    tennantId: WDPJ_CLERK_ID,
    id: 2,
    name: "Create wdpj-admin DB from Banana dashboard",
    size: "xs",
    deliverableId: 1,
  },
  {
    tennantId: WDPJ_CLERK_ID,
    id: 3,
    name: "Find & clone github repo",
    size: "s",
    deliverableId: 2,
  },
  {
    tennantId: WDPJ_CLERK_ID,
    id: 4,
    name: "Install dependencies",
    size: "s",
    deliverableId: 2,
  },
  {
    tennantId: WDPJ_CLERK_ID,
    id: 5,
    name: "Get DB connection string from Banana",
    size: "xs",
    deliverableId: 2,
  },
  {
    tennantId: WDPJ_CLERK_ID,
    id: 6,
    name: "Get API key from Clickety-clack",
    size: "m",
    deliverableId: 2,
  },
  {
    tennantId: WDPJ_CLERK_ID,
    id: 7,
    name: "Configure .env files and get it running locally",
    size: "m",
    deliverableId: 2,
  },
  {
    tennantId: WDPJ_CLERK_ID,
    id: 8,
    name: "Adjust Prisma schema to current needs for [work-breakdown-system]",
    size: "m",
    deliverableId: 3,
  },
  {
    tennantId: WDPJ_CLERK_ID,
    id: 9,
    name: "Add seed script and data (and execute)",
    size: "m",
    deliverableId: 3,
  },
  {
    tennantId: WDPJ_CLERK_ID,
    id: 10,
    name: "Copy Prisma code from [la-la-land]",
    size: "xl",
    deliverableId: 4,
  },
  {
    tennantId: WDPJ_CLERK_ID,
    id: 11,
    name: "Get [la-la-land] to list projects seeded to Banana",
    size: "m",
    deliverableId: 4,
  },
];

module.exports = {
  projects,
  clients,
  deliverables,
  elements,
};

function randomDate() {
  const start = new Date(2020, 0, 1);
  const end = new Date();
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}
