import { z } from 'zod';
import { ServingWhereUniqueInputSchema } from './ServingWhereUniqueInputSchema.js';
import { ServingUpdateWithoutItemInputSchema } from './ServingUpdateWithoutItemInputSchema.js';
import { ServingUncheckedUpdateWithoutItemInputSchema } from './ServingUncheckedUpdateWithoutItemInputSchema.js';
import { ServingCreateWithoutItemInputSchema } from './ServingCreateWithoutItemInputSchema.js';
import { ServingUncheckedCreateWithoutItemInputSchema } from './ServingUncheckedCreateWithoutItemInputSchema.js';
export const ServingUpsertWithWhereUniqueWithoutItemInputSchema = z.object({
    where: z.lazy(() => ServingWhereUniqueInputSchema),
    update: z.union([z.lazy(() => ServingUpdateWithoutItemInputSchema), z.lazy(() => ServingUncheckedUpdateWithoutItemInputSchema)]),
    create: z.union([z.lazy(() => ServingCreateWithoutItemInputSchema), z.lazy(() => ServingUncheckedCreateWithoutItemInputSchema)]),
}).strict();
export default ServingUpsertWithWhereUniqueWithoutItemInputSchema;
