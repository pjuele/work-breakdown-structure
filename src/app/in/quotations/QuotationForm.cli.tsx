"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Separator } from "@/components/ui/separator"
import { saveProjectPhaseQuotation } from "./server-actions"
import { useRouter } from "next/navigation"

const formSchema = z.object({
  name: z.string().min(1).max(255),
  description: z.string().max(400),
  projectId: z.string().min(1).max(3),
})

const QuotationForm = ({ setOpen }: {setOpen: any}) => {
    const router = useRouter();

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        // model ProjectPhase {
        //     tennantId         String          // @unique
        //     id                Int             @id @default(autoincrement())
        //     name              String?         @db.VarChar(255)
        //     description       String?         @db.Text()
        //     projectId         String
        //     project           Project         @relation(fields: [projectId], references: [id], onDelete: Cascade, onUpdate: Cascade)
        //     deliverables      Deliverable[]
        //   }
        name: "",
        description: "",
        projectId: "PJD",
      },
    })
   
    // 2. Define a submit handler.
    async function onSubmit(data: z.infer<typeof formSchema>) {
        try {
            const d = {
                tennantId: "user_2cjaSqnQ5RTHCGRC3B567A1uJm0",
                // id: 0,
                name: data.name,
                description: data.description,
                projectId: data.projectId,
            };
            await saveProjectPhaseQuotation(d);
            toast({
                title: `Quotation [${data.name}] saved!`,
                // description: (
                //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                //     <code className="text-white">{JSON.stringify(d, null, 2)}</code>
                //     </pre>
                // ),
            });
            router.refresh();
            setOpen(false);
        } catch (error) {
            console.error("Error:", error);
        }
    }
     
    return (
        <div className="max-w-max bg-slate-950 p-10 m-auto">
            <Separator/><br/>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel/>
                                <FormControl>
                                    <Input placeholder="Phase name" {...field} />
                                </FormControl>
                                <FormDescription/>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel/>
                                <FormControl>
                                    <Input placeholder="Description" {...field} />
                                </FormControl>
                                <FormDescription/>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button variant={"destructive"} type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}

export default QuotationForm;
