import React, { useState } from 'react'
import { Button } from '#/components/shad/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '#/components/shad/ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '#/components/shad/ui/command';
import clsx from 'clsx';


export interface GeneralComboBoxProps<T extends string | number> {
    options: {
        value: T
        label: React.ReactNode
        icon?: React.FC<{ className?: string }>
    }[]
    value?: T
    onChange: (val: string) => void
    buttonClasses?: string
    placeholder?: string
    displayTransform?: (val?: T | string) => string
    buttonIcon?: React.FC<{ className?: string }>
    optionClasses?: string
}

const GeneralComboBox = <T extends string | number>(props: GeneralComboBoxProps<T>) => {
    const [open, setOpen] = useState(false)
    const displayStr = props.displayTransform ? props.displayTransform(props.value || props.placeholder) : typeof props.value === "string" ? props.value : typeof props.value === "number" ? `${props.value}` : props.placeholder
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="ghost"
                    size="sm"
                    className={clsx("h-8 px-2 gap-1 border-dashed grid grid-cols-[20px_1fr] place-items-center", props.buttonClasses)}
                    aria-expanded={open}
                >
                    {props.buttonIcon && <div className={"w-3 h-3 grid place-items-center"}><props.buttonIcon className={"w-3 h-3"} /></div>}
                    {displayStr || "Select"}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0" align="start">
                <Command>
                    <CommandInput placeholder={"Status..."} />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup>
                            {props.options.map((o: GeneralComboBoxProps<T>["options"][number]) => {
                                return <CommandItem aria-current={props.value === o.value}
                                    value={`${o.value}`}
                                    onSelect={(val) => {
                                        props.onChange(val)
                                        setOpen(false)
                                    }}
                                    key={o.value}
                                    className={clsx("grid grid-cols-[30px_1fr]", props.optionClasses)}
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


GeneralComboBox.displayName = "GeneralComboBox"


export default GeneralComboBox;
