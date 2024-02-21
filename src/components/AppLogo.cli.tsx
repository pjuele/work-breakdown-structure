'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function AppLogo({isHero = false, className}: {isHero?: boolean, className?: string}) {
    return(
        <div
            className={cn(
                className,
                "flex flex-row gap-2",
                isHero ?
                    "max-h-[50vw]" :
                    "max-h-[10vw]"
            )}>
            <Image
                    className='w-auto h-auto cursor-pointer drop-shadow-lg'
                    src="/border-collie.png"
                    alt="Work Buster"
                    width={isHero ? 200 : 30}
                    height={isHero ? 200 : 30}
                    priority />
                <div>
                    <h1 className={isHero ? "text-5xl" : "text-2xl"}>workBuster</h1>
                    <p hidden={!isHero}>Easy WBS tool for your agile projects.</p>
                </div>
        </div>
    );
}