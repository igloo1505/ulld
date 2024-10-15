import { z } from 'zod';
import { NestedIntWithAggregatesFilterSchema } from './NestedIntWithAggregatesFilterSchema.js';
import { NestedIntFilterSchema } from './NestedIntFilterSchema.js';
import { NestedFloatFilterSchema } from './NestedFloatFilterSchema.js';
export const IntWithAggregatesFilterSchema = z.object({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z.union([z.number(), z.lazy(() => NestedIntWithAggregatesFilterSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
    _sum: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedIntFilterSchema).optional(),
    _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();
export default IntWithAggregatesFilterSchema;
