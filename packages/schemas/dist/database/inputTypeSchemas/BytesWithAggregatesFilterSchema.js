import { z } from 'zod';
import { NestedBytesWithAggregatesFilterSchema } from './NestedBytesWithAggregatesFilterSchema.js';
import { NestedIntFilterSchema } from './NestedIntFilterSchema.js';
import { NestedBytesFilterSchema } from './NestedBytesFilterSchema.js';
export const BytesWithAggregatesFilterSchema = z.object({
    equals: z.instanceof(Buffer).optional(),
    in: z.instanceof(Buffer).array().optional(),
    notIn: z.instanceof(Buffer).array().optional(),
    not: z.union([z.instanceof(Buffer), z.lazy(() => NestedBytesWithAggregatesFilterSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedBytesFilterSchema).optional(),
    _max: z.lazy(() => NestedBytesFilterSchema).optional()
}).strict();
export default BytesWithAggregatesFilterSchema;
