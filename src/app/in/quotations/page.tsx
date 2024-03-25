import AppTitle from '@/components/boilerplate/AppTitle.cli';
import prisma from '../../../lib/prisma';
import PhaseTitleBlock from './PhaseTitleBlock.cli';
import QuotationFormDialog from './QuotationFormDialog.cli';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { PlusCircle } from 'lucide-react';

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
      <AppTitle size="xl" title="Project-phase Quotations"
        className="mx-auto" />
      <QuotationFormDialog allProjects={projects} />
      <div className="flex flex-row flex-wrap justify-stretch gap-5">
        {phases.length === 0 && (
          <div className="p-5 w-64 border-[1px]border-muted text-muted-foreground text-xs rounded-md">
            <p>You have not entered any Project-phase quotations yet. To add one, click on the + button above!</p>
          </div>
        )}
        {phases.map((phase, index) => (
          <Link key={index} href={`quotations/${phase.id}`}>
            <div className={cn(
              "p-5 border-2 rounded-md",
              "w-[91vw] lg:w-[44vw] xl:w-[29vw]",
              "hover:cursor-pointer hover:bg-secondary hover:border-2 hover:border-none",
        )}>
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
