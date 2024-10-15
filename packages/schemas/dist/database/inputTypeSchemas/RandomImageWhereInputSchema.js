import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema.js';
import { DateTimeFilterSchema } from './DateTimeFilterSchema.js';
export const RandomImageWhereInputSchema = z.object({
    AND: z.union([z.lazy(() => RandomImageWhereInputSchema), z.lazy(() => RandomImageWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => RandomImageWhereInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => RandomImageWhereInputSchema), z.lazy(() => RandomImageWhereInputSchema).array()]).optional(),
    path: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
}).strict();
export default RandomImageWhereInputSchema;
