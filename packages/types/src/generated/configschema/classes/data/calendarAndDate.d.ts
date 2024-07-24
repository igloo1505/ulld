import dayjs from 'dayjs';
import { ParsedAppConfig } from '@ulld/configschema/types';
export declare class CalendarAndDateManager {
    constructor(_config?: ParsedAppConfig);
    getTimezone(): string;
    startOfDay(): dayjs.Dayjs;
    dayOfWeek(): number;
    static formatDate(d: Date | string | number, withTime?: boolean): string;
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
}
export declare const ensureDate: <T extends Date | null | undefined>(d: Date | string | undefined | null, _default?: "item" | "null" | "now" | "undefined") => Date | T;
//# sourceMappingURL=calendarAndDate.d.ts.map