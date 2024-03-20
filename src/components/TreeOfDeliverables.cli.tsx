'use client';

import { dogSizeLegends } from "@/lib/constants";
import { getDogSizeToHours, getDogSizeCostAsString, cn, formatCurrencyNumber } from "@/lib/utils";
import { Package } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { DogSize, isoCurrencyCode } from "@/types";
import { ScrollArea } from "./ui/scroll-area";
import { ScrollBar } from "./ui/scroll-area";
import { TooltipProvider } from "./ui/tooltip";
import IdBadge from "./IdBadge.cli";
import ElementFormDialog from "@/app/in/quotations/[phaseId]/ElementFormDialog.cli";
import { useEffect, useState } from "react";
import { Element } from "@prisma/client";
import DeliverableTree from "@/types/DeliverableTree.type";

export default function TreeOfDeliverables(
    {deliverables, hourlyRate, currency}:
    { deliverables: DeliverableTree[], hourlyRate: number, currency: isoCurrencyCode }
) {
    const [finishedRendering, setFinishedRendering] = useState(false);

    useEffect(() => {
        setFinishedRendering(true);
    }, []);

    if (!finishedRendering) return null;

    return (
        <TooltipProvider>
            <ScrollArea className="w-full">
                <ScrollBar color="destructive" orientation="horizontal" />
                <TheActualTree deliverables={deliverables} hourlyRate={hourlyRate} currency={currency}/>
            </ScrollArea>
        </TooltipProvider>
    );
}


function TheActualTree(
    {deliverables, hourlyRate, currency}:
    { deliverables: any[], hourlyRate: number, currency: isoCurrencyCode }
) {
    return (
        <div className="flex flex-row align-top justify-flex-start gap-3">
            {deliverables.map((deliverable: DeliverableTree, index: number) => {
                return (
                    <div key={index} className={cn(
                            "flex flex-col gap-3",
                            "w-[85vw] md:w-[15rem] lg:w-[17rem] xl:w-[20rem] 2xl:w-[25rem]",
                        )}>

                        <DeliverableCard key={index}
                            deliverable={deliverable}
                            index={index}
                            hourlyRate={hourlyRate}
                            currency={currency}
                            />

                        <ElementFormDialog deliverableId={deliverable.id}/>
            
                        <div className='flex flex-col gap-3'>
                            {deliverable.elements.map((element: any, index: number) => (
                                <TaskCard key={index}
                                    element={element}
                                    hourlyRate={hourlyRate}
                                    currency={currency}/>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

function DeliverableCard(
    {deliverable, index, hourlyRate, currency}:
    {
        deliverable: any,
        index: number,
        hourlyRate: number,
        currency: isoCurrencyCode,
    }
) {
    const [finishedRendering, setFinishedRendering] = useState(false);

    useEffect(() => {
        setFinishedRendering(true);
    }, []);

    if (!finishedRendering) return null;
    console.dir(deliverable, {depth: 10});
    console.log(typeof deliverable);

    return (
        <Card key={index} className='bg-slate-950'>
            <CardHeader>
                <CardTitle>
                <div className="flex flex-row gap-1 align-middle min-h-[4rem] max-h-[4rem] overflow-hidden">
                    <div className="my-auto">
                        <Package className="inline-flex mr-2" />
                    </div>
                    <div className="text-wrap my-auto">
                        {deliverable.name}
                    </div>
                </div>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
                {deliverable.startDate &&
                    <small>Start date: {new Date(deliverable.startDate).toLocaleDateString()}</small>
                }
                <div className="flex flex-row gap-1">
                    <IdBadge id={`${deliverable.totalHours} hs`} />
                    <IdBadge id={formatCurrencyNumber(deliverable.totalHours * hourlyRate, currency) + ""}/>
                </div>
            </CardContent>
        </Card>
    );
}

function TaskCard(
    {element, hourlyRate, currency}:
    {
        element: Element,
        hourlyRate: number,
        currency: isoCurrencyCode
    }
) {
    return(
        <Card className="bg-secondary max-w-full min-w-full">
            <CardHeader className="flex flex-row gap-2 align-middle">
                {/* <div className="my-auto"><DogPic dogSize={element.size} /></div> */}
                <CardTitle className="text-wrap my-auto">{element.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className='flex flex-row flex-wrap gap-1'>
                    <IdBadge id={dogSizeLegends.get(element.size as DogSize) + ""}/>
                    <IdBadge id={getDogSizeToHours(element.size as DogSize) + " hs"}/>
                    <IdBadge id={getDogSizeCostAsString(element.size as DogSize, hourlyRate, currency) + " "}/>
                </div>
            </CardContent>
        </Card>
    );
}
