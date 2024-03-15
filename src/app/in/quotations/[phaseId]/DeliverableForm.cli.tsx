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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon, Package } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Separator } from "@/components/ui/separator"
import { saveDeliverable } from "./server-actions"
// import { redirect, useRouter } from 'next/navigation'
import { useRouter } from "next/navigation"
import { DatePicker } from "@/components/DatePicker.cli"

const formSchema = z.object({
  name: z.string().min(1).max(255),
  startDate: z.date(),
})

export default function DeliverableForm({ phaseId, setOpen }: {phaseId: number, setOpen: any}) {
    const router = useRouter();

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: "",
        startDate: new Date(),
      },
    })
   
    // const phaseId = Number(params.phaseId);
    if (!phaseId) return <p>Could not find a project phase with id [{phaseId}]</p>;

    // 2. Define a submit handler.
    async function onSubmit(data: z.infer<typeof formSchema>) {
        try {
            const d = {
                tennantId: "user_2cjaSqnQ5RTHCGRC3B567A1uJm0",
                // id: 0,
                phaseId,
                name: data.name,
                startDate: data.startDate,
            };
            await saveDeliverable(d);
            toast({
                title: `✅ Deliverable \"${data.name}\" saved!`,
            });
            router.refresh();
            setOpen(false);
        } catch (error) {
            console.error("Error:", error);
            toast({
                title: "Error",
                description: "Could not save deliverable",
                variant: "destructive",
            })
        }
    }
     
    return (
        <div className="max-w-max bg-slate-950 p-10 m-auto">
            <h2><Package className="inline mr-2"/> New Deliverable</h2>
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
                                <Input placeholder="Deliverable name" {...field} />
                            </FormControl>
                            <FormDescription/>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="startDate"
                    render={({ field }) => (
                    <FormItem className="flex flex-col">
                        <FormLabel>Start date</FormLabel>
                        <FormControl>
                        <DatePicker
                            selected={field.value}
                            onSelect={(value: string) => {
                            field.onChange(value)
                            }}
                        />
                        </FormControl>
                        <FormMessage />
                    </FormItem>

                        // <FormItem className="flex flex-col">
                        // <FormLabel>Start date</FormLabel>
                        // <Popover>
                        //     <PopoverTrigger asChild>
                        //     <FormControl>
                        //         <Button
                        //         variant={"outline"}
                        //         className={cn(
                        //             "w-[240px] pl-3 text-left font-normal",
                        //             !field.value && "text-muted-foreground"
                        //         )}
                        //         >
                        //         {field.value ? (
                        //             format(field.value, "PPP")
                        //         ) : (
                        //             <span>Pick a date</span>
                        //         )}
                        //         <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        //         </Button>
                        //     </FormControl>
                        //     </PopoverTrigger>
                        //     <PopoverContent className="w-auto p-0" align="start">
                        //     <Calendar
                        //         mode="single"
                        //         selected={field.value}
                        //         onSelect={field.onChange}
                        //         disabled={(date) =>
                        //         date > new Date() || date < new Date("1900-01-01")
                        //         }
                        //         initialFocus
                        //     />
                        //     </PopoverContent>
                        // </Popover>
                        // <FormDescription/>
                        // <FormMessage />
                        // </FormItem>
                    )}
                    />
                <Button variant={"destructive"} type="submit">Submit</Button>
            </form>
        </Form>
        </div>
    )
}
