import { z } from 'zod';
import { NestedFloatFilterSchema } from './NestedFloatFilterSchema.js';
export const FloatFilterSchema = z.object({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z.union([z.number(), z.lazy(() => NestedFloatFilterSchema)]).optional(),
}).strict();
export default FloatFilterSchema;
