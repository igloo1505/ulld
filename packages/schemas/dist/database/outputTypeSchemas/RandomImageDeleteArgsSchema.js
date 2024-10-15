import { z } from 'zod';
import { RandomImageWhereUniqueInputSchema } from '../inputTypeSchemas/RandomImageWhereUniqueInputSchema.js';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const RandomImageSelectSchema = z.object({
    path: z.boolean().optional(),
    createdAt: z.boolean().optional(),
}).strict();
export const RandomImageDeleteArgsSchema = z.object({
    select: RandomImageSelectSchema.optional(),
    where: RandomImageWhereUniqueInputSchema,
}).strict();
export default RandomImageDeleteArgsSchema;
