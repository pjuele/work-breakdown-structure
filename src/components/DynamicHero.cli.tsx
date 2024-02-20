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

export default function DynamicHero() {
    const [largeDog, setLargeDog] = useState(true);
    return(
        <>
            <div
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

            {!largeDog &&
                <ResizablePanelGroup direction="horizontal">
                    <ResizablePanel className='w-[20vw] max-w-[20vw] h-[80vh] min-h-[80vh] p-5'>
                    <Table>
                        <TableCaption>Project effort estimations.</TableCaption>
                        <TableHeader>
                            <TableRow>
                            <TableHead>Quotation</TableHead>
                            <TableHead>Client</TableHead>
                            <TableHead>Projects / Phase</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {projects.map((project, index) => (
                                <TableRow key={index}>
                                    <TableCell>{project.id}</TableCell>
                                    <TableCell>{project.name}</TableCell>
                                    <TableCell>{project.clientName}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        </Table>
                    </ResizablePanel>
                    {/* <ResizableHandle withHandle /> */}
                    <ResizablePanel className='border-spacing-3 border-[1px] m-3 p-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad non facere esse qui quidem aperiam accusantium quae fugit, animi repellat fugiat expedita libero asperiores quia necessitatibus, ipsa natus, nobis rerum?
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam ipsa dolor possimus, minima et sunt? Possimus architecto consequatur eos, aut eaque placeat voluptates magnam aspernatur illum nulla, incidunt impedit est!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur in cum neque inventore! Maxime ad quod dicta aliquid pariatur autem commodi magnam voluptates. Repudiandae inventore magni officia beatae, sed voluptatibus.
                    </ResizablePanel>
                </ResizablePanelGroup>
            }
        </>
      );
}