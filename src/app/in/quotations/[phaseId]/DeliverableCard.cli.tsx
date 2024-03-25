'use client';

import IdBadge from "@/components/IdBadge.cli";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { formatCurrencyNumber } from "@/lib/utils";
import { isoCurrencyCode } from "@/types";
import DeliverableTree from "@/types/DeliverableTree.type";
import { Package } from "lucide-react";
import { useState, useEffect } from "react";
import deliverableTotalHours from "./deliverableTotalHours.function";
import AppTitle from "@/components/boilerplate/AppTitle.cli";

export default function DeliverableCard(
    {deliverable, index, hourlyRate, currency}:
    {
        deliverable: DeliverableTree,
        index: number,
        hourlyRate: number,
        currency: isoCurrencyCode,
    }
) {
    const [finishedRendering, setFinishedRendering] = useState(false);

    useEffect(() => {
        setFinishedRendering(true);
    }, []);

    if (!finishedRendering) return null;

    const totalHours = deliverableTotalHours(deliverable);

    return (
        <Card key={index}
            className="p-5 bg-slate-200 dark:bg-slate-700 flex flex-row gap-5 align-top">
            <div id="icon" className="max-w-max">
                <Package size={40} className="inline-flex hover:animate-spin" />
            </div>
            <div id="content" className="max-w-max m-0 p-0 flex flex-col gap-2">
                <AppTitle size="md" title={deliverable.name} />
                {deliverable.startDate &&
                    <small>Start date: {new Date(deliverable.startDate).toLocaleDateString()}</small>
                }
                <div className="flex flex-row gap-1">
                    <IdBadge id={`${totalHours} hs`} />
                    <IdBadge id={formatCurrencyNumber(totalHours * hourlyRate, currency) + ""}/>
                </div>
            </div>
        </Card>
    );
}
