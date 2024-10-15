import { z } from 'zod';
import { DailyFocusUpdateManyMutationInputSchema } from '../inputTypeSchemas/DailyFocusUpdateManyMutationInputSchema.js';
import { DailyFocusUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/DailyFocusUncheckedUpdateManyInputSchema.js';
import { DailyFocusWhereInputSchema } from '../inputTypeSchemas/DailyFocusWhereInputSchema.js';
export const DailyFocusUpdateManyArgsSchema = z.object({
    data: z.union([DailyFocusUpdateManyMutationInputSchema, DailyFocusUncheckedUpdateManyInputSchema]),
    where: DailyFocusWhereInputSchema.optional(),
}).strict();
export default DailyFocusUpdateManyArgsSchema;
