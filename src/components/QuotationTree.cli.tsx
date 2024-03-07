'use client';

import { Deliverable } from "@/models/OldClasses";
import TreeOfDeliverables from "./TreeOfDeliverables.cli";
import WBSRoot from "./WBSRoot.cli";
import { isoCurrencyCode } from "@/lib/types";
import { DeliverableForm } from "@/app/in/quotations/[phaseId]/new/DeliverableForm.cli";

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
            <div className="flex flex-row gap-3 align-top justify-center">
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
                <div className="max-w-max border-2 border-muted rounded-lg">
                <DeliverableForm params={{phaseId: phase.replace("PH", "")}}/>
                </div>
            </div>

            <TreeOfDeliverables
                deliverables={deliverables}
                hourlyRate={hourlyRate}
                currency={currency}/>

        </div>
);
}
