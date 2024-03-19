'use client';

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
  import { NavigationMenu, NavigationMenuLink, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger} from "@/components/ui/navigation-menu";
import { ArrowLeftCircle, PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "./ui/use-toast";
import { Button } from "./ui/button";
import KeyCap from "./KeyCap.cli";
import { cn } from "@/lib/utils";

export default function CRUDActionsMenu(
    {actions, toolbarClassName}:
    {
        actions: {
            icon: JSX.Element,
            label: string,
            url: string | null,
            onClick?: () => void,
            // setOpen?: (open: boolean) => void,
            hotKey?: string,
        }[],
        toolbarClassName?: string | undefined
    }
) {
    const [showHotkeys, setShowHotkeys] = useState(false);
    const router = useRouter();
    const hotKeys = actions.map(a => a.hotKey);

    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === "Control") {
                setShowHotkeys(true);
            }
            if (!e.ctrlKey) return;
            if (!hotKeys.includes(e.key)) {
                // setShowHotkeys(false);
                return;
            }
            toast({ title: `⌨ keyboard shortcut trigerred! ${e.key}`, variant: "default" });
            const actionOnClick = actions[hotKeys.indexOf(e.key)].onClick;
            if (actionOnClick) {
                toast({ title: `⌨ triggering onClick event!"`, variant: "default" });
                // e.stopPropagation()
                e.preventDefault();
                actionOnClick();
            } else {
                const actionUrl = actions[hotKeys.indexOf(e.key)].url;
                if (actionUrl) {
                    toast({ title: `⌨ navigating to "${actionUrl}"`, variant: "default" });
                    router.push(actionUrl);
                }
            }
        }

        function handleKeyUp(e: KeyboardEvent) {
            if (e.key === "Control") {
                setShowHotkeys(false);
            }
        }
    
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
    
        // Don't forget to clean up
        return function cleanup() {
          document.removeEventListener('keydown', handleKeyDown);
          document.removeEventListener('keyup', handleKeyUp);
        }
      }, [hotKeys, showHotkeys, actions, router]);

    return (
        <div className={
            cn(
                "max-w-max",
                "mx-auto landscape:mx-[-0.5rem]", // FIXME: figure out who's adding a margin in shadcn and remove this hack
                "m-y-auto",
                // "bg-secondary",
                toolbarClassName,
            )}>
            <TooltipProvider>
                <NavigationMenu>
                    <NavigationMenuList>
                    {actions.map((action, index) => {
                        const itemContent = (
                            <div className="flex flex-row align-middle gap-2">
                                {action.icon}
                                <div className="text-sm min-w-max">{action.label}</div>
                                {showHotkeys && hotKeys[index] && <KeyCap keys={[hotKeys[index] ?? "?"]}/>}
                            </div>
                        );
                        return (
                        <NavigationMenuItem key={index}>
                            <Button
                                className="max-w-max"
                                variant={'ghost'}
                                onClick={() => {
                                    if (action.onClick) {
                                        action.onClick();
                                    };
                                    if (action.url) {
                                        router.push(action.url);
                                    };
                                }}
                                >
                                {itemContent}
                            </Button>
                            {/* <Tooltip>
                                <TooltipTrigger className="min-w-max">
                                    {action.url ?
                                        <NavigationMenuLink href={action.url}
                                            className="flex flex-row align-middle gap-2 m-2">
                                            {itemContent}
                                        </NavigationMenuLink> :
                                        <div onClick={() => 
                                            action.onClick ?
                                                action.onClick() :
                                                null
                                        }>
                                            {itemContent}
                                        </div>
                                    }
                                </TooltipTrigger>
                                <TooltipContent>
                                    {action.label}
                                </TooltipContent>
                            </Tooltip> */}
                        </NavigationMenuItem>
                        )})}
                    </NavigationMenuList>
                </NavigationMenu>
            </TooltipProvider>
            </div>
    );
}