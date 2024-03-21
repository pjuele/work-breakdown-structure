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
        <div className='flex flex-row gap-2 flex-wrap'>
            <ScrollArea className="w-full">
                <div className="grid grid-cols-[auto_auto] gap-y-1 gap-x-2 max-w-max">
                    <div><IdBadge id={"prj"} /></div>
                    <div className="text-nowrap">{project.name}</div>
                    <div><IdBadge id={"for"} /></div>
                    <div className="text-nowrap">{client.name}</div>
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </div>
    );
}