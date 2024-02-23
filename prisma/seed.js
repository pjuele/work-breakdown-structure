const { PrismaClient } = require("@prisma/client");
const seedData = require("./seed-data.js");
const prisma = new PrismaClient();

const entitiesToSeed = ["Client", "Project", "Deliverable", "Element"];
const entitiesWithAutoIncrement = ["Deliverable", "Element"];

const load = async () => {
  console.log("🌱 Seeding DB...");
  try {
    for (const entity of entitiesToSeed) {
      await processEntity(entity);
    }
  } catch (e) {
    console.log("🤦 There was an error...");
    console.error(e);
  } finally {
    await prisma.$disconnect();
    console.log("✅ Done seeding!");
  }
};

function getCorrespondingDataArray(seedData, entityName) {
  const { clients, projects, deliverables, elements } = seedData;
  if (entityName === "Client") {
    return clients;
  } else if (entityName === "Project") {
    return projects;
  } else if (entityName === "Deliverable") {
    return deliverables;
  } else if (entityName === "Element") {
    return elements;
  }
}

async function processEntity(entity) {
  const data = getCorrespondingDataArray(seedData, entity);
  if (data) {
    const lcEntity = entity.toLowerCase();
    if (Object.prototype.hasOwnProperty.call(prisma, lcEntity)) {
      console.log("✅ Found prisma method for entity", entity);
      await deleteMany(lcEntity);

      await setAutoIncrementAndInsert(lcEntity, data);
    } else console.log("💩 No prisma method for entity", entity);
  }
}

async function deleteMany(lcEntity) {
  try {
    await prisma[lcEntity].deleteMany();
    console.log(`❌ Deleted records in ${lcEntity} table`);
  } catch (e) {
    console.log("🤦 There was an error...");
    console.error(e);
    process.exit(1);
  }
}

async function setAutoIncrementAndInsert(lcEntity, data) {
  try {
    // switch (lcEntity) {
    //   case "client":
    //   case "project":
    //     break;
    //   case "deliverable":
    //     await prisma.$queryRaw`ALTER SEQUENCE Deliverable_id_seq RESTART WITH 1`;
    //     break;
    //   case "element":
    //     await prisma.$queryRaw`ALTER TABLE Element AUTO_INCREMENT = 1`;
    //     break;
    // }
    // console.log(`1️⃣ AUTO_INCREMENT reset to 1 for ${lcEntity}`);

    await prisma[lcEntity].createMany({ data });
    console.log(`➕ Added ${lcEntity} data`);
  } catch (e) {
    console.log("🤦 There was an error...");
    console.error(e);
    process.exit(1);
  }
}
load();
