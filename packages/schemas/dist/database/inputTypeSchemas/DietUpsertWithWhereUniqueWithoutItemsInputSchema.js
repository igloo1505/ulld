import { z } from 'zod';
import { DietWhereUniqueInputSchema } from './DietWhereUniqueInputSchema.js';
import { DietUpdateWithoutItemsInputSchema } from './DietUpdateWithoutItemsInputSchema.js';
import { DietUncheckedUpdateWithoutItemsInputSchema } from './DietUncheckedUpdateWithoutItemsInputSchema.js';
import { DietCreateWithoutItemsInputSchema } from './DietCreateWithoutItemsInputSchema.js';
import { DietUncheckedCreateWithoutItemsInputSchema } from './DietUncheckedCreateWithoutItemsInputSchema.js';
export const DietUpsertWithWhereUniqueWithoutItemsInputSchema = z.object({
    where: z.lazy(() => DietWhereUniqueInputSchema),
    update: z.union([z.lazy(() => DietUpdateWithoutItemsInputSchema), z.lazy(() => DietUncheckedUpdateWithoutItemsInputSchema)]),
    create: z.union([z.lazy(() => DietCreateWithoutItemsInputSchema), z.lazy(() => DietUncheckedCreateWithoutItemsInputSchema)]),
}).strict();
export default DietUpsertWithWhereUniqueWithoutItemsInputSchema;
