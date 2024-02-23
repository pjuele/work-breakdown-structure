'use client';

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import Image from "next/image";

export default function PhaseCard({ phase }: { phase: any }) {
    return (
        <Card
        onClick={(e) => {alert(phase.name)}}
        key={phase.id}
        className='hover:cursor-pointer hover:bg-secondary hover:border-2 hover:border-destructive'>
        <CardHeader>
            <CardTitle>{phase.name}</CardTitle>
        </CardHeader>
        <CardContent>
        <CardDescription>
            <div className='flex flex-row gap-2'>
                <Image
                    className='rounded-lg'
                    src={phase.project.client.logoUrl}
                    width={50}
                    height={50}
                    alt={`${phase.project.client.name} logo`} />
                {/* <Avatar >
                    <AvatarImage src={phase.project.client.logoUrl} />
                    <AvatarFallback>{phase.project.id}</AvatarFallback>
                </Avatar> */}
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