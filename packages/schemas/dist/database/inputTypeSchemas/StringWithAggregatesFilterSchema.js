import { z } from 'zod';
import { QueryModeSchema } from './QueryModeSchema.js';
import { NestedStringWithAggregatesFilterSchema } from './NestedStringWithAggregatesFilterSchema.js';
import { NestedIntFilterSchema } from './NestedIntFilterSchema.js';
import { NestedStringFilterSchema } from './NestedStringFilterSchema.js';
export const StringWithAggregatesFilterSchema = z.object({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    search: z.string().optional(),
    mode: z.lazy(() => QueryModeSchema).optional(),
    not: z.union([z.string(), z.lazy(() => NestedStringWithAggregatesFilterSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedStringFilterSchema).optional(),
    _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();
export default StringWithAggregatesFilterSchema;
