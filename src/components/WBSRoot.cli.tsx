import { fxRates } from "@/lib/constants";
import { formatCurrencyNumber, fxConvertAmount } from "@/lib/utils";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { Card, CardHeader, CardDescription, CardContent, CardFooter } from "./ui/card";
import { ProjectWBS } from "@/models/OldClasses";

export default function WBSRoot({wbs}: {wbs: ProjectWBS}) {
    const totalHours = 25; //wbs.totalHours();
    return (
        <Card>
            <CardHeader>
                <div className="flex flex-row gap-3 align-top">
                    <Image className='rounded-md w-20 h-20' src={wbs.clientLogoUrl} alt={wbs.clientName} width={50} height={50} />
                    <CardDescription>
                        <div className='flex flex-col gap-1'>
                            <div><Badge className="w-16" variant="outline">{wbs.clientId}</Badge> {wbs.clientName}</div>
                            <div><Badge className="w-16" variant="outline">{wbs.projectId}</Badge> {wbs.projectName}</div>
                            <div><Badge className="w-16" variant="outline">{wbs.phase}</Badge> {wbs.description}</div>
                        </div>
                    </CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <p className='font-extrabold text-xl'>Estimated cost {formatCurrencyNumber(totalHours * wbs.hourlyRate, wbs.currency)}</p>
                <p><Badge variant="outline">{totalHours} hs</Badge> <Badge variant="outline">{wbs.currency} {wbs.hourlyRate}/h</Badge></p>
                <div className='mt-3 flex gap-2'>
                    {Array.from(fxRates.keys()).map(
                        function(key) {
                            if (key === wbs.currency) return null;
                            return (
                                <Badge key={key} variant="secondary">{
                                    fxRates.get(key) && 
                                    formatCurrencyNumber(
                                        fxConvertAmount(
                                            (totalHours * wbs.hourlyRate),
                                            wbs.currency,
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
