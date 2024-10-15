import { z } from 'zod';
import { TimePeriodOrderByRelevanceFieldEnumSchema } from './TimePeriodOrderByRelevanceFieldEnumSchema.js';
import { SortOrderSchema } from './SortOrderSchema.js';
export const TimePeriodOrderByRelevanceInputSchema = z.object({
    fields: z.union([z.lazy(() => TimePeriodOrderByRelevanceFieldEnumSchema), z.lazy(() => TimePeriodOrderByRelevanceFieldEnumSchema).array()]),
    sort: z.lazy(() => SortOrderSchema),
    search: z.string()
}).strict();
export default TimePeriodOrderByRelevanceInputSchema;
