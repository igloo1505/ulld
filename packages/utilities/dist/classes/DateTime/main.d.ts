import dayjs, { Dayjs } from "dayjs";
import duration from "dayjs/plugin/duration";
import { TimeDisplayType } from "./dateTimeUtils";
import { AppConfigSchemaOutput } from "@ulld/types";
export declare const timePeriodOptions: readonly ["24 hours", "1 week", "30 Days", "60 Days", "90 Days", "6 Months", "Previous Year", "Year to Date", "All Time"];
export type TimePeriodOption = (typeof timePeriodOptions)[number];
export declare class DateTime {
    config?: AppConfigSchemaOutput | undefined;
    t: Date;
    dayjs: Dayjs;
    withoutSuffix: boolean;
    timezone: string;
    flat: boolean;
    constructor(t: Date | string, config?: AppConfigSchemaOutput | undefined);
    private getTimezone;
    djs(t: Date | string | Dayjs): dayjs.Dayjs;
    updateOnInterval(intervalSeconds: number, type: TimeDisplayType, callback: (s: string) => void): NodeJS.Timer;
    formatDate(withTime?: boolean): string;
    now(asValue?: boolean): number | Date;
    secondDifference(fromTo?: Date): number;
    diffAsDuration(t?: Date): duration.Duration;
    formatTimeDiff(duration?: duration.Duration, t?: Date): {
        years: number;
        days: number;
        asDays: number;
        months: number;
        hours: number;
        minutes: number;
        seconds: number;
    };
    private getDiffBaseString;
    private relativeTimeAnalog;
    private relativeTimeDescriptive;
    private relativeTimeSummarized;
    replaceExtraNegatives(t: string): string;
    relativeTime(type: "descriptive" | "analog" | "summarized"): string;
    startOfDay(): dayjs.Dayjs;
    dayOfWeek(): number;
    static filterByDateRange<T extends unknown>(items: T[], getDate: (item: T) => Date, start: Date | string, end?: Date | string): T[];
    static formatDate(d: Date | string | number, withTime?: boolean, formatString?: string): string;
    static formattedQuantityToString(d: {
        hours: number;
        minutes: number;
        seconds: number;
    }): string;
    static formattedQuantityToDescriptiveString(d: {
        hours: number;
        minutes: number;
        seconds: number;
    }): string;
    static formatTimeQuantity(seconds: number): {
        hours: number;
        minutes: number;
        seconds: number;
    };
    static getTimePeriod(opt: TimePeriodOption): Date;
    static thirtyDaysAgo(): Date;
    static consistentlyFormatDay(val: Date): string;
    static groupByDay<J extends unknown>(items: J[], getDate: ((item: J) => Date | null)): Record<string, J[]>;
    static groupByHour<J extends unknown>(items: J[], getDate: ((item: J) => Date | null)): Record<string, J[]>;
}
export declare const ensureDate: <T extends Date | null | undefined>(d: Date | string | undefined | null, _default?: "item" | "null" | "now" | "undefined") => Date | T;
//# sourceMappingURL=main.d.ts.map