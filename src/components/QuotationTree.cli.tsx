'use client';

import { Deliverable } from "@/models/OldClasses";
import TreeOfDeliverables from "./TreeOfDeliverables.cli";
import WBSRoot from "./WBSRoot.cli";
import { isoCurrencyCode } from "@/lib/types";

export default function QuotationTree(
    {
        clientLogoUrl,
        clientId,
        clientName,
        projectId,
        projectName,
        phase,
        description,
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
        phase: string,
        description: string,
        totalHoursValue: number,
        deliverables: Deliverable[],
        hourlyRate: number,
        currency: isoCurrencyCode
    }
) {
    return (
        <div className="flex flex-col gap-10 w-full">
            <WBSRoot
                clientLogoUrl={clientLogoUrl}
                clientId={clientId}
                clientName={clientName}
                projectId={projectId}
                projectName={projectName}
                phase={phase}
                description={description}
                totalHours={totalHoursValue}
                hourlyRate={hourlyRate}
                currency={currency}
            />

            <TreeOfDeliverables
                deliverables={deliverables}
                hourlyRate={hourlyRate}
                currency={currency}/>

        </div>
);
}
