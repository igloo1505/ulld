import * as React from "react";
import { type DialogProps } from "@radix-ui/react-dialog";
declare const Command: React.ForwardRefExoticComponent<Omit<{
    children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement> & {
    label?: string;
    shouldFilter?: boolean;
    filter?: (value: string, search: string) => number;
    value?: string;
    onValueChange?: (value: string) => void;
    loop?: boolean;
} & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
interface CommandDialogProps extends DialogProps {
}
declare const CommandDialog: ({ children, ...props }: CommandDialogProps) => React.JSX.Element;
declare const CommandInput: React.ForwardRefExoticComponent<Omit<Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "type" | "onChange"> & {
    value?: string;
    onValueChange?: (search: string) => void;
} & React.RefAttributes<HTMLInputElement>, "ref"> & React.RefAttributes<HTMLInputElement>>;
declare const CommandList: React.ForwardRefExoticComponent<Omit<{
    children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const CommandEmpty: React.ForwardRefExoticComponent<Omit<{
    children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const CommandGroup: React.ForwardRefExoticComponent<Omit<{
    children?: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "value" | "heading"> & {
    heading?: React.ReactNode;
    value?: string;
} & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const CommandSeparator: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLDivElement> & {
    alwaysRender?: boolean;
} & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const CommandItem: React.ForwardRefExoticComponent<Omit<{
    children?: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "value" | "onSelect" | "disabled"> & {
    disabled?: boolean;
    onSelect?: (value: string) => void;
    value?: string;
} & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const CommandShortcut: {
    ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): React.JSX.Element;
    displayName: string;
};
export { Command, CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut, CommandSeparator, };
//# sourceMappingURL=command.d.ts.map