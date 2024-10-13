import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/FeatureRequestUpdateManyMutationInputSchema.js
..//inputTypeSchemas/FeatureRequestUncheckedUpdateManyInputSchema.js
..//inputTypeSchemas/FeatureRequestWhereInputSchema.js
export const FeatureRequestUpdateManyArgsSchema: z.ZodType<Prisma.FeatureRequestUpdateManyArgs> = z.object({
  data: z.union([ FeatureRequestUpdateManyMutationInputSchema,FeatureRequestUncheckedUpdateManyInputSchema ]),
  where: FeatureRequestWhereInputSchema.optional(),
}).strict() ;
export default FeatureRequestUpdateManyArgsSchema;