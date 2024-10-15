import { z } from 'zod';
import { ServingUpdateManyMutationInputSchema } from '../inputTypeSchemas/ServingUpdateManyMutationInputSchema.js';
import { ServingUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ServingUncheckedUpdateManyInputSchema.js';
import { ServingWhereInputSchema } from '../inputTypeSchemas/ServingWhereInputSchema.js';
export const ServingUpdateManyArgsSchema = z.object({
    data: z.union([ServingUpdateManyMutationInputSchema, ServingUncheckedUpdateManyInputSchema]),
    where: ServingWhereInputSchema.optional(),
}).strict();
export default ServingUpdateManyArgsSchema;
