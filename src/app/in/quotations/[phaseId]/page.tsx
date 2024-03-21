import prisma from '../../../../lib/prisma';
import { MASTER_HOURLY_RATE, MASTER_HOURLY_RATE_CURRENCY_CODE } from '@/lib/constants';
import QuotationTree from '@/app/in/quotations/[phaseId]/QuotationTree.cli';
import DeliverableFormDialog from './DeliverableFormDialog.cli';
import { Client, Project, ProjectPhase } from '@prisma/client';

export default async function Home({ params }: { params: any }) {
    try {
        if (!params.phaseId) return null;
        const phaseId = Number(params.phaseId) || 0;
        const data = await getData(Number(phaseId));
        if (!data) return null;
        const {client, project, phase, deliverables} = data;
        const totalHoursValue = 99; // .totalHours();
        return (
            <section className="p-3 flex flex-col gap-3 w-full">
                <DeliverableFormDialog phaseId={phaseId} />
                <QuotationTree
                    client={client}
                    project={project}
                    phase={phase}
                    deliverables={deliverables}
                    hourlyRate={MASTER_HOURLY_RATE}
                    currency={MASTER_HOURLY_RATE_CURRENCY_CODE}
                    // clientLogoUrl={q.client.logoUrl}
                    // clientId={q.client.id}
                    // clientName={q.client.name ?? "?"}
                    // projectId={q.project.id}
                    // projectName={q.project.name ?? "?"}
                    // phaseId={q.phase.id.toString() ?? "?"}
                    // phaseName={q.phase.name ?? "?"}
                    // phaseDescription={q.phase.description ?? "?"}
                    // totalHoursValue={totalHoursValue}
                    // deliverables={JSON.parse(JSON.stringify(
                    //     q.deliverables.map((deliverable: Deliverable) => {
                    //         const totalHours = deliverable.hours();
                    //         return {
                    //             ...deliverable,
                    //             totalHours,
                    //         }
                    //     })
                    //     ))} // FIXME: solve this class/POJO issue
                    // hourlyRate={MASTER_HOURLY_RATE}
                    // currency={MASTER_HOURLY_RATE_CURRENCY_CODE}
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
    const { project, deliverables } = phase;
    const { client } = project;
    return {
        phase: phase as ProjectPhase,
        project: project as Project,
        client: client as Client,
        deliverables,
    };
}
    // const wbs = new ProjectWBS(
    //     phase.id + "",
    //     phase.name + "",
    //     phase.description + "",
    //     phase.project.id + "",
    //     phase.project.name + "",
    //     phase.project.client.id + "",
    //     phase.project.client.name + "",
    //     phase.project.client.logoUrl,
    //     MASTER_HOURLY_RATE,
    //     MASTER_HOURLY_RATE_CURRENCY_CODE,
    //     "PH" + phase.id,
    //     phase.deliverables.map((d) => new MyDeliverable(
    //         d.id || 0,
    //         d.name + "",
    //         "...",
    //         d.startDate ?? undefined,
    //         d.elements.map((e) => new Element(
    //             e.id + "",
    //             e.name + "",
    //             e.size + "" as DogSize
    //         )),
    //         phaseId,
    //     )),
    // );
//     return q;
// }
