import { z } from 'zod';
import { DailyFocusUpdateInputSchema } from '../inputTypeSchemas/DailyFocusUpdateInputSchema.js';
import { DailyFocusUncheckedUpdateInputSchema } from '../inputTypeSchemas/DailyFocusUncheckedUpdateInputSchema.js';
import { DailyFocusWhereUniqueInputSchema } from '../inputTypeSchemas/DailyFocusWhereUniqueInputSchema.js';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const DailyFocusSelectSchema = z.object({
    value: z.boolean().optional(),
    createdAt: z.boolean().optional(),
}).strict();
export const DailyFocusUpdateArgsSchema = z.object({
    select: DailyFocusSelectSchema.optional(),
    data: z.union([DailyFocusUpdateInputSchema, DailyFocusUncheckedUpdateInputSchema]),
    where: DailyFocusWhereUniqueInputSchema,
}).strict();
export default DailyFocusUpdateArgsSchema;
