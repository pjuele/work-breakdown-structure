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
        url: string}[]
    }
) {
    return (
        <div className="max-w-max mx-auto">
            <TooltipProvider>
                <NavigationMenu>
                    <NavigationMenuList>
                    {actions.map((action, index) => (
                        <NavigationMenuItem key={index}>
                            <Tooltip>
                                <TooltipTrigger>
                                    <NavigationMenuLink href={action.url}
                                        className="flex flex-row align-middle gap-2 m-2">
                                        {action.icon}
                                        <div className="text-sm">{action.label}</div>
                                    </NavigationMenuLink>
                                </TooltipTrigger>
                                <TooltipContent>
                                    {action.label}
                                </TooltipContent>
                            </Tooltip>
                        </NavigationMenuItem>
                    ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </TooltipProvider>
            </div>
    );
}