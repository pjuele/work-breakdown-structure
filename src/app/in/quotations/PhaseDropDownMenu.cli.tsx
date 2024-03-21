'use client';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { AlignJustify, Pencil, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation"
import { deleteProjectPhaseQuotation } from "./server-actions";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const PhaseDropDownMenu = ({ phaseId }: { phaseId: number }) => {
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const router = useRouter();

    function confirmDelete(e: any, phaseId: number) {
        e.stopPropagation();
        e.preventDefault();
        setDeleteDialogOpen(true);
    }

    async function handleEditClick(phaseId: number) {
        console.log("edit", phaseId)
    }
    
    async function handleDeleteClick(e: any, phaseId: number) {
        try {
            e.preventDefault();
            setDeleteDialogOpen(false);
            await deleteProjectPhaseQuotation(phaseId);
            toast({
                title: `Quotation [${phaseId}] deleted!`,
            });
            router.refresh();
        } catch (error) {
            toast({
                title: "Error:",
                description: "Could not delete quotation\n" + (error as Error).message,
            });
        }
    }
    
    return (
        <div className="float-right">
            <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                    <DialogTitle>Delete quotation [{phaseId}]?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete the quotation and all contained Deliverables and Elemets.
                    </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button variant={"destructive"} onClick={(e) => {handleDeleteClick(e, phaseId)}}>Delete Quotation</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            <DropdownMenu>
                <DropdownMenuTrigger><AlignJustify className="text-muted-foreground h-6 w-6" /></DropdownMenuTrigger>
                <DropdownMenuContent className="bg-secondary">
                    <DropdownMenuItem onClick={() => {handleEditClick(phaseId)}}>
                        <Pencil className="mr-2 h-4 w-4"/>Edit quotation
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={(e) => {confirmDelete(e, phaseId)}}>
                        <Trash2 className="mr-2 h-4 w-4"/>Delete quotation
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}

export default PhaseDropDownMenu