'use client';

import { PlusCircle } from 'lucide-react';
import CRUDActionsMenu from '@/components/boilerplate/CRUDActionsMenu.cli';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import ProjectForm from './ProjectForm.cli';
import { useState } from 'react';
import { Client } from '@prisma/client';

const ProjectFormDialog = ({allClients}: {allClients: Client[]}) => {
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
            label: "new project",
            url: null,
          }
        ]
      }/>
      <Dialog open={open} onOpenChange={setOpen} modal>
        <DialogContent>
              <ProjectForm setOpen={setOpen} allClients={allClients}/>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ProjectFormDialog;
