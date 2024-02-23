import { dogSizeLegends } from "@/lib/constants";
import { getDogSizeToHours, getDogSizeCostAsString } from "@/lib/utils";
import { Deliverable } from "@/models/OldClasses";
import { Package } from "lucide-react";
import { Badge } from "./ui/badge";
import DogPic from "./DogPic.cli";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "./ui/card";
import { isoCurrencyCode } from "@/lib/types";

export default function TreeOfDeliverables(
    {deliverables, hourlyRate, currency}:
    { deliverables: Deliverable[], hourlyRate: number, currency: isoCurrencyCode }
) {
    return (
        <div className='container flex flex-row justify-center align-top gap-3'>
            {deliverables.map((deliverable: Deliverable, index: number) => {
                return (
                    <div key={index} className='flex flex-col gap-3'>
                        <Card key={index} className='bg-slate-950'>
                            <CardHeader>
                                <CardTitle><Package className='inline-flex mr-2' />{deliverable.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    <p>{deliverable.description}</p>
                                    <p>{4} hs</p>
                                    {/* <p>{deliverable.hours()} hs</p> */}
                                </CardDescription>
                            </CardContent>
                            <CardFooter>
                                <Button variant='destructive' size={'sm'} className='ml-auto'>new task</Button>
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
    );
}