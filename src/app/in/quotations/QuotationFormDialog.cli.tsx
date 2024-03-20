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
import { cn } from '@/lib/utils';

const QuotationFormDialog = (
  {allProjects, toolbarClassName}:
  {allProjects: Project[], toolbarClassName?: string | undefined}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <CRUDActionsMenu actions={
        [
          {
            icon: <PlusCircle className="hover:animate-pulse"/>,
            label: "new Phase quotation",
            url: null,
            onClick: (() => setOpen(true)),
            hotKey: "+",
          }
        ]
      } toolbarClassName={toolbarClassName}/>
      <Dialog open={open} onOpenChange={setOpen} modal>
        <DialogContent className={
          cn(
            "p-0 md:p-5",
            "w-full h-full max-w-screen max-h-screen",
            "md:w-auto md:h-auto md:max-w-auto md:max-h-auto",
          )}>
              <QuotationForm setOpen={setOpen} allProjects={allProjects}/>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default QuotationFormDialog;
