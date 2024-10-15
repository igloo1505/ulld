import { z } from 'zod';
import { NestedIntNullableWithAggregatesFilterSchema } from './NestedIntNullableWithAggregatesFilterSchema.js';
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema.js';
import { NestedFloatNullableFilterSchema } from './NestedFloatNullableFilterSchema.js';
export const IntNullableWithAggregatesFilterSchema = z.object({
    equals: z.number().optional().nullable(),
    in: z.number().array().optional().nullable(),
    notIn: z.number().array().optional().nullable(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z.union([z.number(), z.lazy(() => NestedIntNullableWithAggregatesFilterSchema)]).optional().nullable(),
    _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
    _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
    _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
    _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
    _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();
export default IntNullableWithAggregatesFilterSchema;
