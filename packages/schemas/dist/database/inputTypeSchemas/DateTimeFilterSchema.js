import { z } from 'zod';
import { NestedDateTimeFilterSchema } from './NestedDateTimeFilterSchema.js';
export const DateTimeFilterSchema = z.object({
    equals: z.coerce.date().optional(),
    in: z.coerce.date().array().optional(),
    notIn: z.coerce.date().array().optional(),
    lt: z.coerce.date().optional(),
    lte: z.coerce.date().optional(),
    gt: z.coerce.date().optional(),
    gte: z.coerce.date().optional(),
    not: z.union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)]).optional(),
}).strict();
export default DateTimeFilterSchema;
