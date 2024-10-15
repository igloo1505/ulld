import { z } from 'zod';
import { DietWhereInputSchema } from '../inputTypeSchemas/DietWhereInputSchema.js';
export const DietDeleteManyArgsSchema = z.object({
    where: DietWhereInputSchema.optional(),
}).strict();
export default DietDeleteManyArgsSchema;
