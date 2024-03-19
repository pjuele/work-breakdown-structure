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
import { SelectContent, SelectTrigger, SelectValue, Select, SelectItem }
    from "@/components/ui/select"
import IdBadge from "@/components/IdBadge.cli"
import { Project } from "@prisma/client"
import { SelectLabel } from "@radix-ui/react-select"
import { DollarSign } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(1).max(255),
  description: z.string().max(400),
  projectId: z.string().min(1).max(3),
})

const QuotationForm = ({ setOpen, allProjects }: {setOpen: any, allProjects: Project[]}) => {
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
        <div className="max-w-max bg-slate-950 p-0 m-auto md:m-5 lg:m-10">
            <h2>
                <div className="flex flex-row gap-2 mb-5 md:mb-10">
                    <DollarSign className="inline border-2 rounded-md p-1"/>
                    <div>New Project-phase Quotation</div>
                </div>
            </h2>
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
                    <FormField
                        control={form.control}
                        name="projectId"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel/>
                                <FormControl>
                                <div className="flex flex-col gap-2">
                                    <Select value={field.value} onValueChange={field.onChange}>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Dog size" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {allProjects
                                            .sort((a, b) => (a.name ?? "").localeCompare(b.name ?? ""))
                                            .map((p, i) =>
                                            <SelectItem key={i} value={p.id}>
                                                <div key={i} className="flex flex-row align-middle gap-2">
                                                    <IdBadge id={p.id}/>
                                                    <div>{p.name}</div>
                                                </div>
                                            </SelectItem>
                                        )}
                                    </SelectContent>
                                    </Select>
                                </div>
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
