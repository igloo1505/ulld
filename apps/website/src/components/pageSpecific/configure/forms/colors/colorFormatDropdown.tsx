import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuGroup,
    DropdownMenuItem,
} from "@ulld/tailwind/dropdown-menu";
import React, { ReactNode } from "react";
import { useColorFormState } from "./useColorFormState";
import { ColorFormat, colorFormats } from "./staticData";

const ColorFormatDropdownItem = ({
    item,
    onClick,
}: {
    item: ColorFormat;
    onClick: () => void;
}) => {
    return <DropdownMenuItem onClick={onClick}>{item.label}</DropdownMenuItem>;
};

export const ColorFormatDropdown = ({ children }: { children: ReactNode }) => {

    const { setColorFormat } = useColorFormState();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Color Format</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    {colorFormats.map((item) => {
                        return (
                            <ColorFormatDropdownItem
                                key={item.value}
                                item={item}
                                onClick={() => setColorFormat(item.value)}
                            />
                        );
                    })}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

ColorFormatDropdown.displayName = "ColorFormatDropdown";
