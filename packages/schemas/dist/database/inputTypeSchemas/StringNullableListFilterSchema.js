import { z } from 'zod';
export const StringNullableListFilterSchema = z.object({
    equals: z.string().array().optional().nullable(),
    has: z.string().optional().nullable(),
    hasEvery: z.string().array().optional(),
    hasSome: z.string().array().optional(),
    isEmpty: z.boolean().optional()
}).strict();
export default StringNullableListFilterSchema;
