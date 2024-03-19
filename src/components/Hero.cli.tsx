'use client';

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { PATH_TO_QUOTATIONS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import Image from "next/image";

export default function Hero() {
    const router = useRouter();
    return (
        <div className="p-10 pt-[10vh] w-full h-screen flex flex-col align-middle justify-top gap-5 landscape:gap-2">

            <div className={cn(
                "relative",
                // "border-2",
                "w-full h-auto min-h-[130px] max-w-[50vw] landscape:max-w-[25vw] mx-auto",
                // "landscape:w-auto landscape:h-full",
                // "portrait:w-full portrait:h-auto",
                "aspect-[5/4]"
            )}>
                <Image
                    priority
                    src="/Buster.svg"
                    alt="Buster, the better amongst us."
                    fill={true}
                    />
            </div>
            <div className={cn(
                "relative",
                // "border-2",
                "mx-auto",
                "w-full h-auto min-h-[30px] max-h-[10vh] landscape:max-h-[7vh] max-w-[70vw]",
                // "landscape:w-auto landscape:h-full",
                // "portrait:w-full portrait:h-auto",
                "aspect-[5/1]"
            )}>
                <Image 
                    priority
                    src="/workbuster.svg"
                    alt="workbuster"
                    fill={true}
                    />
            </div>

            {/* <div className="mx-auto flex flex-row gap-2">
                <Badge variant="outline">beautiful</Badge>
                <Badge variant="outline">graceful</Badge>
                <Badge variant="outline">efficient</Badge>
                <Badge variant="outline">fast</Badge>
                <Badge variant="outline">focused</Badge>
            </div> */}

            <Button
                onClick={() => router.push(PATH_TO_QUOTATIONS)}
                variant={"outline"}
                className={
                    "mx-auto max-w-max mt-5 " +
                    "hover:bg-destructive hover:animate-pulse hover:border-0 "
                    }>
                <span className="p-5 md:text-md xl:text-lg">start!</span>
            </Button>
        </div>
    );
}
