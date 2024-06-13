import {
    User,
    CircleEllipsis,
    TrashIcon,
} from "lucide-react";
import React, { MouseEvent, useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@ulld/tailwind/dropdown-menu";

interface NoteTypeItemDropdownProps {
    removeItem: () => void;
    editItem: () => void;
    label: string;
}

const NoteTypeItemDropdown = ({
    label,
    removeItem,
    editItem,
}: NoteTypeItemDropdownProps) => {
    const [open, setOpen] = useState(false);
    const clickableFunction = (cb: () => void) => {
        return (e: MouseEvent<HTMLElement>) => {
            e.preventDefault();
            e.stopPropagation();
            cb();
            setOpen(false);
        };
    };
    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
                <CircleEllipsis
                    role="button"
                    className={
                        "text-muted-foreground hover:text-foreground transition-colors duration-300"
                    }
                />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>{label}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem
                        onClick={clickableFunction(editItem)}
                    >
                        <User className="mr-2 h-4 w-4" />
                        <span>Edit</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                        onClick={clickableFunction(removeItem)}
                >
                    <TrashIcon className="mr-2 h-4 w-4" />
                    <span>Remove</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

NoteTypeItemDropdown.displayName = "NoteTypeItemDropdown";

export default NoteTypeItemDropdown;
