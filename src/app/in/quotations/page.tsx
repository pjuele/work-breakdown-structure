import AppTitle from '@/components/AppTitle.cli';
import prisma from '../../../lib/prisma';
import PhaseCard from './PhaseCard.cli';
import QuotationFormDialog from './QutationFormDialog.cli';

async function getData() {
    const phases = await prisma.projectPhase.findMany({
        // where: { published: true },
        include: {
          project: {
            include: { client: true },
          },
        },
      });
    const projects = await prisma.project.findMany();
    return { phases, projects };
}
export default async function Home() {
    const { phases, projects } = await getData();
  return (
    <section className="p-3 flex flex-col gap-5 wrap">
      <div className="flex flex-row gap-5 align-top justify-center mx-auto">
        <AppTitle size="lg" title="Project-phase Quotations" />
        <QuotationFormDialog allProjects={projects}/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {phases.map((phase, index) => (
            <PhaseCard key={index} phase={phase}/>
        ))}
      </div>

    </section>
  );
}
