import prisma from '../../../lib/prisma';
import PhaseCard from './PhaseCard.cli';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { NavigationMenu, NavigationMenuLink } from '@/components/ui/navigation-menu';
import { PlusCircle } from 'lucide-react';
import CRUDActionsMenu from '@/components/CRUDActionsMenu.cli';
import { PATH_TO_QUOTATIONS } from '@/lib/constants';

async function getData() {
    const phases = await prisma.projectPhase.findMany({
        // where: { published: true },
        include: {
          project: {
            include: { client: true },
          },
        },
      });
      return phases;
}
export default async function Home() {
    const phases = await getData();
  return (
    <section className="p-3 flex flex-col gap-5 wrap">
      <CRUDActionsMenu actions={
        [
          {
            icon: <PlusCircle className="animate-pulse hover:text-destructive"/>,
            label: "new quotation",
            url: PATH_TO_QUOTATIONS + "/new"
          }
        ]
      }/>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {phases.map((phase, index) => (
            <PhaseCard key={index} phase={phase}/>
        ))}
      </div>

    </section>
  );
}
