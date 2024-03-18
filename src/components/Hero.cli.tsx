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
        <div className="p-10 pt-[10vh] w-full h-screen flex flex-col align-bottom gap-5">
            <div className={
                    cn(
                        "mb-10 md:mb-0 mx-auto",
                        "w-[70vw] max-w-[350px] h-[50vmin] max-h-[170px]",
                        "sm:w-[350px] sm:max-w-max sm:h-[200px] sm:max-h-max",
                        "md:w-[450px] md:h-[350px]",
                        "lg:w-[500px] lg:h-[400px]",
                        "xl:w-[600px] xl:h-[500px]"
                    )}>

            <Image className="mx-auto max-w-auto max-h-[35vh]"
                priority
                src="/Buster.svg"
                width={400} height={303}
                alt="Buster the Amazing Border Collie" />
            <Image className="mx-auto p-2 my-5"
                priority
                src="/workbuster.svg"
                width={400} height={100}
                alt="workbuster"
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
                    "mx-auto max-w-max " +
                    "hover:bg-destructive hover:animate-pulse hover:border-0 "
                    }>
                <span className="p-5 md:text-md xl:text-lg">start!</span>
            </Button>
        </div>
    );
}
