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
import { saveProject } from "./server-actions"
import { useRouter } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import IdBadge from "@/components/IdBadge.cli"
import { Client } from "@prisma/client"

const formSchema = z.object({
    id: z.string().length(3),
    name: z.string().min(1).max(255),
    color: z.string().max(50),
    clientId: z.string().length(3)
})

const ProjectForm = ({ allClients, setOpen }: {allClients: Client[], setOpen: any}) => {
    const router = useRouter();

    // 1. Define your form.
    const randomId = Math.random().toString(36).substring(2, 5);
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        // model ProjectPhase {
        //     tennantId         String          // @unique
        //     id                Int             @id @default(autoincrement())
        //     name              String?         @db.VarChar(255)
        //     color       String?         @db.Text()
        //     clientId         String
        //     project           Project         @relation(fields: [clientId], references: [id], onDelete: Cascade, onUpdate: Cascade)
        //     deliverables      Deliverable[]
        //   }
        id: randomId,
        name: "",
        color: "#555555",
        clientId: "WDP",
      },
    })
   
    // 2. Define a submit handler.
    async function onSubmit(data: z.infer<typeof formSchema>) {
        try {
            const d = {
                tennantId: "user_2cjaSqnQ5RTHCGRC3B567A1uJm0",
                id: data.id,
                name: data.name,
                color: data.color,
                clientId: data.clientId,
            };
            await saveProject(d);
            toast({
                title: `Project [${data.name}] saved!`,
                // color: (
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
                        name="id"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel/>
                                <FormControl>
                                    <Input placeholder="3-leter IDxs" {...field} />
                                </FormControl>
                                <FormDescription/>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel/>
                                <FormControl>
                                    <Input placeholder="Project name" {...field} />
                                </FormControl>
                                <FormDescription/>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="color"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel/>
                                <FormControl>
                                    <Input placeholder="Color" {...field} />
                                </FormControl>
                                <FormDescription/>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="clientId"
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
                                        {allClients
                                            .sort((a, b) => (a.name ?? "").localeCompare(b.name ?? ""))
                                            .map((c, i) =>
                                            <SelectItem key={i} value={c.id}>
                                                <div key={i} className="flex flex-row align-middle gap-2">
                                                    <IdBadge id={c.id}/>
                                                    <div>{c.name}</div>
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

export default ProjectForm;
