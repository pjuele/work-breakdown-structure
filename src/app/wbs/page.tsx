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
    <main className="mt-10 p-20">
        <Button variant='destructive' size={'sm'} className='ml-auto mb-3'>new estimation</Button>
        <div className='flex flex-row gap-5 flex-wrap'>
          {phases.map((phase, index) => (
              <PhaseCard key={index} phase={phase}/>
          ))}
        </div>
    </main>
  );
}
