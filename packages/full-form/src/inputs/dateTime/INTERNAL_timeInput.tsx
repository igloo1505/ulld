"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { Input } from "@ulld/tailwind/input";
import { Label } from "@ulld/tailwind/label";
import dayjs from "dayjs";

export interface TimeInputProps {
    value: string | Date;
    onChange: (newVal: string | Date) => void;
    label?: ReactNode;
    returnAsString?: boolean;
}

const makeProperDigit = (n: string) => {
       return n.length === 2 ? n : `0${n}` 
    }

const getTimeValue = (v?: Date | string) => {
    if (!v) return "09:00"
    let d = dayjs(v)
    if(!d.isValid()){
        return "09:00"
    }
    /* return `${makeProperDigit(d.getHours().toString())}:${makeProperDigit(d.getMinutes().toString())}` */
    let timeVal = d.format("HH:mm");
    return timeVal
};

const TimeInput = ({
    value,
    onChange,
    label,
    returnAsString,
}: TimeInputProps) => {
    const val = useRef<Date | string>(value);
    const [timeValue, setTimeValue] = useState("09:00");

    useEffect(() => {
        val.current = value;
        setTimeValue(getTimeValue(value))
    }, [value]);
    

    return (
        <div className={"space-y-2"}>
            {label && <Label>{label}</Label>}
            <Input
                type="time"
                value={timeValue}
                onChange={(e) => {
                    let split = e.target.value.split(":");
                    if (split.length !== 2) {
                        return;
                    }
                    let n = dayjs(val.current);
                    n = n.set("hour", parseInt(split[0]));
                    n = n.set("minute", parseInt(split[1]));
                    if (n.isValid()) {
                        onChange(returnAsString ? n.toString() : n.toDate());
                        /* setTimeValue(getTimeValue(value)) */
                    }
                }}
            />
        </div>
    );
};

TimeInput.displayName = "TimeInput";

export default TimeInput;
