// TODO: Remove references to this. Moving this to the utilities package.
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import relativeTime from 'dayjs/plugin/relativeTime'
import duration from 'dayjs/plugin/duration'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import {  getInternalConfig } from '@ulld/configschema/zod/getInternalConfig';
import { ParsedAppConfig } from '@ulld/configschema/types';
dayjs.extend(customParseFormat)
dayjs.extend(duration)
dayjs.extend(relativeTime)
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(advancedFormat)





export class CalendarAndDateManager {
    constructor(_config?: ParsedAppConfig) {
        const config = _config || getInternalConfig()
        let tz = config.dateHandling.defaultTimeZone || this.getTimezone()
        if (tz) {
            dayjs.tz.setDefault(tz)
        }
    }

    getTimezone() {
        return Intl.DateTimeFormat().resolvedOptions().timeZone || "America/Chicago"
    }

    startOfDay() {
        return dayjs().startOf("day")
    }

    dayOfWeek() {
        return dayjs().get('day')
    }

    static formatDate(d: Date | string | number, withTime?: boolean) {
        const formatStr = withTime ? "MMM Do YYYY [at] h:mm a" : "MMM Do YYYY"
        return dayjs(d).format(formatStr)
    }
    static formattedQuantityToString(d: { hours: number, minutes: number, seconds: number }) {
        let s = ""
        if (d.hours > 0) {
            s += `${d.hours}:`
        }
        if (d.minutes > 0) {
            s += `${d.minutes}:`
        }
        s += `${d.seconds > 0 ? d.seconds : '00'}`
        return s
    }
    static formattedQuantityToDescriptiveString(d: { hours: number, minutes: number, seconds: number }) {
        let s = ""
        if (d.hours > 0) {
            s += `${d.hours} ${d.hours === 1 ? "hour" : "hours"} `
        }
        if (d.minutes > 0) {
            s += `${d.minutes} ${d.minutes === 1 ? "minute" : "minutes"} `
        }
        if (d.seconds > 0) {
            s += `${d.seconds} ${d.seconds === 1 ? "second" : "seconds"} `
        }
        return s
    }
    static formatTimeQuantity(seconds: number) {
        let hr = Math.floor(seconds / 3600)
        let min = Math.floor((seconds - (hr * 3600)) / 60)
        let sec = Math.floor(seconds - ((hr * 3600) + (min * 60)))
        return {
            hours: hr,
            minutes: min,
            seconds: sec
        }
    }
}

export const ensureDate = <T extends Date | null | undefined>(d: Date | string | undefined | null, _default: "item" | "null" | "now" | "undefined" = "null") => {
    return (d instanceof Date ? d : typeof d === "string" ? new Date(d) : _default === "item" ? d : _default === "now" ? new Date() : _default === "undefined" ? undefined : null) as Date | T
}

