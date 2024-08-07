import { TimePeriodOption } from "@ulld/utilities/dateTime";
import React, { useState } from "react";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from "@ulld/tailwind/popover";
import { timePeriodOptions } from "@ulld/utilities/dateTime";
import { Clock1Icon } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@ulld/tailwind/radio-group";
import { Label } from "@ulld/tailwind/label";

interface TimePeriodToggleProps {
    value: TimePeriodOption;
    onChange: (period: TimePeriodOption) => void;
}

const TimePeriodToggle = ({ onChange, value }: TimePeriodToggleProps) => {
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
                <PopoverTrigger asChild>
                    <Clock1Icon
                        className={"cursor-pointer text-muted-foreground w-3 h-3"}
                        onClick={() => setOpen(true)}
                    />
                </PopoverTrigger>
                <PopoverContent>
                    <RadioGroup
                        defaultValue={value}
                        value={value}
                        onValueChange={onChange}
                    >
                        {timePeriodOptions.map((t) => {
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

TimePeriodToggle.displayName = "TimePeriodToggle";

export default TimePeriodToggle;
