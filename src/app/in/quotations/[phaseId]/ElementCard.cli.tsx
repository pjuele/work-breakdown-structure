'use client';

import IdBadge from "@/components/IdBadge.cli";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { dogSizeLegends } from "@/lib/constants";
import { getDogSizeToHours, getDogSizeCostAsString } from "@/lib/utils";
import { isoCurrencyCode, DogSize } from "@/types";
import { Element } from "@prisma/client";

export default function ElementCard(
    {element, hourlyRate, currency, ordinal}:
    {
        element: Element,
        hourlyRate: number,
        currency: isoCurrencyCode,
        ordinal?: number,
    }
) {
    return(
        <Card className="bg-slate-100 dark:bg-slate-900 border-0 max-w-full min-w-full">
            {/* <div className="relative top-[2.9em] left-[-5px]"><ArrowBigRight size={25} /></div> */}
            <CardHeader className="flex flex-row gap-2 align-middle">
                {/* <div className="my-auto"><DogPic dogSize={element.size} /></div> */}
                <CardTitle className="text-wrap my-auto">
                    <div className="flex flex-row gap-2 align-top justify-center">
                        {/* <ElementKeyCap /> */}
                        <div className="max-h-[3em] overflow-y-hidden flex flex-row gap-2">
                            {ordinal && <IdBadge id={ordinal.toString()} className="inline-flex max-w-min max-h-[1em]"/>}
                            {element.name.substring(0, 120) + ((element.name.length > 120) ? "..." : "")}
                        </div>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className='flex flex-row flex-wrap gap-1'>
                    <IdBadge id={dogSizeLegends.get(element.size as DogSize) + ""}/>
                    <IdBadge id={getDogSizeToHours(element.size as DogSize) + " hs"}/>
                    <IdBadge id={getDogSizeCostAsString(element.size as DogSize, hourlyRate, currency) + " "}/>
                </div>
            </CardContent>
        </Card>
    );
}
