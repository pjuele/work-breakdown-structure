'use client';

import { PlusCircle } from 'lucide-react';
import CRUDActionsMenu from '@/components/CRUDActionsMenu.cli';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import QuotationForm from './QuotationForm.cli';
import { useState } from 'react';
import { Project } from '@prisma/client';

const QuotationFormDialog = ({allProjects}: {allProjects: Project[]}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <CRUDActionsMenu actions={
        [
          {
            icon: <PlusCircle className="animate-pulse hover:text-destructive"/>,
            label: "new Phase quotation",
            url: null,
            onClick: (() => setOpen(true)),
            hotKey: "+",
          }
        ]
      }/>
      <Dialog open={open} onOpenChange={setOpen} modal>
        <DialogContent>
              <QuotationForm setOpen={setOpen} allProjects={allProjects}/>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default QuotationFormDialog;
