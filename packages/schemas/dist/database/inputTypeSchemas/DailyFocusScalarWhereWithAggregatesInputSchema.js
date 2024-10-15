import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema.js';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema.js';
export const DailyFocusScalarWhereWithAggregatesInputSchema = z.object({
    AND: z.union([z.lazy(() => DailyFocusScalarWhereWithAggregatesInputSchema), z.lazy(() => DailyFocusScalarWhereWithAggregatesInputSchema).array()]).optional(),
    OR: z.lazy(() => DailyFocusScalarWhereWithAggregatesInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => DailyFocusScalarWhereWithAggregatesInputSchema), z.lazy(() => DailyFocusScalarWhereWithAggregatesInputSchema).array()]).optional(),
    value: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
}).strict();
export default DailyFocusScalarWhereWithAggregatesInputSchema;
