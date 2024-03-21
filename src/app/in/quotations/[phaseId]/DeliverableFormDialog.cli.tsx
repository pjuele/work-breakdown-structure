'use client';

import { ArrowLeftCircle, PlusCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import DeliverableForm from './DeliverableForm.cli';
import { useState } from 'react';
import CRUDActionsMenu from '@/components/boilerplate/CRUDActionsMenu.cli';
import { PATH_TO_QUOTATIONS } from '@/lib/constants';
import { cn } from '@/lib/utils';

const DeliverableFormDialog = ({phaseId}: {phaseId: number}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <CRUDActionsMenu actions={
          [
            {
              icon: <ArrowLeftCircle/>,
              label: "back to list",
              url: PATH_TO_QUOTATIONS,
            },
            {
              icon: <PlusCircle className="hover:animate-pulse"/>,
              label: "new Deliverable",
              url: null,
              onClick: () => setOpen(true),
              hotKey: "d",
            }
          ]
      }/>
      <Dialog open={open} onOpenChange={setOpen} modal>
        <DialogContent className={
          cn(
            "p-0 md:p-5",
            "w-full h-full max-w-screen max-h-screen",
            "md:w-auto md:h-auto md:max-w-auto md:max-h-auto",
          )}>
              <DeliverableForm phaseId={phaseId} setOpen={setOpen}/>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default DeliverableFormDialog;
