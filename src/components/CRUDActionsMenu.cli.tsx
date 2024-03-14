'use client';

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
  import { NavigationMenu, NavigationMenuLink, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger} from "@/components/ui/navigation-menu";
import { ArrowLeftCircle, PlusCircle } from "lucide-react";

export default function CRUDActionsMenu(
    {actions}:
    {actions: {
        icon: JSX.Element,
        label: string,
        url: string | null}[]
    }
) {
    return (
        <div className="max-w-max mx-auto">
            <TooltipProvider>
                <NavigationMenu>
                    <NavigationMenuList>
                    {actions.map((action, index) => {
                        const itemContent = (
                            <div className="flex flex-row align-middle gap-2 m-2">
                                {action.icon}
                                <div className="text-sm min-w-max">{action.label}</div>
                            </div>
                        );
                        return (
                        <NavigationMenuItem key={index}>
                            <Tooltip>
                                <TooltipTrigger className="min-w-max">
                                    {action.url ?
                                        <NavigationMenuLink href={action.url}
                                            className="flex flex-row align-middle gap-2 m-2">
                                            {itemContent}
                                        </NavigationMenuLink> :
                                        <>{itemContent}</>
                                    }
                                </TooltipTrigger>
                                <TooltipContent>
                                    {action.label}
                                </TooltipContent>
                            </Tooltip>
                        </NavigationMenuItem>
                        )})}
                    </NavigationMenuList>
                </NavigationMenu>
            </TooltipProvider>
            </div>
    );
}