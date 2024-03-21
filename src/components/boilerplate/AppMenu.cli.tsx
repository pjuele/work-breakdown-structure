'use client';

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import { AlignJustify } from "lucide-react";
import AppLogo from "./AppLogo.cli";
import { useRouter } from 'next/navigation'
import { PATH_TO_CLIENTS, PATH_TO_PROJECTS, PATH_TO_QUOTATIONS } from "@/lib/constants";
import { ModeToggle } from "./mode-toggle.cli";
import { useEffect } from "react";
import { toast } from "../ui/use-toast";
import KeyCap from "../KeyCap.cli";
import { cn } from "@/lib/utils";

const ACTION_FOR_QUOTATIONS = 0;
const ACTION_FOR_PROJECTS = 1;
const ACTION_FOR_CLIENTS = 2;
const ACTION_FOR_SETTINGS = 3;
const ACTION_FOR_EXPORT = 4;

export default function AppMenu() {
    const router = useRouter();

    const actions = [
        () => (router.push(PATH_TO_QUOTATIONS)),
        () => (router.push(PATH_TO_PROJECTS)),
        () => (router.push(PATH_TO_CLIENTS)),
        () => (alert("Clicked on Settings!")),
        () => (alert("Clicked on Export!"))
    ];

    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === "q" && e.ctrlKey) {
                toast({ title: "⌨ Quotations page keyboard shortcut trigerred!", variant: "default" });
                actions[ACTION_FOR_QUOTATIONS]();
            }
            if (e.key === "p" && e.ctrlKey) { // && e.ctrlKey) {
                toast({ title: "⌨ Project list keyboard shortcut trigerred!", variant: "default" });
                actions[ACTION_FOR_PROJECTS]();
            }
            if (e.key === "c" && e.ctrlKey) {
                toast({ title: "⌨ Client list keyboard shortcut trigerred!", variant: "default" });
                actions[ACTION_FOR_CLIENTS]();
            }
            if (e.key === "s" && e.ctrlKey) {
                toast({ title: "⌨ Settings keyboard shortcut trigerred!", variant: "default" });
                actions[ACTION_FOR_SETTINGS]();
            }
            if (e.key === "x" && e.ctrlKey) {
                toast({ title: "⌨ Export keyboard shortcut trigerred!", variant: "default" });
                actions[ACTION_FOR_EXPORT]();
            }
        }
    
        document.addEventListener('keydown', handleKeyDown);
    
        // Don't forget to clean up
        return function cleanup() {
          document.removeEventListener('keydown', handleKeyDown);
        }
      });

    // const router = useRouter()
        return (
        <div className="flex flex-row align-middle justify-between m-3 gap-3">
            <div className="cursor-pointer my-auto" onClick={() => (router.push("/"))}><AppLogo /></div>
            <Menubar className={
                cn(
                    "p-1",
                    "flex flex-col md:flex-row align-middle justify-center gap-0"
                )}>
                <MenubarMenu>
                    <ModeToggle className="hidden md:inline-flex"/>
                    <MenubarTrigger className="m-auto cursor-pointer hover:animate-pulse hover:border-0">
                        <AlignJustify className="w-5 h-5"/>
                    </MenubarTrigger>
                    <MenubarContent className="mr-5">
                        <MenubarItem>
                            <ModeToggle className="inline-flex md:hidden"/>
                        </MenubarItem>
                        <MenubarSeparator className="inline-flex md:hidden" />
                        <MenubarItem onClick={actions[ACTION_FOR_QUOTATIONS]}>
                            Quotations <MenubarShortcut><KeyCap keys={["Ctrl", "q"]} /></MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem onClick={actions[ACTION_FOR_PROJECTS]}>
                            Projects <MenubarShortcut><KeyCap keys={["Ctrl", "p"]} /></MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem onClick={actions[ACTION_FOR_CLIENTS]}>
                            Clients <MenubarShortcut><KeyCap keys={["Ctrl", "c"]} /></MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem onClick={actions[ACTION_FOR_SETTINGS]}>
                            Settings <MenubarShortcut><KeyCap keys={["Ctrl", "s"]} /></MenubarShortcut>
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem onClick={actions[ACTION_FOR_EXPORT]}>
                            Export <MenubarShortcut><KeyCap keys={["Ctrl", "x"]} /></MenubarShortcut>
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
        </div>
    );
  }
