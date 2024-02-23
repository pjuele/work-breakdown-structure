import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import prisma from '../../../lib/prisma';
import { Badge } from '@/components/ui/badge';
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import PhaseCard from '../PhaseCard.cli';
import { ProjectWBS } from '@/models/OldClasses';
import WBSRoot from '@/components/WBSRoot.cli';
import { MASTER_HOURLY_RATE, MASTER_HOURLY_RATE_CURRENCY_CODE } from '@/lib/constants';
import { Deliverable as OldDeliverable } from '../../../models/OldClasses';
import DynamicHero from '@/components/DynamicHero.cli';

async function getData(phaseId: number) {
    const phase = await prisma.projectPhase.findUnique({
        where: { id: phaseId },
        include: {
            deliverables: {
                include: { elements: true },
            },
            project: {
                include: { client: true },
            },
        },
      });
      return phase;
}
export default async function Home({ params }: { params: any }) {
    try {
        if (!params.phaseId) return null;
        const phase = await getData(Number(params.phaseId));
        if (!phase) return null;
        const deliverables: OldDeliverable[] = [];
        phase.deliverables.forEach((d) => {
            deliverables.push(new OldDeliverable(
                d.id + "",
                d.name + "",
                "...",
                [],
            ));
        })
        console.dir(deliverables, { depth: 10 });
        const wbs = new ProjectWBS(
            phase.id + "",
            phase.project.id + "",
            phase.project.name + "",
            phase.name + "",
            phase.project.client.id + "",
            phase.project.client.name + "",
            phase.project.client.logoUrl,
            MASTER_HOURLY_RATE,
            MASTER_HOURLY_RATE_CURRENCY_CODE,
            "PH" + phase.id,
            deliverables,
        )
        return (
            <main className="mt-10 p-20">
                <div className='flex flex-row gap-5 flex-wrap'>
                    {/* <PhaseCard phase={phase}/>
                    <WBSRoot wbs={wbs}/> */}
                    <DynamicHero wbs={JSON.parse(JSON.stringify(wbs))}/>
                </div>
            </main>
        );

    } catch (e) {
        console.log("🤦 There was an error...");
        console.error(e);
        return <div>Couldn&apos;t find a project phase with id [{params.phaseId}]</div>;
    }
}
