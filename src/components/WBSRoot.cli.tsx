import { fxRates } from "@/lib/constants";
import { formatCurrencyNumber, fxConvertAmount } from "@/lib/utils";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { Card, CardHeader, CardDescription, CardContent, CardFooter } from "./ui/card";
import { ProjectWBS } from "@/models/OldClasses";
import { isoCurrencyCode } from "@/lib/types";

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
        <Card>
            <CardHeader>
                <div className="flex flex-row gap-3 align-top w-full">
                    <Image className='rounded-md w-20 h-20' src={clientLogoUrl} alt={clientName} width={50} height={50} />
                    <CardDescription className="w-auto">
                        <div className="grid grid-cols-4 gap-2">
                            <div className="ml-auto max-w-max"><Badge variant="outline">{clientId}</Badge></div>
                                <div className="col-span-3 mr-auto">{clientName}</div>
                            <div className="ml-auto max-w-max"><Badge variant="outline">{projectId}</Badge></div>
                                <div className="col-span-3 mr-auto">{projectName}</div>
                            <div className="ml-auto max-w-max"><Badge variant="outline">{phase}</Badge></div>
                                <div className="col-span-3 mr-auto">{description}</div>
                        </div>
                    </CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <p className='font-extrabold text-xl'>Estimated cost {formatCurrencyNumber(totalHours * hourlyRate, currency)}</p>
                <p><Badge variant="outline">{totalHours} hs</Badge> <Badge variant="outline">{currency} {hourlyRate}/h</Badge></p>
                <div className='mt-3 flex gap-2'>
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
            </CardContent>
            <CardFooter>
                <Button variant='destructive' size={"sm"} className='ml-auto'>new deliverable</Button>
            </CardFooter>
        </Card>
    )
}
