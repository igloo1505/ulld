import { z } from 'zod';
import { NestedBoolWithAggregatesFilterSchema } from './NestedBoolWithAggregatesFilterSchema.js';
import { NestedIntFilterSchema } from './NestedIntFilterSchema.js';
import { NestedBoolFilterSchema } from './NestedBoolFilterSchema.js';
export const BoolWithAggregatesFilterSchema = z.object({
    equals: z.boolean().optional(),
    not: z.union([z.boolean(), z.lazy(() => NestedBoolWithAggregatesFilterSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedBoolFilterSchema).optional(),
    _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();
export default BoolWithAggregatesFilterSchema;
