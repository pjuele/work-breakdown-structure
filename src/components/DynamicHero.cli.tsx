'use client';

// https://en.wikipedia.org/wiki/Work_breakdown_structure

import Image from 'next/image';
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
import { wbs } from '@/mock-data/generators';
import { dogSizeLegends, fxRates } from '@/lib/constants';
import { formatCurrencyNumber, fxConvertAmount, getDogSizeCostAsString, getDogSizeToHours } from '@/lib/utils';
import { Deliverable } from '@/models/OldClasses';
import DogPic from './DogPic.cli';


export default function DynamicHero() {
    const totalHours = wbs.totalHours();
    return(
        <div className="flex flex-col gap-3 m-3">
            <div className="flex flex-row justify-around">
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
                                    <p>{deliverable.hours()} hs</p>
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
