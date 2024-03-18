import { fxRates } from "@/lib/constants";
import { formatCurrencyNumber, fxConvertAmount, getDogSizeToHours } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { Card, CardHeader, CardContent } from "./ui/card";
import { DogSize, isoCurrencyCode } from "@/types";
import ProjectClientBadge from "./ProjectClientBadge.cli";
import IdBadge from "./IdBadge.cli";
import { Client, Project, ProjectPhase } from "@prisma/client";
import DeliverableTree from "@/types/DeliverableTree.type";
import { Separator } from "./ui/separator";
import AppTitle from "./AppTitle.cli";

function deliverableTotalHours(d: DeliverableTree): number {
    let totalHours = 0;
    d.elements.forEach((element) => {
      totalHours += getDogSizeToHours(element.size as DogSize) || 0;
    });
    return totalHours;
  }

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
        <Card className="mx-auto bg-muted w-full md:w-auto">
            <CardHeader>
                <div className="flex flex-col gap-3 align-top w-full flex-wrap">
                    <AppTitle size="2xl" title={phaseName ?? ""}/>
                    <Separator className="w-full" />
                    <ProjectClientBadge
                        project={project}
                        client={client}
                    />
                    <div className="prose overflow-clip">{phaseDescription}</div>
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
