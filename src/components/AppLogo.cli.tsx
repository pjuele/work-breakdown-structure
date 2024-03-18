'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function AppLogo({className}: {className?: string}) {
    // FIXME: tidy up svg logo.
    return(
        <div
            className={cn(
                className,
                "flex flex-row gap-2",
                // "max-h-[10vw]"
            )}>
            {/* https://looka.com/editor/173538704*/}
            <Image className="mx-auto my-auto max-w-auto h-[40px] w-[40px]"
                priority
                src="/Buster.svg"
                width={40} height={40}
                alt="Buster the Amazing Border Collie" />
            <Image className="mx-auto my-auto w-[170px]"
                priority
                src="/workbuster.svg"
                width={120} height={30}
                alt="workbuster"
                />
        </div>
    );
}