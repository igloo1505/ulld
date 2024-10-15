import { z } from 'zod';
import { RandomImageCreateInputSchema } from '../inputTypeSchemas/RandomImageCreateInputSchema.js';
import { RandomImageUncheckedCreateInputSchema } from '../inputTypeSchemas/RandomImageUncheckedCreateInputSchema.js';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const RandomImageSelectSchema = z.object({
    path: z.boolean().optional(),
    createdAt: z.boolean().optional(),
}).strict();
export const RandomImageCreateArgsSchema = z.object({
    select: RandomImageSelectSchema.optional(),
    data: z.union([RandomImageCreateInputSchema, RandomImageUncheckedCreateInputSchema]),
}).strict();
export default RandomImageCreateArgsSchema;
