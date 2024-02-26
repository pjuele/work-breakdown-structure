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
import { PATH_TO_QUOTATIONS } from "@/lib/constants";

  export default function AppMenu() {
        const router = useRouter()
        return (
        <div className="flex flex-row justify-center lg:justify-between gap-3 p-5 m-auto">
            <div className="cursor-pointer my-auto" onClick={() => (router.push("/"))}><AppLogo /></div>
            <Menubar className="bg-muted ml-3 my-auto">
                <MenubarMenu>
                    <MenubarTrigger><AlignJustify className="w-5 h-5"/></MenubarTrigger>
                    <MenubarContent className="mr-5">
                        <MenubarItem onClick={() => (router.push(PATH_TO_QUOTATIONS))}>
                            Quotations <MenubarShortcut>⌘W</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem onClick={() => (alert("Clicked on Projects!"))}>
                            Projects <MenubarShortcut>⌘P</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem onClick={() => (alert("Clicked on Clients!"))}>
                            Clients <MenubarShortcut>⌘C</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem onClick={() => (alert("Clicked on Settings!"))}>
                            Settings <MenubarShortcut>⌘S</MenubarShortcut>
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem onClick={() => (alert("Clicked on Export!"))}>
                            Export <MenubarShortcut>⌘X</MenubarShortcut>
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
        </div>
    );
  }