import { z } from 'zod';
import { DietaryItemUpdateManyMutationInputSchema } from '../inputTypeSchemas/DietaryItemUpdateManyMutationInputSchema.js';
import { DietaryItemUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/DietaryItemUncheckedUpdateManyInputSchema.js';
import { DietaryItemWhereInputSchema } from '../inputTypeSchemas/DietaryItemWhereInputSchema.js';
export const DietaryItemUpdateManyArgsSchema = z.object({
    data: z.union([DietaryItemUpdateManyMutationInputSchema, DietaryItemUncheckedUpdateManyInputSchema]),
    where: DietaryItemWhereInputSchema.optional(),
}).strict();
export default DietaryItemUpdateManyArgsSchema;
