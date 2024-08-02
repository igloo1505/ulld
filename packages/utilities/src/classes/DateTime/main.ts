import dayjs, { Dayjs } from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import relativeTime from "dayjs/plugin/relativeTime";
import duration from "dayjs/plugin/duration";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { TimeDisplayType } from "./dateTimeUtils";
import { AppConfigSchemaOutput } from "@ulld/types";
dayjs.extend(customParseFormat);
dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(advancedFormat);

export const timePeriodOptions = [
    "24 hours",
    "1 week",
    "30 Days",
    "60 Days",
    "90 Days",
    "6 Months",
    "Previous Year",
    "Year to Date",
    "All Time",
] as const;

export type TimePeriodOption = (typeof timePeriodOptions)[number];

export class DateTime {
    t: Date;
    dayjs: Dayjs;
    withoutSuffix: boolean = false;
    timezone: string;
    flat: boolean = false;
    constructor(
        t: Date | string,
        public config?: AppConfigSchemaOutput,
    ) {
        this.timezone = config?.dateHandling.defaultTimeZone || this.getTimezone();
        if (this.timezone) {
            dayjs.tz.setDefault(this.timezone);
        }
        this.dayjs = t instanceof Date ? dayjs(t) : dayjs(t).tz(this.timezone);
        this.t = this.dayjs.toDate();
    }

    private getTimezone() {
        return (
            Intl.DateTimeFormat().resolvedOptions().timeZone || "America/Chicago"
        );
    }

    djs(t: Date | string | Dayjs) {
        return dayjs.tz(t, this.timezone);
    }

    updateOnInterval(
        intervalSeconds: number,
        type: TimeDisplayType,
        callback: (s: string) => void,
    ) {
        let interval = setInterval(() => {
            callback(this.relativeTime(type));
        }, intervalSeconds * 1000);
        return interval;
    }

    formatDate(withTime?: boolean) {
        const formatStr = withTime ? "MMM Do YYYY [at] h:mm a" : "MMM Do YYYY";
        return this.dayjs.local().format(formatStr);
    }

    now(asValue: boolean = false) {
        return asValue ? new Date().valueOf() : new Date();
    }

    secondDifference(fromTo: Date = new Date()) {
        return this.dayjs.local().diff(fromTo, "seconds");
    }

    diffAsDuration(t: Date = new Date()) {
        return dayjs.duration(this.secondDifference(t), "seconds");
    }

    formatTimeDiff(duration?: duration.Duration, t: Date = new Date()) {
        let dur = duration || this.diffAsDuration(t);
        return {
            years: dur.years(),
            days: dur.days(),
            asDays: dur.asDays(),
            months: dur.months(),
            hours: dur.hours(),
            minutes: dur.minutes(),
            seconds: dur.seconds(),
        };
    }

    private getDiffBaseString(duration: duration.Duration) {
        let days = duration.days();
        let months = duration.months();
        let s = "";
        if (this.flat) {
            let asDays = Math.floor(duration.asDays());
            if (asDays > 0) s += `[${asDays} ${asDays === 1 ? "day" : "days"} ]`;
        } else {
            if (months > 0) s += months === 1 ? "M [month] " : "M [months] ";
            if (days > 0) s += days === 1 ? "D [day] " : "D [days] ";
        }
        return s;
    }

    private relativeTimeAnalog() {
        let duration = this.diffAsDuration();
        let s = this.getDiffBaseString(duration);
        return duration.format(`${s} HH:mm:ss`);
    }

    private relativeTimeDescriptive() {
        let duration = this.diffAsDuration();
        let s = this.getDiffBaseString(duration);
        let dt = this.formatTimeDiff(duration);
        if (dt.hours) s += dt.hours === 1 ? "H [hour] " : "H [hours] ";
        if (dt.minutes) s += dt.minutes === 1 ? "m [minute] " : "m [minutes] ";
        if (dt.seconds) s += dt.seconds === 1 ? "ss [second] " : "ss [seconds] ";
        return duration.format(s.trim());
    }

    private relativeTimeSummarized() {
        return this.dayjs.local().fromNow(this.withoutSuffix);
    }

    replaceExtraNegatives(t: string) {
        let f1 = t.indexOf("-");
        let f2 = t.lastIndexOf("-");
        if (f1 < 0 || f1 === f2) {
            return t;
        }
        return `${t.slice(0, f1 + 1)}${t.slice(f1, t.length).replaceAll("-", "")}`;
    }

    relativeTime(type: "descriptive" | "analog" | "summarized") {
        if (type === "analog")
            return this.replaceExtraNegatives(this.relativeTimeAnalog());
        if (type === "summarized")
            return this.replaceExtraNegatives(this.relativeTimeSummarized());
        if (type === "descriptive")
            return this.replaceExtraNegatives(this.relativeTimeDescriptive());
        return "";
    }

