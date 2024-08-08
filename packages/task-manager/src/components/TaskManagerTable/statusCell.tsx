import React, { useState } from 'react'
import { Button } from '@ulld/tailwind/button';
import { Popover, PopoverContent, PopoverTrigger } from '@ulld/tailwind/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@ulld/tailwind/command';
import { taskStatuses } from './staticData';
import { ToDoListStatus } from "@ulld/utilities/toDoStatusData";



interface ToDoListDataTableStatusCellProps {
    value?: ToDoListStatus
    label?: string
    onValueChange: (val: ToDoListStatus) => void
    icon?: React.FC<{ className?: string }>
}


export const ToDoListDataTableStatusCell = (props: ToDoListDataTableStatusCellProps) => {
    const [open, setOpen] = useState(false)
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 px-2 gap-1 border-dashed grid grid-cols-[20px_1fr] place-items-center min-w-[120px]"
                    aria-expanded={open}
                >

                    {props.icon && <div className={"w-3 h-3 grid place-items-center"}><props.icon className={"w-3 h-3"} /></div>}
                    {props.label?.replaceAll("_", " ") || props.value}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0" align="start">
                <Command>
                    <CommandInput placeholder={"Status..."} />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup>
                            {taskStatuses.map((o) => {
                                return <CommandItem aria-current={props.value === o.value}
                                    value={o.value}
                                    onSelect={(val) => {
                                        props.onValueChange(val as ToDoListStatus)
                                        setOpen(false)
                                    }}
                                    key={o.value}
                                    className={"grid grid-cols-[30px_1fr]"}
                                >
                                    {o.icon && <div className={"w-3 h-3 grid place-items-center"}><o.icon /></div>}
                                    <span>
                                        {o.label}
                                    </span>
                                </CommandItem>
                            })}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}


ToDoListDataTableStatusCell.displayName = "ToDoListDataTableStatusCell"
