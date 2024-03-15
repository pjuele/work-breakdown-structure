import prisma from '../../../../lib/prisma';
import { ProjectWBS } from '@/models/OldClasses';
import { MASTER_HOURLY_RATE, MASTER_HOURLY_RATE_CURRENCY_CODE, PATH_TO_QUOTATIONS } from '@/lib/constants';
import { Deliverable as OldDeliverable, Task as OldTask } from '../../../../models/OldClasses';
import { DogSize } from '@/lib/types';
import QuotationTree from '@/components/QuotationTree.cli';
import { ArrowLeftCircle, PlusCircle } from 'lucide-react';
import CRUDActionsMenu from '@/components/CRUDActionsMenu.cli';
import DeliverableFormDialog from './DeliverableFormDialog.cli';

export default async function Home({ params }: { params: any }) {
    try {
        if (!params.phaseId) return null;
        const phaseId = Number(params.phaseId) || 0;
        const wbs = await getData(Number(phaseId));
        if (!wbs) return null;
        const totalHoursValue = wbs.totalHours();
        return (
            <section className="p-3 flex flex-col gap-3 w-full">
                <DeliverableFormDialog phaseId={phaseId} />
                <QuotationTree
                    clientLogoUrl={wbs.clientLogoUrl}
                    clientId={wbs.clientId}
                    clientName={wbs.clientName}
                    projectId={wbs.projectId}
                    projectName={wbs.projectName}
                    phaseId={wbs.phaseId}
                    phaseName={wbs.phaseName}
                    phaseDescription={wbs.phaseDescription}
                    totalHoursValue={totalHoursValue}
                    deliverables={JSON.parse(JSON.stringify(
                        wbs.deliverables.map((deliverable: OldDeliverable) => {
                            const totalHours = deliverable.hours();
                            return {
                                ...deliverable,
                                totalHours,
                            }
                        })
                        ))} // FIXME: solve this class/POJO issue
                    hourlyRate={MASTER_HOURLY_RATE}
                    currency={MASTER_HOURLY_RATE_CURRENCY_CODE}
                />
            </section>
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
        phase.name + "",
        phase.description + "",
        phase.project.id + "",
        phase.project.name + "",
        phase.project.client.id + "",
        phase.project.client.name + "",
        phase.project.client.logoUrl,
        MASTER_HOURLY_RATE,
        MASTER_HOURLY_RATE_CURRENCY_CODE,
        "PH" + phase.id,
        phase.deliverables.map((d) => new OldDeliverable(
            d.id || 0,
            d.name + "",
            "...",
            d.startDate ?? undefined,
            d.elements.map((e) => new OldTask(
                e.id + "",
                e.name + "",
                e.size + "" as DogSize
            )),
            phaseId,
        )),
    );
    return wbs;
}
