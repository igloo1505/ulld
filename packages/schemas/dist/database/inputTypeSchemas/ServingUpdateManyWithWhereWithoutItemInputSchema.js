import { z } from 'zod';
import { ServingScalarWhereInputSchema } from './ServingScalarWhereInputSchema.js';
import { ServingUpdateManyMutationInputSchema } from './ServingUpdateManyMutationInputSchema.js';
import { ServingUncheckedUpdateManyWithoutItemInputSchema } from './ServingUncheckedUpdateManyWithoutItemInputSchema.js';
export const ServingUpdateManyWithWhereWithoutItemInputSchema = z.object({
    where: z.lazy(() => ServingScalarWhereInputSchema),
    data: z.union([z.lazy(() => ServingUpdateManyMutationInputSchema), z.lazy(() => ServingUncheckedUpdateManyWithoutItemInputSchema)]),
}).strict();
export default ServingUpdateManyWithWhereWithoutItemInputSchema;
