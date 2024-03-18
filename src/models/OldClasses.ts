import { DogSize, isoCurrencyCode } from "@/types";
import { getDogSizeToHours } from "@/lib/utils";
import { Client, Project, ProjectPhase, Element } from "@prisma/client";

export class Deliverable {
  id: number;
  name: string;
  startDate?: Date;
  elements: Element[];
  phaseId: number;
  constructor(
    id: number,
    name: string,
    startDate: Date | undefined,
    elements: Element[],
    phaseId: number
  ) {
    this.id = id;
    this.name = name;
    this.startDate = startDate;
    this.elements = elements;
    this.phaseId = phaseId;
  }

  public hours(): number {
    let totalHours = 0;
    this.elements.forEach((element) => {
      totalHours += getDogSizeToHours(element.size as DogSize) || 0;
    });
    return totalHours;
  }
}

export class ProjectPhaseQuotation {
  phase: ProjectPhase;
  project: Project;
  client: Client;
  deliverables: Deliverable[];
  constructor(
    phase: ProjectPhase,
    project: Project,
    client: Client,
    hourlyRate: number,
    currency: isoCurrencyCode,
    deliverables: Deliverable[]
  ) {
    this.phase = phase;
    this.project = project;
    this.client = client;
    this.deliverables = deliverables ?? ([] as Deliverable[]);
  }

  totalHours(): number {
    let totalHours = 0;
    this.deliverables.forEach((deliverable) => {
      totalHours += deliverable.hours();
    });
    return totalHours;
  }
}
