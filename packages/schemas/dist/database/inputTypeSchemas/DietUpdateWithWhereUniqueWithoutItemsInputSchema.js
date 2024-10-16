import { z } from 'zod';
import { DietWhereUniqueInputSchema } from './DietWhereUniqueInputSchema.js';
import { DietUpdateWithoutItemsInputSchema } from './DietUpdateWithoutItemsInputSchema.js';
import { DietUncheckedUpdateWithoutItemsInputSchema } from './DietUncheckedUpdateWithoutItemsInputSchema.js';
export const DietUpdateWithWhereUniqueWithoutItemsInputSchema = z.object({
    where: z.lazy(() => DietWhereUniqueInputSchema),
    data: z.union([z.lazy(() => DietUpdateWithoutItemsInputSchema), z.lazy(() => DietUncheckedUpdateWithoutItemsInputSchema)]),
}).strict();
export default DietUpdateWithWhereUniqueWithoutItemsInputSchema;
