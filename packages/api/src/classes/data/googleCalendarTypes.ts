import {z} from 'zod'


export enum CalendarSortOptions {
    startTime = "startTime"
}

export interface CalendarOptions {
    calendarId?: string
    sortBy?: CalendarSortOptions
    take?: number,
    includePast?: boolean
}

export const CalendarOptionsZod: z.ZodType<CalendarOptions | undefined> = z.object({
    calendarId: z.string().optional(),
    sortBy: z.nativeEnum(CalendarSortOptions).default(CalendarSortOptions.startTime),
    take: z.number().int().default(50),
    includePast: z.boolean().optional()
}).strict().optional()


export interface AddCalendarEventFormType {

}
