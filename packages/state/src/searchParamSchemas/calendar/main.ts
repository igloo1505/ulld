import {z} from 'zod'


export const calendarSearchParamSchema = z.object({
    past: z.boolean().default(false)
})



export type CalendarSearchParams = z.output<typeof calendarSearchParamSchema>
export type CalendarSearchParamInput = z.input<typeof calendarSearchParamSchema>
