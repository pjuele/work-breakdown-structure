'use client';

import { ArrowLeftCircle, PlusCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import DeliverableForm from './DeliverableForm.cli';
import { useState } from 'react';
import CRUDActionsMenu from '@/components/CRUDActionsMenu.cli';
import { PATH_TO_QUOTATIONS } from '@/lib/constants';

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
              icon: <PlusCircle className="animate-pulse hover:text-destructive"/>,
              label: "new Deliverable",
              url: null,
              onClick: () => setOpen(true),
              hotKey: "d",
            }
          ]
      }/>
      <Dialog open={open} onOpenChange={setOpen} modal>
        <DialogContent>
              <DeliverableForm phaseId={phaseId} setOpen={setOpen}/>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default DeliverableFormDialog;
