'use client';

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function IdBadge({ id, className }: { id: string, className?: string }) {
    return (
        <div className={cn(
            "mx-w-max",
            className,
        )}>
        <Badge
            variant={"secondary"}
            className="text-muted-foreground text-center font-mono leading-relaxed"
            >
            {id}
        </Badge>
        </div>
    );
}