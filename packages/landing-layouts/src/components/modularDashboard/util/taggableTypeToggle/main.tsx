import { Label } from "@ulld/tailwind/label";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from "@ulld/tailwind/popover";
import { RadioGroup, RadioGroupItem } from "@ulld/tailwind/radio-group";
import { ListFilterIcon } from "lucide-react";
import React, { ComponentPropsWithoutRef, ReactNode, useState } from "react";
import { TaggableFilterType } from "../../types";

interface TaggableTypeToggleProps {
    value: TaggableFilterType;
    onChange: (period: TaggableFilterType) => void;
    options: TaggableFilterType[];
    children?: ReactNode;
    popover?: ComponentPropsWithoutRef<typeof PopoverTrigger>
}

const TaggableTypeToggle = ({
    value,
    onChange,
    options,
    popover,
    children,
}: TaggableTypeToggleProps) => {
    const [open, setOpen] = useState(false);
    return (
        <Popover
            open={open}
            onOpenChange={(newOpen: boolean) => {
                if (!newOpen) {
                    setOpen(false);
                }
            }}
            modal={true}
        >
            <PopoverTrigger
                {...popover}
            >
                <>
                {children}
                <ListFilterIcon
                    className={"cursor-pointer text-muted-foreground w-3 h-3"}
                    onClick={() => setOpen(true)}
                />
                </>
            </PopoverTrigger>
            <PopoverContent>
                <RadioGroup defaultValue={value} value={value} onValueChange={onChange}>
                    {options.map((t) => {
                        return (
                            <div
                                key={`timePeriod-toggle-${t}`}
                                className="flex items-center space-x-2"
                            >
                                <RadioGroupItem value={t} id="r1" />
                                <Label htmlFor="r1">{t}</Label>
                            </div>
                        );
                    })}
                </RadioGroup>
            </PopoverContent>
        </Popover>
    );
};

TaggableTypeToggle.displayName = "TaggableTypeToggle";

export default TaggableTypeToggle;
