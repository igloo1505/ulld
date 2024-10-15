import { z } from 'zod';
import { DietWhereUniqueInputSchema } from './DietWhereUniqueInputSchema.js';
import { DietCreateWithoutItemsInputSchema } from './DietCreateWithoutItemsInputSchema.js';
import { DietUncheckedCreateWithoutItemsInputSchema } from './DietUncheckedCreateWithoutItemsInputSchema.js';
export const DietCreateOrConnectWithoutItemsInputSchema = z.object({
    where: z.lazy(() => DietWhereUniqueInputSchema),
    create: z.union([z.lazy(() => DietCreateWithoutItemsInputSchema), z.lazy(() => DietUncheckedCreateWithoutItemsInputSchema)]),
}).strict();
export default DietCreateOrConnectWithoutItemsInputSchema;
