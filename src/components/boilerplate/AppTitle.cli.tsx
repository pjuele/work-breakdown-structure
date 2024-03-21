'use client';

import { cn } from "@/lib/utils";

const AppTitle = ({ size, title, className }:
    {
        size: "sm" | "md" | "lg" | "xl" | "2xl",
        title: string,
        className?: string | undefined
    }) => {
    return (
        <div className={
            cn(
                `text-${size} font-bold`,
                "mx-auto landscape:mx-0",
                className,
            )}>
            {title}
        </div>
    )
}

export default AppTitle;
