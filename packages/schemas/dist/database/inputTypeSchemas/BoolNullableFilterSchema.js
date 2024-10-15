import { z } from 'zod';
import { NestedBoolNullableFilterSchema } from './NestedBoolNullableFilterSchema.js';
export const BoolNullableFilterSchema = z.object({
    equals: z.boolean().optional().nullable(),
    not: z.union([z.boolean(), z.lazy(() => NestedBoolNullableFilterSchema)]).optional().nullable(),
}).strict();
export default BoolNullableFilterSchema;