    startOfDay() {
        return dayjs().startOf("day");
    }

    dayOfWeek() {
        return dayjs().get("day");
    }

    static filterByDateRange<T extends unknown>(
        items: T[],
        getDate: (item: T) => Date,
        start: Date | string,
        end?: Date | string,
    ) {
        let returnItems: T[] = [];
        let startValue = (
            typeof start === "string" ? new Date(start) : start
        ).valueOf();
        let endValue = (
            typeof end === "undefined"
                ? new Date()
                : typeof end === "string"
                    ? new Date(end)
                    : end
        ).valueOf();
        for (const k of items) {
            let val = getDate(k).valueOf();
            if (val >= startValue && val <= endValue) {
                returnItems.push(k);
            }
        }
        return returnItems;
    }
    static formatDate(d: Date | string | number, withTime?: boolean, formatString?: string) {
        const formatStr = formatString ? formatString : withTime ? "MMM Do YYYY [at] h:mm a" : "MMM Do YYYY";
        return dayjs(d).format(formatStr);
    }
    static formattedQuantityToString(d: {
        hours: number;
        minutes: number;
        seconds: number;
    }) {
        let s = "";
        if (d.hours > 0) {
            s += `${d.hours}:`;
        }
        if (d.minutes > 0) {
            s += `${d.minutes}:`;
        }
        s += `${d.seconds > 0 ? d.seconds : "00"}`;
        return s;
    }
    static formattedQuantityToDescriptiveString(d: {
        hours: number;
        minutes: number;
        seconds: number;
    }) {
        let s = "";
        if (d.hours > 0) {
            s += `${d.hours} ${d.hours === 1 ? "hour" : "hours"} `;
        }
        if (d.minutes > 0) {
            s += `${d.minutes} ${d.minutes === 1 ? "minute" : "minutes"} `;
        }
        if (d.seconds > 0) {
            s += `${d.seconds} ${d.seconds === 1 ? "second" : "seconds"} `;
        }
        return s;
    }
    static formatTimeQuantity(seconds: number) {
        let hr = Math.floor(seconds / 3600);
        let min = Math.floor((seconds - hr * 3600) / 60);
        let sec = Math.floor(seconds - (hr * 3600 + min * 60));
        return {
            hours: hr,
            minutes: min,
            seconds: sec,
        };
    }
    static getTimePeriod(opt: TimePeriodOption) {
        let timePeriodRecord: Record<
            TimePeriodOption,
            number | ((d: Date) => number)
        > = {
            "24 hours": 86400000,
            "1 week": 604800000,
            "30 Days": 2592000000, // 60 * 60 * 24 * 30 * 1000
            "60 Days": 5184000000,
            "90 Days": 7776000000,
            "Previous Year": 31536000000, // 60 * 60 * 24 * 365 * 1000
            "6 Months": 15768000000,
            "Year to Date": (d) =>
                d.valueOf() - new Date(`1/1/${d.getFullYear()}`).valueOf(),
            "All Time": (d) => d.valueOf() - new Date(`1/1/1970`).valueOf(),
        };
        let f = timePeriodRecord[opt];
        let _now = new Date();
        if (typeof f === "function") {
            return new Date(_now.valueOf() - f(_now));
        } else {
            return new Date(_now.valueOf() - f);
        }
    }
    static thirtyDaysAgo() {
        let n = 2592000000; // 60 * 60 * 24 * 30 * 1000
        return new Date(new Date().valueOf() - n);
    }
    static consistentlyFormatDay(val: Date) {
        return `${val.getMonth() + 1}/${val.getDate()}/${val.getFullYear()}`;
    }
    static groupByDay<J extends unknown>(
        items: J[],
        getDate: ((item: J) => Date | null),
    ) {
        let days: Record<string, J[]> = {};
        for (const k of items) {
            let d = getDate(k);
            if (d) {
                let s = DateTime.consistentlyFormatDay(d);
                if (!(s in days)) {
                    days[s] = [];
                }
                days[s].push(k);
            }
        }
        return days;
    }
    static groupByHour<J extends unknown>(
        items: J[],
        getDate: ((item: J) => Date | null),
    ) {
        let days: Record<string, J[]> = {};
        for (const k of items) {
            let d = getDate(k);
            if (d) {
                let v = dayjs(d)
                let s = v.format("HH")
                if (!(s in days)) {
                    days[s] = [];
                }
                days[s].push(k);
            }
        }
        return days;
    }
}

export const ensureDate = <T extends Date | null | undefined>(
    d: Date | string | undefined | null,
    _default: "item" | "null" | "now" | "undefined" = "null",
) => {
    return (
        d instanceof Date
            ? d
            : typeof d === "string"
                ? new Date(d)
                : _default === "item"
                    ? d
                    : _default === "now"
                        ? new Date()
                        : _default === "undefined"
                            ? undefined
                            : null
    ) as Date | T;
};
