import { Dayjs } from "dayjs";


export class TimePeriod {
    current: boolean
    constructor(public start: Date | Dayjs, public end?: Date | Dayjs | null) {
        this.current = !end
    }
}

