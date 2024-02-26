'use client';

import IdBadge from "@/components/IdBadge.cli";
import { ScrollBar, ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

export default function ProjectClientLabels(
    { phase, includePhase = false }:
    { phase: any, includePhase?: boolean }
) {
    return (
        <div className='flex flex-row gap-3 flex-wrap'>
            {/* <div className="max-h-max max-w-full bg-lime-400 sm:max-w-max md:bg-lime-800 w-full sm:w-auto mx-auto mb-3 sm:mb-0"> */}
                <Image
                    className='rounded-lg object-contain aspect-square mb-auto'
                    src={phase.project.client.logoUrl}
                    width={50}
                    height={50}
                    alt={`${phase.project.client.name} logo`} />
            {/* </div> */}
            <ScrollArea className="max-w-max w-auto">
                <div className="grid grid-cols-[auto_auto] gap-2 text-right mb-3">
                    <div><IdBadge id={phase.project.id} /></div>
                    <div className="text-nowrap text-left">{phase.project.name}</div>
                    <div><IdBadge id={phase.project.client.id} /></div>
                    <div className="text-nowrap text-left">{phase.project.client.name}</div>
                    {includePhase && <>
                        <div><IdBadge id={phase.id} /></div>
                        <div className="text-nowrap text-left">{phase.name}</div>
                    </>}
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </div>
    );
}