'use client';

import { dogSizeLegends } from "@/lib/constants";
import { getDogSizeToHours, getDogSizeCostAsString, cn, formatCurrencyNumber } from "@/lib/utils";
import { ArrowBigRight, Package } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../../../../components/ui/card";
import { DogSize, isoCurrencyCode } from "@/types";
import { ScrollArea } from "../../../../components/ui/scroll-area";
import { ScrollBar } from "../../../../components/ui/scroll-area";
import { TooltipProvider } from "../../../../components/ui/tooltip";
import IdBadge from "../../../../components/IdBadge.cli";
import ElementFormDialog from "@/app/in/quotations/[phaseId]/ElementFormDialog.cli";
import { useEffect, useState } from "react";
import { Element } from "@prisma/client";
import DeliverableTree from "@/types/DeliverableTree.type";
import ElementKeyCap from "../../../../components/IconForElement.cli";

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
                                <ElementCard key={index}
                                    element={element}
                                    hourlyRate={hourlyRate}
                                    currency={currency}
                                    ordinal={index + 1}/>
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

function ElementCard(
    {element, hourlyRate, currency, ordinal}:
    {
        element: Element,
        hourlyRate: number,
        currency: isoCurrencyCode,
        ordinal?: number,
    }
) {
    return(
        <Card className="bg-transparent border-0 max-w-full min-w-full">
            {/* <div className="relative top-[2.9em] left-[-5px]"><ArrowBigRight size={25} /></div> */}
            <CardHeader className="flex flex-row gap-2 align-middle">
                {/* <div className="my-auto"><DogPic dogSize={element.size} /></div> */}
                <CardTitle className="text-wrap my-auto">
                    <div className="flex flex-row gap-2 align-top justify-center">
                        {/* <ElementKeyCap /> */}
                        <div className="max-h-[3em] overflow-y-hidden flex flex-row gap-2">
                            {ordinal && <IdBadge id={ordinal.toString()} className="inline-flex max-w-min max-h-[1em]"/>}
                            {element.name.substring(0, 120) + <small> + {((element.name.length > 120) ? "..." : "")} + </small>}
                        </div>
                    </div>
                </CardTitle>
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

// export const TimeLine = ({children}: {children: JSX.Element[]}) => {
//     return (
//         <ol className="relative border-s border-gray-200 dark:border-gray-700">
//             {children}
//         </ol>
//     )
// }

// export const TimelineEntry = ({anchorLabel, children}: {anchorLabel?: string, children: JSX.Element}) => {
//     return (
//         <li className="mb-10 ml-6">
//             <li className="mb-10 ms-4">
//                 <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
//                 {anchorLabel &&
//                     <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{anchorLabel}</time>
//                 }
//                 {children}
//                 {/* <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{entry.title}</h3> */}
//                 {/* <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{entry.content}</div> */}
//             </li>
//         </li>
//     )
// }
// <div className='flex flex-col gap-3'>
// <TimeLine>
//     {deliverable.elements.map(
//         (element: Element, index: number) => {
//             return (
//                 <TimelineEntry key={index}>
//                     <ElementCard key={index}
//                         element={element}
//                         hourlyRate={hourlyRate}
//                         currency={currency} />
//                 </TimelineEntry>
//             );
//         }
//     )}
// </TimeLine>
// </div>
