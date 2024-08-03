import React, { ReactNode } from "react";
import {
    DropdownMenu,
    DropdownMenuContentNoPortal,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@ulld/tailwind/dropdown-menu";
import { TaggableFilterType } from "../../types";
import { ListFilterIcon } from "lucide-react";
import { capitalize } from "@ulld/utilities/stringUtils";

interface TaggableTypeToggleProps {
    value: TaggableFilterType;
    onChange: (period: TaggableFilterType) => void;
    options: TaggableFilterType[];
    children?: ReactNode;
    isTop?: boolean
}

const TaggableTypeToggle = ({
    value,
    onChange,
    options,
    children,
    isTop
}: TaggableTypeToggleProps) => {
    return (
        <DropdownMenu
            key={`${isTop ? "top" : "bottom"}-dashboard-dropdown`}
            modal={false}
        >
            <DropdownMenuTrigger asChild>
                <div className={"flex flex-row justify-center items-center gap-2"}>
                    {children}
                    <ListFilterIcon
                        className={"cursor-pointer text-muted-foreground w-3 h-3"}
                    />
                </div>
            </DropdownMenuTrigger>
                <DropdownMenuContentNoPortal className="w-56">
                    <DropdownMenuLabel>Taggable</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {options.map((t) => {
                        return (
                            <DropdownMenuItem
                                onClick={() => onChange(t)}
                                key={`taggable-item-${t}-${isTop ? "top" : "bottom"}`}
                            >
                                <span>{capitalize(t)}</span>
                            </DropdownMenuItem>
                        );
                    })}
                </DropdownMenuContentNoPortal>
        </DropdownMenu>
    );
};

TaggableTypeToggle.displayName = "TaggableTypeToggle";

export default TaggableTypeToggle;
