import { z } from 'zod';
import { CitationsGroupWhereInputSchema } from '../inputTypeSchemas/CitationsGroupWhereInputSchema.js';
export const CitationsGroupDeleteManyArgsSchema = z.object({
    where: CitationsGroupWhereInputSchema.optional(),
}).strict();
export default CitationsGroupDeleteManyArgsSchema;
