import { Prisma } from "@prisma/client";

// 1: Define a type that includes the relation to `Post`
const deliverableTree = Prisma.validator<Prisma.DeliverableDefaultArgs>()({
  include: { elements: true },
});

// // 2: Define a type that only contains a subset of the scalar fields
// const deliverablePersonalData = Prisma.validator<Prisma.DeliverableDefaultArgs>()({
//   select: { email: true, name: true },
// })

// 3: This type will include a deliverable and all their elements
type DeliverableTree = Prisma.DeliverableGetPayload<typeof deliverableTree>;

export default DeliverableTree;
