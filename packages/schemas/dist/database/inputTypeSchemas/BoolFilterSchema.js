import { z } from 'zod';
import { NestedBoolFilterSchema } from './NestedBoolFilterSchema.js';
export const BoolFilterSchema = z.object({
    equals: z.boolean().optional(),
    not: z.union([z.boolean(), z.lazy(() => NestedBoolFilterSchema)]).optional(),
}).strict();
export default BoolFilterSchema;
