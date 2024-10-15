import { z } from 'zod';
import { DailyFocusWhereInputSchema } from '../inputTypeSchemas/DailyFocusWhereInputSchema.js';
export const DailyFocusDeleteManyArgsSchema = z.object({
    where: DailyFocusWhereInputSchema.optional(),
}).strict();
export default DailyFocusDeleteManyArgsSchema;
