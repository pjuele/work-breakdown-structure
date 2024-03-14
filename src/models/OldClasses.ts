import { DogSize, isoCurrencyCode } from "@/lib/types";
import { getDogSizeToHours } from "@/lib/utils";

export class Task {
  id: string;
  description: string;
  size: DogSize; // TaskSize;
  constructor(
    id: string,
    description: string,
    size: DogSize // TaskSize
  ) {
    this.id = id;
    this.description = description;
    this.size = size;
  }
}
export class Deliverable {
  id: number;
  name: string;
  description: string;
  tasks: Task[];
  phaseId: number;
  constructor(
    id: number,
    name: string,
    description: string,
    tasks: Task[],
    phaseId: number
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.tasks = tasks;
    this.phaseId = phaseId;
  }

  hours(): number {
    let totalHours = 0;
    this.tasks.forEach((task) => {
      totalHours += getDogSizeToHours(task.size) || 0;
    });
    return totalHours;
  }
}

export class ProjectWBS {
  phaseId: string;
  phaseName: string;
  phaseDescription: string;
  projectId: string;
  projectName: string;
  clientId: string;
  clientName: string;
  clientLogoUrl: string;
  hourlyRate: number;
  currency: isoCurrencyCode;
  phase: string;
  deliverables: Deliverable[];
  constructor(
    phaseId: string,
    phaseName: string,
    phaseDescription: string,
    projectId: string,
    projectName: string,
    clientId: string,
    clientName: string,
    clientLogoUrl: string,
    hourlyRate: number,
    currency: isoCurrencyCode = "USD",
    phase: string,
    deliverables: Deliverable[]
  ) {
    this.phaseId = phaseId;
    this.phaseName = phaseName;
    this.phaseDescription = phaseDescription;
    this.projectId = projectId;
    this.projectName = projectName;
    this.clientId = clientId;
    this.clientName = clientName;
    this.clientLogoUrl = clientLogoUrl;
    this.hourlyRate = hourlyRate;
    this.currency = currency;
    this.phase = phase;
    this.deliverables = deliverables;
  }

  totalHours(): number {
    let totalHours = 0;
    this.deliverables.forEach((deliverable) => {
      totalHours += deliverable.hours();
    });
    return totalHours;
  }
}
