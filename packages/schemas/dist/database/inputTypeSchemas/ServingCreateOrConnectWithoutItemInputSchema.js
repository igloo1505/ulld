import { z } from 'zod';
import { ServingWhereUniqueInputSchema } from './ServingWhereUniqueInputSchema.js';
import { ServingCreateWithoutItemInputSchema } from './ServingCreateWithoutItemInputSchema.js';
import { ServingUncheckedCreateWithoutItemInputSchema } from './ServingUncheckedCreateWithoutItemInputSchema.js';
export const ServingCreateOrConnectWithoutItemInputSchema = z.object({
    where: z.lazy(() => ServingWhereUniqueInputSchema),
    create: z.union([z.lazy(() => ServingCreateWithoutItemInputSchema), z.lazy(() => ServingUncheckedCreateWithoutItemInputSchema)]),
}).strict();
export default ServingCreateOrConnectWithoutItemInputSchema;
