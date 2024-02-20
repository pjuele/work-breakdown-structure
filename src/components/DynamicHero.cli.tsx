'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import {Package, Boxes, PlusCircle} from "lucide-react";
import { Badge } from './ui/badge';

const projects=[
    {
        id: "2024001",
        name: 'EFF | Ethhar Phase 6 - TEMPau Reports',
        description: 'Lorem ipsum dolor sit amet.',
        clientId: "RIT",
        clientName: "Responsive IT",
    },
    {
        id: "2024002",
        name: 'BPC | Beverage Pepe Consulting',
        description: 'Tomo, para no enamorarme.',
        clientId: "SEB",
        clientName: "Sebastian Maggi",
    }
];
const fxFlags = new Map<isoCurrencyCode, string>();
fxFlags.set("USD", "🇺🇸");
fxFlags.set("EUR", "🇪🇺");
fxFlags.set("CAD", "🇨🇦");
fxFlags.set("GBP", "🇬🇧");
fxFlags.set("UYU", "🇺🇾");

const fxRates = new Map<isoCurrencyCode, number>();
fxRates.set("USD", 1);
fxRates.set("EUR", 0.93);
fxRates.set("CAD", 1.35);
fxRates.set("GBP", 0.79);
fxRates.set("UYU", 39.12);

type isoCurrencyCode = "USD" | "EUR" | "GBP" | "CAD" | "UYU";

type TaskSize = "tiny" | "small" | "medium" | "large" | "huge";

class Task {
    id: string;
    description: string;
    size: TaskSize;
    constructor(
        id: string,
        description: string,
        size: TaskSize
    ) {
        this.id = id;
        this.description = description;
        this.size = size;
    }
}
class Deliverable {
    id: string;
    name: string;
    description: string;
    hours: number;
    tasks: Task[];
    constructor(
        id: string,
        name: string,
        description: string,
        hours: number,
        tasks: Task[]
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.hours = hours;
        this.tasks = tasks;
    }
}

class projectWBS {
    id: string;
    projectId: string;
    projectName: string;
    description: string;
    clientId: string;
    clientName: string;
    hourlyRate: number;
    currency: isoCurrencyCode;
    phase: string;
    totalHours: number;
    deliverables: Deliverable[];
    constructor(
        id: string,
        projectId: string,
        projectName: string,
        description: string,
        clientId: string,
        clientName: string,
        hourlyRate: number,
        currency: isoCurrencyCode = "USD",
        phase: string,
        totalHours: number,
        deliverables: Deliverable[]
    ) {
        this.id = id;
        this.projectId = projectId;
        this.projectName = projectName;
        this.description = description;
        this.clientId = clientId;
        this.clientName = clientName;
        this.hourlyRate = hourlyRate;
        this.currency = currency;
        this.phase = phase;
        this.totalHours = totalHours;
        this.deliverables = deliverables;
    }
}

const MASTER_HOURLY_RATE = 34;
const MASTER_HOURLY_RATE_CURRENCY_CODE = "CAD";

const wbs = new projectWBS(
    "2024001",
    "EFF",
    "Ethhar Firebase Functions Backend",
    "TEMPau Reports",
    "RIT",
    "Responsive IT",
    MASTER_HOURLY_RATE,
    MASTER_HOURLY_RATE_CURRENCY_CODE,
    "PH6",
    20,
    [
        {
            id: "D1",
            name: 'Setup environment',
            description: 'Nada.',
            hours: 10,
            tasks: [
                {
                    id: "T1",
                    description: 'Lorem ipsum dolor sit amet.',
                    size: 'small',
                },
                {
                    id: "T2",
                    description: 'Tomo, para no enamorarme.',
                    size: 'large',
                }
            ]
        },
        {
            id: "D2",
            name: 'Mess up environment',
            description: 'Nada mas.',
            hours: 10,
            tasks: [
                {
                    id: "T3",
                    description: 'Rompan todo por los Shakers.',
                    size: 'medium',
                },
            ]
        }
    ]
);

