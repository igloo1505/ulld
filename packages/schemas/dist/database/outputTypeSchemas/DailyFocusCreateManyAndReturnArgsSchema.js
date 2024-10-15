import { z } from 'zod';
import { DailyFocusCreateManyInputSchema } from '../inputTypeSchemas/DailyFocusCreateManyInputSchema.js';
export const DailyFocusCreateManyAndReturnArgsSchema = z.object({
    data: z.union([DailyFocusCreateManyInputSchema, DailyFocusCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default DailyFocusCreateManyAndReturnArgsSchema;
