'use client';

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from 'next/navigation'
import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function PhaseCard({ phase }: { phase: any }) {
    const router = useRouter();
    return (
        <Card
            onClick={(e) => {router.push(`/wbs/${phase.id}`)}}
            key={phase.id}
            className={
                "w-full md:w-auto " +
                "hover:cursor-pointer hover:bg-secondary hover:border-2 hover:border-destructive"
                }>
            <CardHeader>
                <CardTitle>{phase.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>
                    <div className='flex flex-row gap-2 overflow-clip'>
                        <AspectRatio ratio={16 / 9}>
                            <Image
                                className='rounded-lg object-cover'
                                src={phase.project.client.logoUrl}
                                width={50}
                                height={50}
                                alt={`${phase.project.client.name} logo`} />
                        </AspectRatio>
                        <div>
                            <p><Badge>{phase.project.id}</Badge> {phase.project.name}</p>
                            <p><Badge>{phase.project.client.id}</Badge> {phase.project.client.name}</p>
                        </div>
                    </div>
                </CardDescription>
            </CardContent>
        </Card>
    );
}