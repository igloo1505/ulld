import { z } from 'zod';
import { ServingWhereInputSchema } from '../inputTypeSchemas/ServingWhereInputSchema.js';
export const ServingDeleteManyArgsSchema = z.object({
    where: ServingWhereInputSchema.optional(),
}).strict();
export default ServingDeleteManyArgsSchema;
