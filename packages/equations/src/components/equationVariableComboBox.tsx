"use client";
import React, { useMemo, useRef } from "react";
import { UseFormReturn } from "react-hook-form";
import { Button } from "@ulld/tailwind/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@ulld/tailwind/command";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@ulld/tailwind/form";
import {
    Popover,
    PopoverContentNoPortal,
    PopoverTrigger,
} from "@ulld/tailwind/popover";
import { CheckIcon, ChevronsUpDown } from "lucide-react";
import { cn } from "@ulld/utilities/cn";

interface EquationVariableComboBoxProps {
    form: UseFormReturn<
        {
            query?: string | undefined;
            tags?: string[] | undefined;
            variables?: string[] | undefined;
        },
        any,
        undefined
    >;
    vars: string[];
    toggle: (t: string) => void;
}

const EquationVariableComboBox = ({
    form,
    vars: _vars,
    toggle,
}: EquationVariableComboBoxProps) => {
    /* const [emWidth, setEmWidth] = useState(0); */
    const ref = useRef<HTMLDivElement>(null!);
    const popoverRef = useRef<HTMLDivElement>(null!);

    const vars = useMemo(() => _vars.filter((x) => x.trim().length), [_vars]);

    /* const handleResize = () => { */
    /*     if (!ref.current) return; */
    /*     let newWidth = ref.current.getBoundingClientRect().width; */
    /*     setEmWidth(newWidth); */
    /*     console.log("popoverRef.current: ", popoverRef.current) */
    /*     /* popoverRef.current.style.width = `${newWidth}px`; */
    /* }; */

    /* const handleOpenChange = (newOpen: boolean) => { */
    /*     if (newOpen && popoverRef.current) { */
    /*         /* popoverRef.current.style.width = `${emWidth}px`; */
    /*     } */
    /* }; */

    /* useEffect(() => { */
    /*     handleResize(); */
    /*     window.addEventListener("resize", handleResize); */
    /*     return () => window.removeEventListener("resize", handleResize); */
    /* }, []); */

    return (
        <FormField
            control={form.control}
            name="variables"
            render={({ field }) => (
                <FormItem ref={ref} className="flex flex-col w-full lg:w-fit">
                    <FormLabel>Variables</FormLabel>
                    <Popover 
                        /* onOpenChange={handleOpenChange} */
                    >
                        <PopoverTrigger asChild>
                            <FormControl>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    className={cn(
                                        "w-full lg:w-[200px] justify-between",
                                        !field.value && "text-muted-foreground",
                                    )}
                                >
                                    Filter by variables
                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </FormControl>
                        </PopoverTrigger>
                        <PopoverContentNoPortal className="w-[200px] p-0" ref={popoverRef}>
                            <Command>
                                <CommandInput placeholder="Search variables..." />
                                <CommandEmpty>No variables found.</CommandEmpty>
                                <CommandGroup
                                    className={
                                        vars.length ? "max-h-[250px] overflow-y-auto" : "py-0"
                                    }
                                >
                                    {vars.map((t) => (
                                        <CommandItem
                                            /* value={t} */
                                            key={t}
                                            onSelect={() => {
                                                toggle(t);
                                            }}
                                        >
                                            <CheckIcon
                                                className={cn(
                                                    "mr-2 h-4 w-4",
                                                    field.value?.includes(t)
                                                        ? "opacity-100"
                                                        : "opacity-0",
                                                )}
                                            />
                                            {t}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </Command>
                        </PopoverContentNoPortal>
                    </Popover>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

EquationVariableComboBox.displayName = "EquationVariableComboBox";

export default EquationVariableComboBox;
