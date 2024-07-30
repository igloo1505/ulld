"use client"
import React, { useEffect, useState } from "react";
import { getDateToNowString } from "./utilityFunctions";

interface DateGapLabelProps {
    start?: string | Date;
    stop?: string | Date | "now";
}

const DateGapLabel = ({ start, stop = "now" }: DateGapLabelProps) => {
    const [value, setValue] = useState<string | null>(null);

    useEffect(() => {
        if (start) {
            setValue(getDateToNowString(start, stop === "now" ? new Date() : stop, stop === "now"));
        } else {
            setValue(null);
        }
    }, [start, stop]);

    if (!value) {
        return null;
    }

    return <div className={"top-2 left-2 absolute w-full text-muted-foreground text-[10px]"}>{value}</div>;
};

DateGapLabel.displayName = "DateGapLabel";

export default DateGapLabel;
