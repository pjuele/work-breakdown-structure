import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import {ReactNode, useState} from "react"
import { SelectSingleEventHandler } from "react-day-picker"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"

export function DatePicker(
    { selected, onSelect }: {
        selected: Date | undefined,
        onSelect?: any,
    }
) {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  
    const handleOnSelect: SelectSingleEventHandler = (date) => {
      onSelect?.(date)
      setIsPopoverOpen(false)
    }
  
    return (
      <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
        <PopoverTrigger asChild>
          <Button
            variant={'outline'}
            className={cn('w-[240px] justify-start text-left font-normal', !selected && 'text-muted-foreground')}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {selected ? format(selected, 'PPP') : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar mode="single" selected={selected} onSelect={handleOnSelect} initialFocus />
        </PopoverContent>
      </Popover>
    )
  }