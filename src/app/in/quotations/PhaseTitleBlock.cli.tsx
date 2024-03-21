'use client';

import AppTitle from "@/components/boilerplate/AppTitle.cli";
import ProjectClientBadge from "@/components/ProjectClientBadge.cli";
import { Client, Project, ProjectPhase } from "@prisma/client";
import Image from "next/image";
import PhaseDropDownMenu from "./PhaseDropDownMenu.cli";

export default function PhaseTitleBlock(
    { phase, client, project }:
    { phase: ProjectPhase, client: Client, project: Project }) {
    return (
        <>
            <PhaseDropDownMenu phaseId={phase.id} />
        <div key={phase.id} className="flex flex-row gap-5">
            <div className="relative min-w-24 min-h-24 max-w-24 max-h-24 bg-muted rounded-md">
                <Image
                    src={client.logoUrl}
                    alt={client.name ?? "client logo"}
                    fill={true}
                    className="rounded-md aspect-square object-scale-down"
                />
            </div>
            <div className="flex flex-col gap-3 overflow-hidden">
                <AppTitle size={"md"} title={phase.name ?? "?"} className="mx-0"/>
                <ProjectClientBadge project={project} client={client} />
            </div>
        </div>
        </>
    );
}
