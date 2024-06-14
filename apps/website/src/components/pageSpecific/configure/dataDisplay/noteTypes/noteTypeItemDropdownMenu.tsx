import {
    CircleEllipsis,
    TrashIcon,
    FilePenLine,
    PaletteIcon,
    WeightIcon,
    FolderSearch,
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
    showColorModal: () => void
    showKeywordModal: () => void
    showMatchMagnitudeModal: () => void
    label: string;
}

const NoteTypeItemDropdown = ({
    label,
    removeItem,
    editItem,
    showColorModal,
    showKeywordModal,
    showMatchMagnitudeModal
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
                        <FilePenLine className="mr-2 h-4 w-4" />
                        <span>Edit</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={clickableFunction(showColorModal)}
                    >
                        <PaletteIcon className="mr-2 h-4 w-4" />
                        <span>Colors</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={clickableFunction(showKeywordModal)}
                    >
                        <FolderSearch className="mr-2 h-4 w-4" />
                        <span>Keywords</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={clickableFunction(showMatchMagnitudeModal)}
                    >
                        <WeightIcon className="mr-2 h-4 w-4" />
                        <span>Match Priority</span>
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
