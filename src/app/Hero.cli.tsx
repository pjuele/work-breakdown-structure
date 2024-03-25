'use client';

import { useRouter } from "next/navigation";
import { Button } from "../components/ui/button";
import { PATH_TO_QUOTATIONS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Badge } from "../components/ui/badge";
import Image from "next/image";
import BusterLogo from "@/components/boilerplate/svgs/Buster.svg";
import Workbuster from "@/components/boilerplate/svgs/Workbuster.svg";
import { ModeToggle } from "@/components/boilerplate/mode-toggle.cli";

export default function Hero() {
    const router = useRouter();
    return (
        <div className="p-10 pt-[10vh] w-full h-screen flex flex-col align-middle justify-top gap-5 landscape:gap-2 bg-background">
            <ModeToggle className="fixed top-5 right-5"/>

            <BusterLogo
                svgClassName="drop-shadow-md w-full h-auto min-h-[130px] max-w-[50vw] landscape:max-w-[25vw] mx-auto aspect-[5/4]"
                faceClassName="fill-gray-400 dark:fill-gray-400"
                outerEyesClassName="fill-gray-400 dark:fill-gray-400"
                irisesClassName="fill-gray-600 dark:fill-foreground"
                noseClassName="fill-gray-400 dark:fill-gray-400"
                />
            <Workbuster
                svgClassName="drop-shadow-md mx-auto w-full h-auto min-h-[30px] max-h-[10vh] landscape:max-h-[7vh] max-w-[70vw] aspect-[5/1]"
                textClassName="fill-gray-400 dark:fill-gray-400"/>

            {/* <div className="mx-auto flex flex-row gap-2">
                <Badge variant="outline">beautiful</Badge>
                <Badge variant="outline">graceful</Badge>
                <Badge variant="outline">efficient</Badge>
                <Badge variant="outline">fast</Badge>
                <Badge variant="outline">focused</Badge>
            </div> */}

            <Button
                onClick={() => router.push(PATH_TO_QUOTATIONS)}
                variant={"ghost"}
                className={cn(
                    "mx-auto max-w-max mt-5 lg:mt-14",
                    "animate-in-spin hover:animate-spin hover:bg-transparent",
                )}>
                <span className="md:text-3xl xl:text-4xl font-extrabold bg-transparent drop-shadow-md dark:shadow-[0 2px 0px #dcffa6, 0 2px 5px #000]">
                    🎾
                </span>
            </Button>
        </div>
    );
}
