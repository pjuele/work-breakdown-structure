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
  id: string;
  name: string;
  description: string;
  tasks: Task[];
  phaseId: string;
  constructor(
    id: string,
    name: string,
    description: string,
    tasks: Task[],
    phaseId: string
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
  id: string;
  projectId: string;
  projectName: string;
  description: string;
  clientId: string;
  clientName: string;
  clientLogoUrl: string;
  hourlyRate: number;
  currency: isoCurrencyCode;
  phase: string;
  deliverables: Deliverable[];
  constructor(
    id: string,
    projectId: string,
    projectName: string,
    description: string,
    clientId: string,
    clientName: string,
    clientLogoUrl: string,
    hourlyRate: number,
    currency: isoCurrencyCode = "USD",
    phase: string,
    deliverables: Deliverable[]
  ) {
    this.id = id;
    this.projectId = projectId;
    this.projectName = projectName;
    this.description = description;
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
