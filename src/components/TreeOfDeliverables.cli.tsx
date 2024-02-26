import { dogSizeLegends } from "@/lib/constants";
import { getDogSizeToHours, getDogSizeCostAsString, cn } from "@/lib/utils";
import { Deliverable } from "@/models/OldClasses";
import { Package, PlusCircle } from "lucide-react";
import { Badge } from "./ui/badge";
import DogPic from "./DogPic.cli";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "./ui/card";
import { isoCurrencyCode } from "@/lib/types";
import { ScrollArea } from "./ui/scroll-area";
import { ScrollBar } from "./ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { NavigationMenu, NavigationMenuLink } from "./ui/navigation-menu";

export default function TreeOfDeliverables(
    {deliverables, hourlyRate, currency}:
    { deliverables: Deliverable[], hourlyRate: number, currency: isoCurrencyCode }
) {
    return (
        <TooltipProvider>
        <ScrollArea className="w-full">
        <ScrollBar color="destructive" orientation="horizontal" />
        <div className='flex flex-row align-top gap-3 max-w-max'>
            {deliverables.map((deliverable: Deliverable, index: number) => {
                return (
                    <div key={index}
                        className={cn(
                            "flex flex-col gap-3",
                            "min-w-[85vw] max-w-[85vw]",
                            "md:min-w-max md:max-w-auto",
                            // "lg:w-1/3 xl:w-1/4"
                        )}>
                        <Card key={index} className='bg-slate-950'>
                            <CardHeader>
                                <CardTitle>
                                <div className="flex flex-row flex-wrap gap-2 align-top">
                                    <div>
                                        <Package className='inline-flex mr-2' />
                                    </div>
                                    <div>
                                        {deliverable.name}
                                    </div>
                                </div>
                                        </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    <p>{deliverable.description}</p>
                                    <p>{4} hs</p>
                                    {/* <p>{deliverable.hours()} hs</p> */}
                                </CardDescription>
                            </CardContent>
                            <CardFooter>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <NavigationMenu>
                                        <NavigationMenuLink href='/wbs'>
                                            <PlusCircle/>
                                        </NavigationMenuLink>
                                        </NavigationMenu>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        add new task
                                    </TooltipContent>
                                </Tooltip>
                            </CardFooter>
                        </Card>


                        <div className='flex flex-col gap-3'>
                            {deliverable.tasks.map((task, index) => (
                                <Card key={index} className='bg-secondary'>
                                    <CardHeader className="flex flex-row gap-2 align-bottom">
                                        <DogPic dogSize={task.size} />
                                        <CardTitle>{task.description}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className='flex flex-row flex-wrap gap-1'>
                                            <Badge>{dogSizeLegends.get(task.size)}</Badge>
                                            <Badge>{getDogSizeToHours(task.size)} hs</Badge>
                                            <Badge>{getDogSizeCostAsString(task.size, hourlyRate, currency)}</Badge>
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
        </ScrollArea>
        </TooltipProvider>
    );
}