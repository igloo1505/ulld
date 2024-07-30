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
