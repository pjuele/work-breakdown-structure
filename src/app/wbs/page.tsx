import prisma from '../../lib/prisma';
import PhaseCard from './PhaseCard.cli';
import { Button } from '@/components/ui/button';
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
      return phases;
}
export default async function Home() {
    const phases = await getData();
  return (
    <main className="p-3 flex flex-col gap-5 wrap">
        <Button
          variant="secondary"
          size={"sm"}
          className="max-w-max">
            <PlusCircle />
        </Button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {phases.map((phase, index) => (
              <PhaseCard key={index} phase={phase}/>
          ))}
        </div>
    </main>
  );
}
