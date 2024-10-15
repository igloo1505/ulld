import { z } from 'zod';
import { DailyFocusWhereUniqueInputSchema } from '../inputTypeSchemas/DailyFocusWhereUniqueInputSchema.js';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const DailyFocusSelectSchema = z.object({
    value: z.boolean().optional(),
    createdAt: z.boolean().optional(),
}).strict();
export const DailyFocusDeleteArgsSchema = z.object({
    select: DailyFocusSelectSchema.optional(),
    where: DailyFocusWhereUniqueInputSchema,
}).strict();
export default DailyFocusDeleteArgsSchema;
