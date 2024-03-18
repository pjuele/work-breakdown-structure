'use client';

import TreeOfDeliverables from "./TreeOfDeliverables.cli";
import WBSRoot from "./WBSRoot.cli";
import { isoCurrencyCode } from "@/types";
import { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { Client, Deliverable, Project, ProjectPhase } from "@prisma/client";
import DeliverableTree from "@/types/DeliverableTree.type";

export default function QuotationTree(
  { client, project, phase, deliverables, hourlyRate, currency }:
  {
    client: Client,
    project: Project,
    phase: ProjectPhase,
    deliverables: DeliverableTree[],
    hourlyRate: number,
    currency: isoCurrencyCode }
) {
  const { logoUrl: clientLogoUrl, id: clientId, name: clientName } = client;
  const { id: projectId, name: projectName } = project;
  const { id: phaseId, name: phaseName, description: phaseDescription } = phase;
    // const [key, setKey] = useState("pito");
    // useEffect(() => {
    //     function handleKeyDown(e: KeyboardEvent) {
    //       setKey(e.key);
    //       switch (e.key) {
    //         case "Escape":
    //           setKey("pito");
    //           break;
    //         case "E":
    //           setKey("pito");
    //           break;
    //       }
    //     }
    
    //     document.addEventListener('keydown', handleKeyDown);
    
    //     // Don't forget to clean up
    //     return function cleanup() {
    //       document.removeEventListener('keydown', handleKeyDown);
    //     }
    //   }, []);

    return (
        <div className="flex flex-col gap-10 w-full">
            <div className="flex flex-row gap-3 align-top justify-center">
                {/* <Badge variant="outline">{key}</Badge> */}
                <WBSRoot
                  client={client}
                  project={project}
                  phase={phase}
                  deliverables={deliverables}
                  hourlyRate={hourlyRate}
                  currency={currency}
                />
            </div>

            <TreeOfDeliverables
                deliverables={deliverables}
                hourlyRate={hourlyRate}
                currency={currency}/>

        </div>
);
}
