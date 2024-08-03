import cn from "@ulld/utilities/cn";
import { TimePeriodOption } from "@ulld/utilities/dateTime";
import React, { useEffect } from "react";
import {
    useDashboardContext,
    useDashboardDispatch,
} from "../../../util/provider";
import { useLocalStorage } from "@ulld/hooks/useLocalStorage";

export interface TimePeriodButtonGroupProps { }

const options: { label: string; value: TimePeriodOption }[] = [
    {
        label: "24H",
        value: "24 hours",
    },
    {
        label: "1W",
        value: "1 week",
    },
    {
        label: "1M",
        value: "30 Days",
    },
    {
        label: "1Y",
        value: "Previous Year",
    },
    {
        label: "All",
        value: "All Time",
    },
];

const TimePeriodButtonGroup = ({ }: TimePeriodButtonGroupProps) => {
    const [_timePeriod, setTimePeriod] = useLocalStorage<TimePeriodOption>(
        "ulld-main-dashboard-card-timePeriod",
    );
    const { timePeriod } = useDashboardContext();

    return (
        <div
            className={
                "flex flex-row justify-start items-center flex-wrap @[340px]/dashboard:grid gap-4 @[340px]/dashboard:max-h-10"
            }
            style={{
                gridTemplateColumns: `repeat(${options.length}, 1fr)`,
            }}
        >
            {options.map((o) => {
                return (
                    <a
                        role="button"
                        key={`time-period-btn-${o.value}`}
                        className={cn(
                            "text-sm w-fit @[340px]/dashboard:w-full h-full flex justify-center items-center border rounded-[20px] py-2 px-3 transition-colors duration-200",
                            timePeriod === o.value
                                ? "border-primary"
                                : " hover:bg-secondary hover:text-secondary-foreground",
                        )}
                        onClick={() => {
                            setTimePeriod(o.value);
                        }}
                    >
                        {o.label}
                    </a>
                );
            })}
        </div>
    );
};

TimePeriodButtonGroup.displayName = "TimePeriodButtonGroup";

export default TimePeriodButtonGroup;
