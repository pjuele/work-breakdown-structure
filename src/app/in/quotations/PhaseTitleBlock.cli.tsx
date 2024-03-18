'use client';

import AppTitle from "@/components/AppTitle.cli";
import ProjectClientBadge from "@/components/ProjectClientBadge.cli";
import { Client, Project, ProjectPhase } from "@prisma/client";

export default function PhaseTitleBlock(
    { phase, client, project }:
    { phase: ProjectPhase, client: Client, project: Project }) {
    return (
        <div
            key={phase.id}
            className={"w-full md:w-auto flex flex-col gap-2"}>
            <AppTitle size={"lg"} title={phase.name ?? "?"} />
            <div className="overflow-x-scroll min-w-max">
                <ProjectClientBadge project={project} client={client} />
            </div>
        </div>
    );
}
// export default function PhaseCard({ phase }: { phase: any }) {
//     const router = useRouter();
//     return (
//         <Card
//             onClick={(e) => {router.push(`${PATH_TO_QUOTATIONS}/${phase.id}`)}}
//             key={phase.id}
//             className={
//                 "w-full md:w-auto " +
//                 "hover:cursor-pointer hover:bg-secondary hover:border-2 hover:border-destructive"
//                 }>
//             <CardHeader>
//                 <CardTitle>{phase.name}</CardTitle>
//             </CardHeader>
//             <CardContent>
//                 <ProjectClientBadge project={phase.project} client={phase.project.client} />
//             </CardContent>
//         </Card>
//     );
// }