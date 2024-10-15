import { z } from 'zod';
import { NestedDateTimeNullableFilterSchema } from './NestedDateTimeNullableFilterSchema.js';
export const DateTimeNullableFilterSchema = z.object({
    equals: z.coerce.date().optional().nullable(),
    in: z.coerce.date().array().optional().nullable(),
    notIn: z.coerce.date().array().optional().nullable(),
    lt: z.coerce.date().optional(),
    lte: z.coerce.date().optional(),
    gt: z.coerce.date().optional(),
    gte: z.coerce.date().optional(),
    not: z.union([z.coerce.date(), z.lazy(() => NestedDateTimeNullableFilterSchema)]).optional().nullable(),
}).strict();
export default DateTimeNullableFilterSchema;
