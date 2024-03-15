'use client';

import { PlusCircle } from 'lucide-react';
import CRUDActionsMenu from '@/components/CRUDActionsMenu.cli';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import ClientForm from './ClientForm.cli';
import { useState } from 'react';

const ClientFormDialog = () => {
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
            label: "new client",
            url: null,
          }
        ]
      }/>
      <Dialog open={open} onOpenChange={setOpen} modal>
        <DialogContent>
              <ClientForm setOpen={setOpen}/>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ClientFormDialog;
