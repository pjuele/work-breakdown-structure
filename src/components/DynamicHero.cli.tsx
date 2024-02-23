'use client';

// https://en.wikipedia.org/wiki/Work_breakdown_structure

import { Button } from './ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import {Package} from "lucide-react";
import { Badge } from './ui/badge';
// import { wbs } from '@/mock-data/generators';
import { dogSizeLegends } from '@/lib/constants';
import { getDogSizeCostAsString, getDogSizeToHours } from '@/lib/utils';
import { Deliverable, ProjectWBS } from '@/models/OldClasses';
import DogPic from './DogPic.cli';
import WBSRoot from './WBSRoot.cli';


export default function DynamicHero({wbs}: {wbs: ProjectWBS}) {
    if (!wbs) return null;
    const totalHours = 25; //wbs.totalHours();
    return(
        <div className="flex flex-col gap-3 m-3">
            <div className="flex flex-row justify-around">
                <WBSRoot wbs={wbs}/>
            </div>

            <div className='container flex flex-row justify-center align-top gap-3'>
                {wbs.deliverables.map((deliverable: Deliverable, index: number) => (
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
                                        <DogPic dogSize={task.size}/>
                                        <CardTitle>{task.description}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className='flex flex-row flex-wrap gap-1'>
                                            <Badge>{dogSizeLegends.get(task.size)}</Badge>
                                            <Badge>{getDogSizeToHours(task.size)} hs</Badge>
                                            <Badge>{getDogSizeCostAsString(task.size, wbs.hourlyRate, wbs.currency)}</Badge>
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      );
}
