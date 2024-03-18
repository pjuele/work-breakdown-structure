'use client';

import { Badge } from "@/components/ui/badge";

export default function IdBadge({ id }: { id: string }) {
    return (
        <div className="mx-w-max">
        <Badge
            variant={"secondary"}
            className="text-muted-foreground text-center font-mono leading-relaxed"
            >
            {id}
        </Badge>
        </div>
    );
}