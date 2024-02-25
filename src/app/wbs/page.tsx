import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import prisma from '../../lib/prisma';
import { Badge } from '@/components/ui/badge';
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import PhaseCard from './PhaseCard.cli';
import { Button } from '@/components/ui/button';

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
    <main className="p-3 flex flex-col gap-5">
        <Button
          variant="secondary"
          size={"sm"}
          className="">
            new estimation
        </Button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {phases.map((phase, index) => (
              <PhaseCard key={index} phase={phase}/>
          ))}
        </div>
    </main>
  );
}
