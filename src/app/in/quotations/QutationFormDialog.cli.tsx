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

const QutationFormDialog = () => {
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
            label: "new Phase quotation",
            url: null,
          }
        ]
      }/>
      <Dialog open={open} onOpenChange={setOpen} modal>
        <DialogContent>
              <QuotationForm setOpen={setOpen}/>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default QutationFormDialog;
