import { z } from 'zod';
import { DietaryItemWhereInputSchema } from '../inputTypeSchemas/DietaryItemWhereInputSchema.js';
export const DietaryItemDeleteManyArgsSchema = z.object({
    where: DietaryItemWhereInputSchema.optional(),
}).strict();
export default DietaryItemDeleteManyArgsSchema;
