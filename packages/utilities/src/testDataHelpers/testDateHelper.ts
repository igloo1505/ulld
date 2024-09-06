import { DateTime } from "../classes/DateTime/main.js";

const makeDate = (s: string | Date) => {
    return typeof s === "string" ? new Date(s) : s;
};

export class TestDateHelper extends DateTime {
    constructor(t: Date | string) {
        super(t);
    }
    static randomDateBeforeNow(start: string | Date) { 
        let d = makeDate(start).valueOf()
        let now = new Date().valueOf()
        let diff = now - d
        return new Date(d + Math.floor(Math.random() * diff))
    }
}
