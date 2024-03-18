import { Prisma } from "@prisma/client";

// 1: Define a type that includes the relation to `Post`
const projectPhaseTree = Prisma.validator<Prisma.ProjectPhaseDefaultArgs>()({
  include: {
    deliverables: {
      include: { elements: true },
    },
  },
});

// 3: This type will include a projectPhase and all their elements
type ProjectPhaseTree = Prisma.ProjectPhaseGetPayload<typeof projectPhaseTree>;

export default ProjectPhaseTree;
