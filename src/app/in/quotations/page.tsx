import AppTitle from '@/components/AppTitle.cli';
import prisma from '../../../lib/prisma';
import PhaseTitleBlock from './PhaseTitleBlock.cli';
import QuotationFormDialog from './QuotationFormDialog.cli';
import Link from 'next/link';

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
          <Link key={index} href={`quotations/${phase.id}`}>
            <div className={
              "p-5 border-2 rounded-md h-full " +
              "hover:cursor-pointer hover:bg-secondary hover:border-2 hover:border-none"
            }>
              <PhaseTitleBlock
                phase={phase}
                client={phase.project.client}
                project={phase.project}
              />
            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}
