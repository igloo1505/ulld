import React, { useState } from 'react'
import { ToDoListStatus } from '@ulld/database/internalDatabaseTypes';
import { statuses } from './dataTableRowActions';
import { Popover, PopoverTrigger, PopoverContent } from '@ulld/tailwind/popover';
import { CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, Command } from '@ulld/tailwind/command';
import { Button} from '@ulld/tailwind/button';
import { replaceRecursively } from "@ulld/utilities/utils/general";



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
