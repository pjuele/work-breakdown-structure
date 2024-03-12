'use client';

import { PlusCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import ElementForm from './ElementForm.cli';
import CRUDActionsMenu from '@/components/CRUDActionsMenu.cli';
import { useState } from 'react';

const ElementFormDialog = ({deliverableId}: {deliverableId: number}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <CRUDActionsMenu actions={
          [
            {
              icon:
                <PlusCircle
                  className="animate-pulse hover:text-destructive"
                  onClick={() => setOpen(true)}
                  />,
              label: "new Element",
              url: null,
            }
          ]
      }/>
      <Dialog open={open} onOpenChange={setOpen} modal>
        <DialogContent>
              <ElementForm deliverableId={deliverableId} setOpen={setOpen}/>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ElementFormDialog;
