import { z } from 'zod';
import { TimePeriodCreateManyInputSchema } from '../inputTypeSchemas/TimePeriodCreateManyInputSchema.js';
export const TimePeriodCreateManyArgsSchema = z.object({
    data: z.union([TimePeriodCreateManyInputSchema, TimePeriodCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default TimePeriodCreateManyArgsSchema;
