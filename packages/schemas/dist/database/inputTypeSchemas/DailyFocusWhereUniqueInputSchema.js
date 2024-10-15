import { z } from 'zod';
import { DailyFocusWhereInputSchema } from './DailyFocusWhereInputSchema.js';
import { DateTimeFilterSchema } from './DateTimeFilterSchema.js';
export const DailyFocusWhereUniqueInputSchema = z.object({
    value: z.string()
})
    .and(z.object({
    value: z.string().optional(),
    AND: z.union([z.lazy(() => DailyFocusWhereInputSchema), z.lazy(() => DailyFocusWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => DailyFocusWhereInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => DailyFocusWhereInputSchema), z.lazy(() => DailyFocusWhereInputSchema).array()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
}).strict());
export default DailyFocusWhereUniqueInputSchema;
