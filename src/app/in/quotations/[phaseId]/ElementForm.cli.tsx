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
import { saveElement } from "./server-actions"
import { useRouter } from "next/navigation"
import { Package } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(1).max(255),
  size: z.enum(["xs", "s", "m", "l", "xl"]),
})

export default function ElementForm({ deliverableId, setOpen }: {deliverableId: number, setOpen: any}) {
    const router = useRouter();

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: "",
        size: "m",
      },
    })
   
    // const deliverableId = Number(params.deliverableId);
    if (!deliverableId) return <p>Could not find a project phase with id [{deliverableId}]</p>;

    // 2. Define a submit handler.
    async function onSubmit(data: z.infer<typeof formSchema>) {
        try {
            console.log("🍌🍌🍌🍌🍌deliverableId", deliverableId);
            const e = {
                tennantId: "user_2cjaSqnQ5RTHCGRC3B567A1uJm0",
                deliverableId,
                name: data.name,
                size: data.size,
            };
            await saveElement(e);
            toast({
                title: `✅ Element \"${data.name}\" saved!`,
            });
            router.refresh();
            setOpen(false);
        } catch (error) {
            console.error("Error:", error);
            toast({
                title: "Error",
                description: "Could not save Element",
                variant: "destructive",
            })
        }
    }
     
    return (
        <div className="max-w-max bg-slate-950 p-10 m-auto">
            <h2><Package className="inline mr-2"/> New Element</h2>
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
                                <Input placeholder="Element name" {...field} />
                            </FormControl>
                            <FormDescription/>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="size"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel/>
                            <FormControl>
                                <Input placeholder="xs / s / m / l / xl?" {...field} />
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
