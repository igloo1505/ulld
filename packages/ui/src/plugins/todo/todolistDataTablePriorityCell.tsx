"use client"
import React, { useState } from 'react'
import { Button } from '#/components/shad/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '#/components/shad/ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '#/components/shad/ui/command';
import { ArrowUpIcon } from 'lucide-react';
import { priorityStrings } from './ToDoListPrioritySelect';


interface ToDoListDataTablePriorityCellProps<T extends number | string> {
    value?: T
    label?: string
    onValueChange: (val: number) => void
}

const ToDoListDataTablePriorityCell = <T extends number | string>({ value: _value, label, onValueChange }: ToDoListDataTablePriorityCellProps<T>) => {
    const value: number = typeof _value === "string" ? parseInt(_value) : _value as number
    const [open, setOpen] = useState(false)
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 px-2 gap-1 border-dashed grid grid-cols-[20px_1fr] place-items-center min-w-[60px]"
                    aria-expanded={open}
                >

                    <ArrowUpIcon
                        className="mr-2 h-4 w-4 text-muted-foreground"
                        style={{
                            transform: `rotate(${180 - (value / 10 * 180)}deg)`
                        }}
                    />
                    {label || value}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0" align="start">
                <Command>
                    <CommandInput placeholder={"Status..."} />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup>
                            {priorityStrings.map((o) => {
                                return <CommandItem aria-current={`${value}` === o}
                                    value={o}
                                    onSelect={(val) => {
                                        onValueChange(typeof val === "string" ? parseInt(val) : val)
                                        setOpen(false)
                                    }}
                                    key={o}
                                    className={"grid grid-cols-[30px_1fr]"}
                                >
                                    <ArrowUpIcon
                                        className="mr-2 h-4 w-4 text-muted-foreground"
                                        style={{
                                            transform: `rotate(${180 - (parseInt(o) / 10 * 180)}deg)`
                                        }}
                                    />
                                    <span>
                                        {o}
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


ToDoListDataTablePriorityCell.displayName = "ToDoListDataTablePriorityCell"


export default ToDoListDataTablePriorityCell;
