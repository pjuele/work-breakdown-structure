'use client';

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
  import { NavigationMenu, NavigationMenuLink, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger} from "@/components/ui/navigation-menu";
import { ArrowLeftCircle, PlusCircle } from "lucide-react";

export default function Menu() {
    return (
        <div className="max-w-max mx-auto">
        <TooltipProvider>
        <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem className="mx-5">
                <Tooltip>
                    <TooltipTrigger>
                        <NavigationMenuLink href='/wbs'>
                            <ArrowLeftCircle/>
                        </NavigationMenuLink>
                    </TooltipTrigger>
                    <TooltipContent>
                            back to phases
                    </TooltipContent>
                </Tooltip>
            </NavigationMenuItem>
            <NavigationMenuItem className="mx-5">
            <Tooltip>
                    <TooltipTrigger><PlusCircle/></TooltipTrigger>
                    <TooltipContent>
                        <NavigationMenuLink href='/wbs'>
                            add new deliverable
                        </NavigationMenuLink>
                    </TooltipContent>
                </Tooltip>
            </NavigationMenuItem>
        </NavigationMenuList>
        </NavigationMenu>
        </TooltipProvider>
        </div>
    );
}