import { fxRates } from "@/lib/constants";
import { formatCurrencyNumber, fxConvertAmount } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { Card, CardHeader, CardContent } from "./ui/card";
import { isoCurrencyCode } from "@/lib/types";
import ProjectClientLabels from "./ProjectClientLabels.cli";
import IdBadge from "./IdBadge.cli";

export default function WBSRoot(
    {
        clientLogoUrl,
        clientId,
        clientName,
        projectId,
        projectName,
        phase,
        description,
        totalHours,
        hourlyRate,
        currency,
    }:
    {
        clientLogoUrl: string,
        clientId: string,
        clientName: string,
        projectId: string,
        projectName: string,
        phase: string,
        description: string,
        totalHours: number,
        hourlyRate: number,
        currency: isoCurrencyCode
    }
) {
    return (
        <Card className="mx-auto bg-muted w-full md:w-auto">
            <CardHeader>
                <div className="flex flex-row gap-3 align-top w-full flex-wrap">
                    {/* <CardDescription className="w-full md:w-auto"> */}
                        <ProjectClientLabels
                            phase={{
                                project: {
                                    id: projectId,
                                    name: projectName,
                                    client: {
                                        id: clientId,
                                        name: clientName,
                                        logoUrl: clientLogoUrl
                                    }
                                },
                                id: phase,
                                name: description
                            }}
                            includePhase={true}
                        />
                    {/* </CardDescription> */}
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
