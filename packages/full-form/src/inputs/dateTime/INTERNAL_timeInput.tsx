"use client";
import React, { ReactNode } from "react";
import { Input } from "@ulld/tailwind/input";
import { Label } from "@ulld/tailwind/label"

export interface TimeInputProps {
    value: string | Date;
    onChange: (newVal: string | Date) => void;
    label?: ReactNode;
    hideLabel?: boolean;
}

const TimeInput = ({
    value,
    onChange,
    label = "Time",
    hideLabel,
}: TimeInputProps) => {
    return (
        <div className={"space-y-2"}>
            {!hideLabel && <Label>{label}</Label>}
            <Input
                type="time"
                value={value}
                onChange={(e) => {
                    let d = new Date(e.target.value);
                    if (!isNaN(d)) {
                        onChange(d);
                    }
                }}
            />
        </div>
    );
};

TimeInput.displayName = "TimeInput";

export default TimeInput;
