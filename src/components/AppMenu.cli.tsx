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

  export default function AppMenu() {
    return (
        <div className="flex flex-row gap-3 p-3 mx-auto">
            <AppLogo />
            <Menubar className="">
                <MenubarMenu>
                    <MenubarTrigger><AlignJustify className="w-5 h-5"/></MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem onClick={() => (alert("Clicked on Estimations!"))}>
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