export default function DynamicHero() {
    const [largeDog, setLargeDog] = useState(true);
    return(
        <>
            {/* <div
                className={cn(
                    "flex flex-row align-stretch justify-center gap-2",
                    largeDog ?
                        "max-h-[50%]" :
                        "max-h-[10%] fixed top-3 left-3"
                )}
            >
                <Image
                    className='w-auto h-auto cursor-pointer'
                    src="/border-collie.png"
                    alt="Work Buster"
                    width={largeDog ? 200 : 30}
                    height={largeDog ? 200 : 30}
                    priority />
                <div>
                    <h1 className={largeDog ? "text-5xl" : "text-2xl"}>workBuster</h1>
                    <p hidden={!largeDog}>Easy WBS tool for your agile projects.</p>
                </div>
            </div>
            {largeDog &&
                <Button variant="outline" size="lg" onClick={() => setLargeDog(!largeDog)}>
                    Get Started
                </Button>
            }
             */}
            {/* <Table>
                <TableCaption>Project effort estimations.</TableCaption>
                {/* <TableHeader>
                    <TableRow>
                        <TableHead>qid</TableHead>
                        <TableHead>quo</TableHead>
                    </TableRow>
                </TableHeader> * /}
                <TableBody>
                    {projects.map((project, index) => (
                        <TableRow key={index}>
                            <TableCell>{project.id} | {project.clientId} | {project.name}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table> */}

            <div className="flex flex-col gap-3 align-top justify-normal w-none">
                <Card className="">
                    <CardHeader>
                        <CardTitle>{wbs.phase} | {wbs.description}</CardTitle>
                        <CardDescription>
                            <p>{wbs.clientId} | {wbs.clientName}</p>
                            <p>{wbs.projectId} | {wbs.projectName}</p>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>{wbs.totalHours} hs @ {wbs.currency} <strong>{wbs.hourlyRate}</strong> per hour</p>
                        <p>{fxFlags.get(wbs.currency)} <span className='font-extrabold text-xl'>{wbs.currency} {wbs.totalHours * wbs.hourlyRate}<sup className="text-xs">.00</sup></span></p>
                    </CardContent>
                    <CardFooter>
                        {Array.from(fxRates.keys()).map((key) => (
                            <Badge key={key}>{
                                fxRates.get(key) && 
                                `${fxFlags.get(key)} ${key} ${
                                    Intl.NumberFormat('en-CA')
                                        .format(
                                            fxConvertAmount(
                                                (wbs.totalHours * wbs.hourlyRate),
                                                wbs.currency,
                                                key
                                            ) || 0
                                        )
                                    }`}
                                </Badge>
                        ))}
                    </CardFooter>
                </Card>

                <h2 className='text-xl ml-3'><Boxes className='inline-flex mr-2' />Deliverables</h2>
                <Button color='destructive' variant='outline'>new deliverable</Button>

                <div className='flex flex-row align-top gap-3'>
                    {wbs.deliverables.map((deliverable, index) => (
                        <div key={index} className='flex flex-col gap-3'>
                            <Card key={index} className='bg-slate-950'>
                                <CardHeader>
                                    <CardTitle><Package className='inline-flex mr-2' />{deliverable.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>
                                        <p>{deliverable.description}</p>
                                    </CardDescription>
                                    <p>{deliverable.hours} hs</p>
                                </CardContent>
                            </Card>
                            <div className='flex flex-col gap-3'>
                                {deliverable.tasks.map((task, index) => (
                                    <Card key={index} className='bg-secondary'>
                                        <CardHeader>
                                            <CardTitle>{task.description}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <CardDescription>
                                                <p>{task.size}</p>
                                            </CardDescription>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
      );
}

function fxConvertAmount(amount: number, from: isoCurrencyCode, to: isoCurrencyCode) {
    if (from === to) {
        return amount;
    }
    const fromAmount = fxRates.get(from) || 0;
    const toAmount = fxRates.get(to) || 0;
    if (!fromAmount || !toAmount) {
        return null;
    }
    return Math.floor(amount * fromAmount / toAmount);
}