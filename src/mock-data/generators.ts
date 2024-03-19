// import {
//   MASTER_HOURLY_RATE,
//   MASTER_HOURLY_RATE_CURRENCY_CODE,
//   dogSizes,
// } from "@/lib/constants";
// import { DogSize } from "@/types";
// import { pad } from "@/lib/utils";
// import { Deliverable, Task, ProjectWBS } from "@/models/OldClasses";

// const currentYear = new Date().getFullYear();
// const { id: projectId, name: projectName } = generateRandomProjectName();
// const {
//   id: clientId,
//   name: clientName,
//   logoUrl: clientLogoUrl,
// } = generateRandomClientIdAndName();
// const phaseNr = pad(Math.floor(Math.random() * 10 + 1), 2);

// export const wbs = new ProjectWBS(
//   currentYear + "-" + pad(Math.floor(Math.random() * 100 + 1), 4),
//   projectId,
//   projectName,
//   "Phase " + phaseNr,
//   clientId,
//   clientName,
//   clientLogoUrl,
//   MASTER_HOURLY_RATE,
//   MASTER_HOURLY_RATE_CURRENCY_CODE,
//   "P" + phaseNr,
//   generateRandomDeliverables()
// );

// export function generateRandomTaskDescription(): string {
//   const verbs = [
//     "Complete",
//     "Review",
//     "Prepare",
//     "Develop",
//     "Implement",
//     "Analyze",
//     "Discuss",
//     "Validate",
//     "Deploy",
//     "Optimize",
//     "Create",
//     "Debug",
//     "Refactor",
//     "Document",
//     "Schedule",
//     "Coordinate",
//     "Architect",
//     "Assess",
//     "Configure",
//     "Monitor",
//   ];
//   const nouns = [
//     "the report",
//     "the code",
//     "for the meeting",
//     "the new feature",
//     "the component",
//     "the project plan",
//     "the user interface",
//     "the database",
//     "the performance",
//     "the security",
//     "the infrastructure",
//     "the test cases",
//     "the requirements",
//     "the prototype",
//     "the release",
//     "the sprint",
//     "the backlog",
//     "the architecture",
//     "the integration",
//     "the documentation",
//   ];
//   const randomVerbIndex = Math.floor(Math.random() * verbs.length);
//   const randomNounIndex = Math.floor(Math.random() * nouns.length);
//   return `${verbs[randomVerbIndex]} ${nouns[randomNounIndex]}`;
// }

// export function generateRandomProjectName(): { id: string; name: string } {
//   const aHundredColorNames = [
//     "Red",
//     "Green",
//     "Blue",
//     "Yellow",
//     "Orange",
//     "Purple",
//     "Pink",
//     "Brown",
//     "Black",
//     "White",
//     "Gray",
//     "Light Blue",
//     "Light Green",
//     "Light Orange",
//     "Light Pink",
//     "Light Purple",
//     "Light Red",
//     "Light Yellow",
//   ];
//   const aHubdredAnimalNames = [
//     "Cat",
//     "Dog",
//     "Elephant",
//     "Giraffe",
//     "Horse",
//     "Lion",
//     "Monkey",
//     "Panda",
//     "Penguin",
//     "Rabbit",
//     "Tiger",
//     "Zebra",
//   ];
//   return {
//     id: "P-" + pad(Math.floor(Math.random() * 100) + 1, 4),
//     name:
//       "Project " +
//       aHundredColorNames[
//         Math.floor(Math.random() * aHundredColorNames.length)
//       ] +
//       " " +
//       aHubdredAnimalNames[
//         Math.floor(Math.random() * aHubdredAnimalNames.length)
//       ],
//   };
// }

// export function generateRandomDogSize(): DogSize {
//   return dogSizes[Math.floor(Math.random() * dogSizes.length)];
// }

// export function generateRandomTasks(): Task[] {
//   const tasks: Task[] = [];
//   const nROfResults = Math.floor(Math.random() * 7) + 1;
//   for (let i = 0; i < nROfResults; i++) {
//     tasks.push(
//       new Task(
//         "id" + i,
//         generateRandomTaskDescription(),
//         generateRandomDogSize()
//       )
//     );
//   }
//   return tasks;
// }

// export function generateRandomDeliverables(): Deliverable[] {
//   const deliverables: Deliverable[] = [];
//   const nROfResults = Math.floor(Math.random() * 3) + 2;
//   for (let i = 0; i < nROfResults; i++) {
//     deliverables.push(
//       new Deliverable(
//         "id" + i,
//         generateRandomTaskDescription(),
//         "description",
//         generateRandomTasks()
//       )
//     );
//   }
//   return deliverables;
// }

// export function generateRandomClientIdAndName() {
//   const clients = [
//     // {id: "RIT", name: "Responsive IT", logoUrl: "/RIT.cli.png"},
//     { id: "VWG", name: "Cowell Inc.", logoUrl: "/VWG.cli.jpg" },
//     { id: "LGO", name: "Lego", logoUrl: "/LGO.cli.png" },
//     { id: "NIK", name: "Nike", logoUrl: "/NIK.cli.png" },
//     { id: "OXF", name: "Oxford University", logoUrl: "/OXF.cli.png" },
//     { id: "WDP", name: "Web Design Pblo Juele", logoUrl: "/WDP.cli.jpg" },
//     { id: "CCC", name: "Montevideo Refrescos S.A.", logoUrl: "/CCC.cli.jpg" },
//     // {id: "PAC", name: "Pacto!", logoUrl: "/PAC.cli.jpg"},
//   ];
//   return clients[Math.floor(Math.random() * clients.length)];
//   // const fruitNames = ["Apple", "Banana", "Orange", "Pear", "Strawberry", "Watermelon", "Grape", "Pineapple", "Cherry", "Peach", "Plum", "Cucumber", "Carrot", "Broccoli", "Cauliflower", "Spinach", "Eggplant", "Potato", "Tomato"];
//   // const legalForms = ["Limited", "LLC", "Corp", "Inc", "LLP", "Group"];
//   // return ({
//   //     id: "C-" + pad(Math.floor(Math.random() * 100) + 1, 4),
//   //     name: fruitNames[Math.floor(Math.random() * fruitNames.length)] + " " + legalForms[Math.floor(Math.random() * legalForms.length)]
//   // });
// }
