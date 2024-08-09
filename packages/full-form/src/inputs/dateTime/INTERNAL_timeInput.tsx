"use client";
import React, {
    ComponentProps,
    ReactNode,
    useMemo,
    useRef,
} from "react";
import "./timeInputStyles.scss"
import { Input } from "@ulld/tailwind/input";
import { Label } from "@ulld/tailwind/label";
import dayjs from "dayjs";
import cn from "@ulld/utilities/cn";
import { isSafari } from "react-device-detect";
import clsx from "clsx";

export interface TimeInputProps {
    value: string | Date;
    onChange: (newVal: string | Date) => void;
    label?: ReactNode;
    returnAsString?: boolean;
    inputProps?: Omit<ComponentProps<typeof Input>, "value" | "onChange">;
    classes?: {
        container?: string;
        input?: string;
        label?: string;
    };
}

const formatForSafari = (val: string) => {
        return isSafari ? `${val}:00` : val
    }

const getTimeValue = (v?: Date | string) => {
    if (!v) return formatForSafari("09:00");
    let d = dayjs(v);
    if (!d.isValid()) {
        return formatForSafari("09:00");
    }
    let timeVal = d.format("HH:mm");
    return formatForSafari(timeVal);
};

const TimeInput = ({
    value,
    onChange,
    label,
    inputProps,
    returnAsString,
    classes = {},
}: TimeInputProps) => {

    const val = useRef<Date | string>(value);

    const timeValue = useMemo(() => {
        val.current = value;
        return getTimeValue(value);
    }, [value])

    return (
        <div className={cn("space-y-2", classes.container)}>
            {label && <Label className={classes.label}>{label}</Label>}
            <Input
                {...inputProps}
                type="time"
                value={timeValue}
                className={clsx("ulldTimeInput", classes.input)}
                onChange={(e) => {
                    let split = e.target.value?.split(":");
                    if (!split || (split.length !== 2)) {
                        return;
                    }
                    let n = dayjs(val.current);
                    n = n.set("hour", parseInt(split[0]));
                    n = n.set("minute", parseInt(split[1]));
                    if (n.isValid()) {
                        onChange(returnAsString ? n.toString() : n.toDate());
                    }
                }}
            />
        </div>
    );
};

TimeInput.displayName = "TimeInput";

export default TimeInput;
