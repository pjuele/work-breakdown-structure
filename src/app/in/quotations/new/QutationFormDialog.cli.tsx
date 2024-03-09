'use client';

import { PlusCircle } from 'lucide-react';
import CRUDActionsMenu from '@/components/CRUDActionsMenu.cli';

import {
  Dialog,
  DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
// import { Button } from '@/components/ui/button';
import QuotationForm from './QuotationForm.cli';

const QutationFormDialog = () => {
    return (
        <Dialog>
        <DialogTrigger>
          <PlusCircle className="animate-pulse hover:text-destructive"/>
          {/* <CRUDActionsMenu actions={
            [
              {
                icon: <PlusCircle className="animate-pulse hover:text-destructive"/>,
                label: "new quotation",
                url: null,
              }
            ]
          }/> */}
        </DialogTrigger>
        <DialogContent>
              <QuotationForm/>
        </DialogContent>
      </Dialog>
    )
}

export default QutationFormDialog;
