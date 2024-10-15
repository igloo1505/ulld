import { z } from 'zod';
import { FeatureRequestWhereInputSchema } from '../inputTypeSchemas/FeatureRequestWhereInputSchema.js';
export const FeatureRequestDeleteManyArgsSchema = z.object({
    where: FeatureRequestWhereInputSchema.optional(),
}).strict();
export default FeatureRequestDeleteManyArgsSchema;
