import React from 'react'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '#/components/shad/ui/form'
import { UseFormReturn } from 'react-hook-form'
import { Button } from '#/components/shad/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '#/components/shad/ui/command'
import { CheckIcon, ChevronsUpDown } from 'lucide-react'
import { cn } from '#/utils'
import { Popover, PopoverContent, PopoverTrigger } from '#/components/shad/ui/popover'



interface EquationVariableComboBoxProps {
    form: UseFormReturn<{
        query?: string | undefined;
        tags?: string[] | undefined;
        variables?: string[] | undefined;
    }, any, undefined>
    vars: string[]
    toggle: (t: string) => void
}

const EquationVariableComboBox = ({ form, vars, toggle }: EquationVariableComboBoxProps) => {
    return (
        <FormField
            control={form.control}
            name="variables"
            render={({ field }) => (
                <FormItem className="flex flex-col">
                    <FormLabel>Variables</FormLabel>
                    <Popover>
                        <PopoverTrigger asChild>
                            <FormControl>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    className={cn(
                                        "w-[200px] justify-between",
                                        !field.value && "text-muted-foreground"
                                    )}
                                >
                                    Filter by variables
                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                            <Command>
                                <CommandInput placeholder="Search language..." />
                                <CommandEmpty>No variables found.</CommandEmpty>
                                <CommandGroup>
                                    {vars.map((t) => (
                                        <CommandItem
                                            value={t}
                                            key={t}
                                            onSelect={() => {
                                                toggle(t)
                                            }}
                                        >
                                            <CheckIcon
                                                className={cn(
                                                    "mr-2 h-4 w-4",
                                                    field.value?.includes(t)
                                                        ? "opacity-100"
                                                        : "opacity-0"
                                                )}
                                            />
                                            {t}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </Command>
                        </PopoverContent>
                    </Popover>
                    <FormDescription>
                        Filter equations by variables
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}


EquationVariableComboBox.displayName = "EquationVariableComboBox"


export default EquationVariableComboBox;
