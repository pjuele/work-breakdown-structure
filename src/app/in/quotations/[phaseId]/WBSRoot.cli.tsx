import { fxRates } from "@/lib/constants";
import { formatCurrencyNumber, fxConvertAmount, getDogSizeToHours } from "@/lib/utils";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardHeader, CardContent } from "../../../../components/ui/card";
import { DogSize, isoCurrencyCode } from "@/types";
import ProjectClientBadge from "../../../../components/ProjectClientBadge.cli";
import IdBadge from "../../../../components/IdBadge.cli";
import { Client, Project, ProjectPhase } from "@prisma/client";
import DeliverableTree from "@/types/DeliverableTree.type";
import { Separator } from "../../../../components/ui/separator";
import AppTitle from "../../../../components/boilerplate/AppTitle.cli";
import deliverableTotalHours from "./deliverableTotalHours.function";
import { DollarSign } from "lucide-react";


export default function WBSRoot(
    { client, project, phase, deliverables, hourlyRate, currency }:
    {
        client: Client,
        project: Project,
        phase: ProjectPhase,
        deliverables: DeliverableTree[],
        hourlyRate: number,
        currency: isoCurrencyCode
    }
) {
    const { logoUrl: clientLogoUrl, id: clientId, name: clientName } = client;
    const { id: projectId, name: projectName } = project;
    const { id: phaseId, name: phaseName, description: phaseDescription } = phase;
    let totalHours = 0;
    deliverables.forEach((deliverable) => {
        totalHours += deliverableTotalHours(deliverable);
    });
    return (
        <Card className="p-3 bg-slate-300 dark:bg-slate-600 w-full md:w-max">
            <CardHeader>
                <div className="flex flex-col gap-3 align-top w-full flex-wrap">
                    <div className="flex flex-row gap-3">
                        <DollarSign size={25} className="inline-flex hover:animate-spin" />
                        <AppTitle size="xl" title={"Quotation for " + (phaseName ?? "unnamed phase")} className="ml-0"/>
                    </div>
                    <div className="prose overflow-clip max-w-auto landscape:max-w-[60vw]">{phaseDescription}</div>
                    {/* <Separator className="w-full" /> */}
                    <br/>
                    <ProjectClientBadge
                        project={project}
                        client={client}
                    />
                </div>
            </CardHeader>

            <CardContent className="flex flex-col gap-3">
                <div className="flex flex-row flex-wrap gap-2 max-w-max font-extrabold text-xl">
                    <div>Estimated cost </div>
                    <div>{formatCurrencyNumber(totalHours * hourlyRate, currency)}</div>
                </div>
                <div className="flex flex-row flex-wrap gap-2">
                    <div className="flex flex-col gap-2">
                        <IdBadge id={`${totalHours} hs`}/>
                        <IdBadge id={`${currency} ${hourlyRate}/h`}/>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                        {Array.from(fxRates.keys()).map(
                            function(key) {
                                if (key === currency) return null;
                                return (
                                    <Badge key={key} variant="secondary">{
                                        fxRates.get(key) && 
                                        formatCurrencyNumber(
                                            fxConvertAmount(
                                                (totalHours * hourlyRate),
                                                currency,
                                                key
                                            ) || 0,
                                            key
                                        )
                                    }
                                </Badge>
                                )
                            }
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
