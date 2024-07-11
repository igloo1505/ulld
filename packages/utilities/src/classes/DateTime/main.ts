import dayjs, { Dayjs } from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import relativeTime from "dayjs/plugin/relativeTime";
import duration from "dayjs/plugin/duration";
import customParseFormat from "dayjs/plugin/customParseFormat";
import {TimeDisplayType} from "./dateTimeUtils"
import { AppConfigSchemaOutput } from "@ulld/types";
dayjs.extend(customParseFormat);
dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(advancedFormat);

export class DateTime {
    t: Date;
    dayjs: Dayjs;
    withoutSuffix: boolean = false;
    timezone: string;
    flat: boolean = false;
    constructor(t: Date | string, _config: AppConfigSchemaOutput) {
        const config = _config;
        this.timezone = config.dateHandling.defaultTimeZone || this.getTimezone();
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
}
