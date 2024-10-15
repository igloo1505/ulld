import { z } from 'zod';
import { RandomImageUpdateInputSchema } from '../inputTypeSchemas/RandomImageUpdateInputSchema.js';
import { RandomImageUncheckedUpdateInputSchema } from '../inputTypeSchemas/RandomImageUncheckedUpdateInputSchema.js';
import { RandomImageWhereUniqueInputSchema } from '../inputTypeSchemas/RandomImageWhereUniqueInputSchema.js';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const RandomImageSelectSchema = z.object({
    path: z.boolean().optional(),
    createdAt: z.boolean().optional(),
}).strict();
export const RandomImageUpdateArgsSchema = z.object({
    select: RandomImageSelectSchema.optional(),
    data: z.union([RandomImageUpdateInputSchema, RandomImageUncheckedUpdateInputSchema]),
    where: RandomImageWhereUniqueInputSchema,
}).strict();
export default RandomImageUpdateArgsSchema;
