import { DateTime, TimePeriodOption } from "@ulld/utilities/dateTime";
import { clamp } from "@ulld/utilities/general";
import dayjs from "dayjs";
import { DashboardState } from "./provider";

export const getDateToNowString = (
    _start: string | Date,
    _stop?: string | Date,
    allTime?: boolean,
) => {
    if (typeof allTime !== "boolean") {
        allTime = !Boolean(_stop);
    }
    let start = dayjs(_start);
    let stop = dayjs(_stop || new Date());
    console.log("stop: ", _stop || new Date());
    let baseString = `${start.format("MMM DD, YYYY")} - ${stop.format("MMM DD, YYYY")}`;
    return allTime ? `All Time (${baseString})` : baseString;
};

export const clampMaxPlotColors = (index: number) => {
    return clamp(index, [1, 5]);
};

export const filterItemsByTimePeriod = <T extends unknown>(
    items: T[],
    period: TimePeriodOption,
    getItem: (item: T) => string | Date,
) => {
    return DateTime.filterByDateRange(
        items,
        (n) => {
            let val = getItem(n);
            if(!val){
                val = "1/1/1970"
            }
            if (typeof val === "string") {
                val = new Date(val);
            }
            return val;
        },
        DateTime.getTimePeriod(period),
    );
};

export const sortNotesByType = (notes: DashboardState["notes"]) => {
    let items: {
        mdx: typeof notes,
        notebook: typeof notes
    } = {
        mdx: [],
        notebook: []
    }
    for (const item of notes) {
        items[item.type === "notebook" ? "notebook" : "mdx"].push(item)
    }
    return items
}
