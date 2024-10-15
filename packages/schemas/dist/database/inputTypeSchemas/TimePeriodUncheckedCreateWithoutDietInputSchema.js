import { z } from 'zod';
export const TimePeriodUncheckedCreateWithoutDietInputSchema = z.object({
    id: z.number().int().optional(),
    start: z.coerce.date().optional(),
    end: z.coerce.date().optional().nullable()
}).strict();
export default TimePeriodUncheckedCreateWithoutDietInputSchema;
