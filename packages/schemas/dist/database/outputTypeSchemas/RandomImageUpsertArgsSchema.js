import { z } from 'zod';
import { RandomImageWhereUniqueInputSchema } from '../inputTypeSchemas/RandomImageWhereUniqueInputSchema.js';
import { RandomImageCreateInputSchema } from '../inputTypeSchemas/RandomImageCreateInputSchema.js';
import { RandomImageUncheckedCreateInputSchema } from '../inputTypeSchemas/RandomImageUncheckedCreateInputSchema.js';
import { RandomImageUpdateInputSchema } from '../inputTypeSchemas/RandomImageUpdateInputSchema.js';
import { RandomImageUncheckedUpdateInputSchema } from '../inputTypeSchemas/RandomImageUncheckedUpdateInputSchema.js';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const RandomImageSelectSchema = z.object({
    path: z.boolean().optional(),
    createdAt: z.boolean().optional(),
}).strict();
export const RandomImageUpsertArgsSchema = z.object({
    select: RandomImageSelectSchema.optional(),
    where: RandomImageWhereUniqueInputSchema,
    create: z.union([RandomImageCreateInputSchema, RandomImageUncheckedCreateInputSchema]),
    update: z.union([RandomImageUpdateInputSchema, RandomImageUncheckedUpdateInputSchema]),
}).strict();
export default RandomImageUpsertArgsSchema;
