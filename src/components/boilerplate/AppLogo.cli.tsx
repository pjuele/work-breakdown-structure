'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import BusterLogo from './svgs/Buster.svg';
import Workbuster from './svgs/Workbuster.svg';

export default function AppLogo({className}: {className?: string}) {
    return(
        <div
            className={cn(
                className,
                "flex flex-row gap-0",
            )}>
            <BusterLogo
                svgClassName="drop-shadow-md mx-auto my-auto max-w-auto h-[40px] w-[40px]"
                faceClassName="fill-gray-300 dark:fill-gray-400 stroke-gray-400 dark:stroke-gray-500"
                strokeWidth={1} />
            <Workbuster
                svgClassName="drop-shadow-md mx-auto my-auto w-[160px] h-auto"
                textClassName='fill-gray-300 dark:fill-gray-400 stroke-gray-400 dark:stroke-gray-600 stroke-1.5 dark:stroke-1'
                />
        </div>
    );
}