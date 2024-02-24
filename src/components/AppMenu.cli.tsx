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

  export default function AppMenu() {
        const router = useRouter()
        return (
        <div className="flex flex-row align-middle justify-end gap-3 p-3 ml-auto">
            <div className="cursor-pointer" onClick={() => (router.push("/"))}><AppLogo /></div>
            <Menubar className="">
                <MenubarMenu>
                    <MenubarTrigger><AlignJustify className="w-5 h-5"/></MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem onClick={() => (router.push("/wbs"))}>
                            Estimations <MenubarShortcut>⌘W</MenubarShortcut>
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