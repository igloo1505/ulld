import { z } from 'zod';
import { DailyFocusCreateManyInputSchema } from '../inputTypeSchemas/DailyFocusCreateManyInputSchema.js';
export const DailyFocusCreateManyArgsSchema = z.object({
    data: z.union([DailyFocusCreateManyInputSchema, DailyFocusCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default DailyFocusCreateManyArgsSchema;
