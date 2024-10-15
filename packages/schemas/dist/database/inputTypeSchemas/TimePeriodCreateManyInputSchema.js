import { z } from 'zod';
export const TimePeriodCreateManyInputSchema = z.object({
    id: z.number().int().optional(),
    start: z.coerce.date().optional(),
    end: z.coerce.date().optional().nullable(),
    dietId: z.string().optional().nullable()
}).strict();
export default TimePeriodCreateManyInputSchema;
