import { z } from 'zod';
import { RandomImageWhereInputSchema } from '../inputTypeSchemas/RandomImageWhereInputSchema.js';
export const RandomImageDeleteManyArgsSchema = z.object({
    where: RandomImageWhereInputSchema.optional(),
}).strict();
export default RandomImageDeleteManyArgsSchema;
