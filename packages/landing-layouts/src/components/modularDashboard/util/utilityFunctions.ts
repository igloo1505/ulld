import { clamp } from '@ulld/utilities/general'
import dayjs from 'dayjs'


export const getDateToNowString = (_start: string | Date, _stop?: string | Date, allTime?: boolean) => {
    if(typeof allTime !== "boolean"){
        allTime = !Boolean(_stop)
    }
    let start = dayjs(_start)
    let stop = dayjs(_stop || new Date())
    console.log("stop: ", _stop || new Date())
    let baseString = `${start.format("MMM DD, YYYY")} - ${stop.format("MMM DD, YYYY")}`
    return allTime ? `All Time (${baseString})` : baseString
}


export const clampMaxPlotColors = (index: number) => {
    return clamp(index, [1, 5])
}

export const timePeriodOptions = [
    "30 Days",
    "60 Days",
    "90 Days",
    "6 Months",
    "Previous Year",
    "Year to Date"
] as const
