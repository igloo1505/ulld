"use client"
import {  Popover, PopoverContent, PopoverTrigger } from '@ulld/tailwind/popover';
import {  Badge} from '@ulld/tailwind/badge';
import {  Separator} from '@ulld/tailwind/separator';
import { Button} from '@ulld/tailwind/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator} from '@ulld/tailwind/command';
import { CheckIcon, PlusCircleIcon } from 'lucide-react';
import clsx from 'clsx';
import { DataTableDropdownCheckboxListInputProps, DropdownCheckboxItemProps } from '../../types';
import { AddItemDropdownButton } from './addItemDropdownButton';




const DropdownCheckboxItem = ({ item, toggle, isSelected }: DropdownCheckboxItemProps) => {
    return (
        <CommandItem
            onSelect={() => toggle(item)}
        >
            <div
                className={clsx(
                    "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                    isSelected
                        ? "bg-primary text-primary-foreground"
                        : "opacity-50 [&_svg]:invisible"
                )}
            >
                <CheckIcon className={"h-4 w-4"} />
            </div>
            {item.icon && (
                <item.icon className="mr-2 h-4 w-4 text-muted-foreground" />
            )}
            <span>{item.label}</span>
        </CommandItem>
    )
}


export const DataTableDropdownCheckboxListInput = <T extends unknown>({ label, selectedIds, options, toggle, placeholder, searchParams, clear, hideAddListButton, icon: Icon }: DataTableDropdownCheckboxListInputProps<T>) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="h-8 border-dashed">
                    {Icon ? <Icon className={"mr-2 h-4 w-4"} /> : <PlusCircleIcon className="mr-2 h-4 w-4" />}
                    {label}
                    {selectedIds?.length > 0 && (
                        <>
                            <Separator orientation="vertical" className="mx-2 h-4" />
                            <Badge
                                variant="secondary"
                                className="rounded-sm px-1 font-normal lg:hidden"
                            >
                                {selectedIds?.length}
                            </Badge>
                            <div className="hidden space-x-1 lg:flex">
                                {selectedIds?.length > 2 ? (
                                    <Badge
                                        variant="secondary"
                                        className="rounded-sm px-1 font-normal"
                                    >
                                        {selectedIds?.length} selected
                                    </Badge>
                                ) : (
                                    options
                                        .filter((option) => selectedIds?.includes(option.id as number))
                                        .map((option) => (
                                            <Badge
                                                variant="secondary"
                                                key={option.name}
                                                className="rounded-sm px-1 font-normal"
                                            >
                                                {option.label}
                                            </Badge>
                                        ))
                                )}
                            </div>
                        </>
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0" align="start">
                <Command>
                    <CommandInput placeholder={placeholder || label} />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup>
                            {options.map((option) => {
                                return <DropdownCheckboxItem
                                    key={option.name}
                                    item={option}
                                    toggle={toggle}
                                    isSelected={Boolean(option.active)}
                                />
                            })}
                                {!hideAddListButton && <AddItemDropdownButton
                                label="Add List"
                                href={"/todo/add/list"}
                            />}
                        </CommandGroup>
                        {selectedIds?.length > 0 && clear && (
                            <>
                                <CommandSeparator />
                                <CommandGroup>
                                    <CommandItem
                                        onSelect={() => clear()}
                                        className="justify-center text-center"
                                    >
                                        Clear filters
                                    </CommandItem>
                                </CommandGroup>
                            </>
                        )}
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}


DataTableDropdownCheckboxListInput.displayName = "DataTableDropdownCheckboxListInput"
