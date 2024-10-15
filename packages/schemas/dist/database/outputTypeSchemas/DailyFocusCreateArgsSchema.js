import { z } from 'zod';
import { DailyFocusCreateInputSchema } from '../inputTypeSchemas/DailyFocusCreateInputSchema.js';
import { DailyFocusUncheckedCreateInputSchema } from '../inputTypeSchemas/DailyFocusUncheckedCreateInputSchema.js';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const DailyFocusSelectSchema = z.object({
    value: z.boolean().optional(),
    createdAt: z.boolean().optional(),
}).strict();
export const DailyFocusCreateArgsSchema = z.object({
    select: DailyFocusSelectSchema.optional(),
    data: z.union([DailyFocusCreateInputSchema, DailyFocusUncheckedCreateInputSchema]),
}).strict();
export default DailyFocusCreateArgsSchema;
