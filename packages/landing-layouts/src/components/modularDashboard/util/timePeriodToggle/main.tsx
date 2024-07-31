import { TimePeriodOption } from "@ulld/utilities/dateTime";
import React, { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@ulld/tailwind/dropdown-menu";
import { timePeriodOptions } from "../utilityFunctions";
import { DynamicIcon } from "@ulld/icons";

interface TimePeriodToggleProps {
    value: TimePeriodOption;
    onChange: (period: TimePeriodOption) => void;
}

const TimePeriodToggle = ({ onChange }: TimePeriodToggleProps) => {
    const [open, setOpen] = useState(true);
    return (
        <div className={"absolute top-4 right-4"}>
            <DropdownMenu
                open={open}
                onOpenChange={(newOpen) => {
                    if (!newOpen) {
                        setOpen(false);
                    }
                }}
            >
                <DropdownMenuTrigger asChild>
                    <DynamicIcon
                        name="clock-1"
                        className={"cursor-pointer text-muted-foreground w-3 h-3"}
                        onClick={() => setOpen(true)}
                    />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {timePeriodOptions.map((t) => {
                        return (
                            <DropdownMenuItem
                                key={t}
                                /* className={itemClasses} */
                                role="button"
                                onClick={() => onChange(t)}
                            >
                                <span>{t}</span>
                            </DropdownMenuItem>
                        );
                    })}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

TimePeriodToggle.displayName = "TimePeriodToggle";

export default TimePeriodToggle;
