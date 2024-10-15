import { z } from 'zod';
export const NestedFloatNullableFilterSchema = z.object({
    equals: z.number().optional().nullable(),
    in: z.number().array().optional().nullable(),
    notIn: z.number().array().optional().nullable(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z.union([z.number(), z.lazy(() => NestedFloatNullableFilterSchema)]).optional().nullable(),
}).strict();
export default NestedFloatNullableFilterSchema;
