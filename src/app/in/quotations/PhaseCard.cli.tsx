'use client';

import ProjectClientLabels from "@/components/ProjectClientLabels.cli";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PATH_TO_QUOTATIONS } from "@/lib/constants";
import { useRouter } from 'next/navigation'

export default function PhaseCard({ phase }: { phase: any }) {
    const router = useRouter();
    return (
        <Card
            onClick={(e) => {router.push(`${PATH_TO_QUOTATIONS}/${phase.id}`)}}
            key={phase.id}
            className={
                "w-full md:w-auto " +
                "hover:cursor-pointer hover:bg-secondary hover:border-2 hover:border-destructive"
                }>
            <CardHeader>
                <CardTitle>{phase.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <ProjectClientLabels phase={phase} />
            </CardContent>
        </Card>
    );
}