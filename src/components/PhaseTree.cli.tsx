'use client';

import TreeOfDeliverables from "./TreeOfDeliverables.cli";
import WBSRoot from "./WBSRoot.cli";
import { isoCurrencyCode } from "@/lib/types";

export default function PhaseTree(
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
        deliverables: any[],
        hourlyRate: number,
        currency: isoCurrencyCode
    }
) {
    return (
        <div className="flex flex-col gap-5 w-screen bg-blue-700">
        {/* <PhaseCard phase={phase}/>*/}
            <div className="flex flex-col justify-around gap-3 max-w-max min-w-max mx-auto">
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
            </div>
             {/* <DynamicHero wbs={JSON.parse(JSON.stringify(wbs))}/> */}
            <div className="flex flex-col gap-3 m-3 w-full bg-red-700">
                <TreeOfDeliverables
                    deliverables={deliverables}
                    hourlyRate={hourlyRate}
                    currency={currency}/>
            </div>
        </div>
);
}
