'use client';

import { dogSizeLegends } from "@/lib/constants";
import { getDogSizeToHours, getDogSizeCostAsString, cn, formatCurrencyNumber } from "@/lib/utils";
import { Deliverable } from "@/models/OldClasses";
import { Package, PlusCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { isoCurrencyCode } from "@/lib/types";
import { ScrollArea } from "./ui/scroll-area";
import { ScrollBar } from "./ui/scroll-area";
import { TooltipProvider } from "./ui/tooltip";
import IdBadge from "./IdBadge.cli";
import ElementFormDialog from "@/app/in/quotations/[phaseId]/ElementFormDialog.cli";

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
        <div className="flex flex-row align-top justify-center gap-3">
            {deliverables.map((deliverable: Deliverable, index: number) => {
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

                        {/* <CRUDActionsMenu actions={
                            [
                                {
                                    icon:
                                        <PlusCircle
                                            className="animate-pulse hover:text-destructive"
                                            onClick={() => setOpen(true)}
                                            />,
                                    label: "add a task  \u2193",
                                    url: null,
                                }
                            ]
                        }/> */}
                        <ElementFormDialog deliverableId={deliverable.id}/>
            
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
            <CardContent className="flex flex-row gap-2">
                <IdBadge id={`${deliverable.totalHours} hs`} />
                <IdBadge id={formatCurrencyNumber(deliverable.totalHours * hourlyRate, currency) + ""}/>
            </CardContent>
        </Card>
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
