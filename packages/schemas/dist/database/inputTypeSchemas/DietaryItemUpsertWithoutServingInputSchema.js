import { z } from 'zod';
import { DietaryItemUpdateWithoutServingInputSchema } from './DietaryItemUpdateWithoutServingInputSchema.js';
import { DietaryItemUncheckedUpdateWithoutServingInputSchema } from './DietaryItemUncheckedUpdateWithoutServingInputSchema.js';
import { DietaryItemCreateWithoutServingInputSchema } from './DietaryItemCreateWithoutServingInputSchema.js';
import { DietaryItemUncheckedCreateWithoutServingInputSchema } from './DietaryItemUncheckedCreateWithoutServingInputSchema.js';
import { DietaryItemWhereInputSchema } from './DietaryItemWhereInputSchema.js';
export const DietaryItemUpsertWithoutServingInputSchema = z.object({
    update: z.union([z.lazy(() => DietaryItemUpdateWithoutServingInputSchema), z.lazy(() => DietaryItemUncheckedUpdateWithoutServingInputSchema)]),
    create: z.union([z.lazy(() => DietaryItemCreateWithoutServingInputSchema), z.lazy(() => DietaryItemUncheckedCreateWithoutServingInputSchema)]),
    where: z.lazy(() => DietaryItemWhereInputSchema).optional()
}).strict();
export default DietaryItemUpsertWithoutServingInputSchema;
