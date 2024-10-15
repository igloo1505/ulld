import { z } from 'zod';
import { TimePeriodWhereInputSchema } from './TimePeriodWhereInputSchema.js';
export const TimePeriodListRelationFilterSchema = z.object({
    every: z.lazy(() => TimePeriodWhereInputSchema).optional(),
    some: z.lazy(() => TimePeriodWhereInputSchema).optional(),
    none: z.lazy(() => TimePeriodWhereInputSchema).optional()
}).strict();
export default TimePeriodListRelationFilterSchema;
