'use client';

import { Deliverable } from "@/models/OldClasses";
import TreeOfDeliverables from "./TreeOfDeliverables.cli";
import WBSRoot from "./WBSRoot.cli";
import { isoCurrencyCode } from "@/lib/types";
import DeliverableForm from "@/app/in/quotations/[phaseId]/DeliverableForm.cli";

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
    return (
        <div className="flex flex-col gap-10 w-full">
            <div className="flex flex-row gap-3 align-top justify-center">
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
