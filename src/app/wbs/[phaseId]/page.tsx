import prisma from '../../../lib/prisma';
import { ProjectWBS } from '@/models/OldClasses';
import { MASTER_HOURLY_RATE, MASTER_HOURLY_RATE_CURRENCY_CODE } from '@/lib/constants';
import { Deliverable as OldDeliverable, Task as OldTask } from '../../../models/OldClasses';
import { DogSize } from '@/lib/types';
import PhaseTree from '@/components/PhaseTree.cli';
import Menu from './menu.cli';

export default async function Home({ params }: { params: any }) {
    try {
        if (!params.phaseId) return null;
        const wbs = await getData(Number(params.phaseId));
        if (!wbs) return null;
        const totalHoursValue = wbs.totalHours();
        return (
            <main className="p-3 flex flex-col gap-3 overflow-hidden w-[95%]">
                <Menu />
                <PhaseTree
                    clientLogoUrl={wbs.clientLogoUrl}
                    clientId={wbs.clientId}
                    clientName={wbs.clientName}
                    projectId={wbs.projectId}
                    projectName={wbs.projectName}
                    phase={wbs.phase}
                    description={wbs.description}
                    totalHoursValue={totalHoursValue}
                    deliverables={JSON.parse(JSON.stringify(wbs.deliverables))} // FIXME: solve this class/POJO issue
                    hourlyRate={MASTER_HOURLY_RATE}
                    currency={MASTER_HOURLY_RATE_CURRENCY_CODE}
                />
            </main>
        );

    } catch (e) {
        console.log("🤦 There was an error...");
        console.error(e);
        return <div>Couldn&apos;t find a project phase with id [{params.phaseId}]</div>;
    }
}

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
    if (!phase) return null;
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
        phase.deliverables.map((d) => new OldDeliverable(
            d.id + "",
            d.name + "",
            "...",
            d.elements.map((e) => new OldTask(
                e.id + "",
                e.name + "",
                e.size + "" as DogSize
            )),
        )),
    );
    return wbs;
}
