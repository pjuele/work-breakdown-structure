'use client';

import { PATH_TO_QUOTATIONS, dogSizeLegends } from "@/lib/constants";
import { getDogSizeToHours, getDogSizeCostAsString, cn } from "@/lib/utils";
import { Deliverable } from "@/models/OldClasses";
import { Package, PlusCircle } from "lucide-react";
import DogPic from "./DogPic.cli";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { isoCurrencyCode } from "@/lib/types";
import { ScrollArea } from "./ui/scroll-area";
import { ScrollBar } from "./ui/scroll-area";
import { TooltipProvider } from "./ui/tooltip";
import CRUDActionsMenu from "./CRUDActionsMenu.cli";
import IdBadge from "./IdBadge.cli";

export default function TreeOfDeliverables(
    {deliverables, hourlyRate, currency}:
    { deliverables: Deliverable[], hourlyRate: number, currency: isoCurrencyCode }
) {
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
        <div className='flex flex-row align-top gap-3'>
            {deliverables.map((deliverable: Deliverable, index: number) => {
                return (
                    <DeliverableCard key={index}
                        deliverable={deliverable}
                        index={index}
                        hourlyRate={hourlyRate}
                        currency={currency}
                        />
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
    return (
        <div key={index}
        className={cn(
            "flex flex-col gap-3",
            "w-[85vw] md:w-1/3 lg:w-1/4 xl:w-1/5",
            "overflow-scroll",
            // "min-w-[85vw] max-w-[85vw]",
            // "md:min-w-[20%] md:max-w-1/4",
        )}>
            <Card key={index} className='bg-slate-950'>
                <CardHeader>
                    <CardTitle>
                    <div className="flex flex-row gap-1 align-middle min-h-[2.5rem] max-h-[2.5rem] overflow-scroll">
                        <div className="my-auto">
                            <Package className="inline-flex mr-2" />
                        </div>
                        <div className="text-wrap my-auto">
                            {deliverable.name}
                        </div>
                    </div>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <IdBadge id={`${deliverable.totalHours} hs`} />
                </CardContent>
            </Card>

            <CRUDActionsMenu actions={
                [
                    {
                        icon: <PlusCircle className="animate-pulse hover:text-destructive"/>,
                        label: "add a task  \u2193",
                        url: `${PATH_TO_QUOTATIONS}/${deliverable.phaseId}/${deliverable.id}/new`
                    }
                ]
            }/>

            <div className='flex flex-col gap-3'>
                {deliverable.tasks.map((task: any, index: number) => (
                    <TaskCard key={index}
                        task={task}
                        hourlyRate={hourlyRate}
                        currency={currency}/>
                ))}
            </div>
        </div>
    );
}

function TaskCard(
    {task, hourlyRate, currency}:
    {
        task: Deliverable["tasks"][number],
        hourlyRate: number,
        currency: isoCurrencyCode
    }
) {
    return(
        <Card className="bg-secondary max-w-full min-w-full">
            <CardHeader className="flex flex-row gap-2 align-middle">
                {/* <div className="my-auto"><DogPic dogSize={task.size} /></div> */}
                <CardTitle className="text-wrap my-auto">{task.description}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className='flex flex-row flex-wrap gap-1'>
                    <IdBadge id={dogSizeLegends.get(task.size) + ""}/>
                    <IdBadge id={getDogSizeToHours(task.size) + " hs"}/>
                    <IdBadge id={getDogSizeCostAsString(task.size, hourlyRate, currency) + " "}/>
                </div>
            </CardContent>
        </Card>
    );
}
