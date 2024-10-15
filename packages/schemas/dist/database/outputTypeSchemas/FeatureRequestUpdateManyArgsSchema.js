import { z } from 'zod';
import { FeatureRequestUpdateManyMutationInputSchema } from '../inputTypeSchemas/FeatureRequestUpdateManyMutationInputSchema.js';
import { FeatureRequestUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/FeatureRequestUncheckedUpdateManyInputSchema.js';
import { FeatureRequestWhereInputSchema } from '../inputTypeSchemas/FeatureRequestWhereInputSchema.js';
export const FeatureRequestUpdateManyArgsSchema = z.object({
    data: z.union([FeatureRequestUpdateManyMutationInputSchema, FeatureRequestUncheckedUpdateManyInputSchema]),
    where: FeatureRequestWhereInputSchema.optional(),
}).strict();
export default FeatureRequestUpdateManyArgsSchema;
