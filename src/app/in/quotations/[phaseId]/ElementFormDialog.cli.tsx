'use client';

import { PlusCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import ElementForm from './ElementForm.cli';
import CRUDActionsMenu from '@/components/boilerplate/CRUDActionsMenu.cli';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const ElementFormDialog = ({deliverableId}: {deliverableId: number}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <CRUDActionsMenu actions={
          [
            {
              icon: <PlusCircle className="hover:animate-pulse"/>,
              label: "new Element",
              url: null,
              onClick: () => setOpen(true),
              hotKey: "e",
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
              <ElementForm deliverableId={deliverableId} setOpen={setOpen}/>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ElementFormDialog;
