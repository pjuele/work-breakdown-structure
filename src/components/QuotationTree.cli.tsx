'use client';

import { Deliverable } from "@/models/OldClasses";
import TreeOfDeliverables from "./TreeOfDeliverables.cli";
import WBSRoot from "./WBSRoot.cli";
import { isoCurrencyCode } from "@/lib/types";
import DeliverableForm from "@/app/in/quotations/[phaseId]/DeliverableForm.cli";
import { useEffect, useState } from "react";
import { Badge } from "./ui/badge";

export default function QuotationTree(
    {
        clientLogoUrl,
        clientId,
        clientName,
        projectId,
        projectName,
        phaseId,
        phaseName,
        phaseDescription,
        totalHoursValue,
        deliverables,
        hourlyRate,
        currency
    }:
    {
        clientLogoUrl: string
        clientId: string,
        clientName: string,
        projectId: string,
        projectName: string,
        phaseId: string,
        phaseName: string,
        phaseDescription: string,
        totalHoursValue: number,
        deliverables: Deliverable[],
        hourlyRate: number,
        currency: isoCurrencyCode
    }
) {
    const [key, setKey] = useState("pito");
    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
          setKey(e.key);
          switch (e.key) {
            case "Escape":
              setKey("pito");
              break;
            case "E":
              setKey("pito");
              break;
          }
        }
    
        document.addEventListener('keydown', handleKeyDown);
    
        // Don't forget to clean up
        return function cleanup() {
          document.removeEventListener('keydown', handleKeyDown);
        }
      }, []);

    return (
        <div className="flex flex-col gap-10 w-full">
            <div className="flex flex-row gap-3 align-top justify-center">
                <Badge variant="outline">{key}</Badge>
                <WBSRoot
                    clientLogoUrl={clientLogoUrl}
                    clientId={clientId}
                    clientName={clientName}
                    projectId={projectId}
                    projectName={projectName}
                    phaseId={phaseId}
                    phaseName={phaseName}
                    phaseDescription={phaseDescription}
                    totalHours={totalHoursValue}
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
