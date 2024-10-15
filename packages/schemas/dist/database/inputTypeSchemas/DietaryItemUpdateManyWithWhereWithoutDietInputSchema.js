import { z } from 'zod';
import { DietaryItemScalarWhereInputSchema } from './DietaryItemScalarWhereInputSchema.js';
import { DietaryItemUpdateManyMutationInputSchema } from './DietaryItemUpdateManyMutationInputSchema.js';
import { DietaryItemUncheckedUpdateManyWithoutDietInputSchema } from './DietaryItemUncheckedUpdateManyWithoutDietInputSchema.js';
export const DietaryItemUpdateManyWithWhereWithoutDietInputSchema = z.object({
    where: z.lazy(() => DietaryItemScalarWhereInputSchema),
    data: z.union([z.lazy(() => DietaryItemUpdateManyMutationInputSchema), z.lazy(() => DietaryItemUncheckedUpdateManyWithoutDietInputSchema)]),
}).strict();
export default DietaryItemUpdateManyWithWhereWithoutDietInputSchema;
