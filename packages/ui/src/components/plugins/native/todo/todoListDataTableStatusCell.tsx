import React, { useState } from 'react'
import { ToDoListStatus } from '@prisma/client';
import { statuses } from './dataTableRowActions';
import { Popover, PopoverTrigger, PopoverContent, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, Button, Command } from '@ulld/tailwind/base';
import { replaceRecursively } from '@ulld/utilities';



interface ToDoListDataTableStatusCellProps {
    value?: ToDoListStatus
    label?: string
    onValueChange: (val: ToDoListStatus) => void
    icon?: React.FC<{ className?: string }>
}


const ToDoListDataTableStatusCell = (props: ToDoListDataTableStatusCellProps) => {
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
                    {props.label ? replaceRecursively(props.label, "_", " ") : props.value}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0" align="start">
                <Command>
                    <CommandInput placeholder={"Status..."} />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup>
                            {statuses.map((o) => {
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


export default ToDoListDataTableStatusCell;
