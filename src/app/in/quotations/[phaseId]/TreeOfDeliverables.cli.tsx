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
import deliverableTotalHours from "./deliverableTotalHours.function";
import ElementCard from "./ElementCard.cli";
import DeliverableCard from "./DeliverableCard.cli";

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
    { deliverables: DeliverableTree[], hourlyRate: number, currency: isoCurrencyCode }
) {
    return (
        <div className="flex flex-row align-top justify-flex-start gap-3">
            {deliverables.map((deliverable, index: number) => {
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
