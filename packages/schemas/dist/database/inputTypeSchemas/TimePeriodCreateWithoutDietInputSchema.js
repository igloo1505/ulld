import { z } from 'zod';
export const TimePeriodCreateWithoutDietInputSchema = z.object({
    start: z.coerce.date().optional(),
    end: z.coerce.date().optional().nullable()
}).strict();
export default TimePeriodCreateWithoutDietInputSchema;
