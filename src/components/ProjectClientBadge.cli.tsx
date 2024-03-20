'use client';

import IdBadge from "@/components/IdBadge.cli";
import { ScrollBar, ScrollArea } from "@/components/ui/scroll-area";
import { Client, Project } from "@prisma/client";
import Image from "next/image";

export default function ProjectClientBadge(
    { project, client }:
    { project: Project, client: Client }
) {
    return (
        <div className='flex flex-row gap-2 flex-wrap w-full'>
            {/* <Image
                className='rounded-lg object-contain aspect-square mb-auto'
                src={client.logoUrl}
                width={40}
                height={40}
                alt={`${client.name} logo`} /> */}
            <ScrollArea className="max-w-max">
                <div className="grid grid-cols-[auto_auto_auto] gap-y-1 gap-x-2 text-right mb-3">
                    <div>project</div>
                    <div><IdBadge id={project.id} /></div>
                    <div className="text-nowrap text-left">{project.name}</div>
                    <div>client</div>
                    <div><IdBadge id={client.id} /></div>
                    <div className="text-nowrap text-left">{client.name}</div>
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </div>
    );
}