import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { FeatureRequestUpdateManyMutationInputSchema } from '../inputTypeSchemas/FeatureRequestUpdateManyMutationInputSchema.js'
import { FeatureRequestUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/FeatureRequestUncheckedUpdateManyInputSchema.js'
import { FeatureRequestWhereInputSchema } from '../inputTypeSchemas/FeatureRequestWhereInputSchema.js'
export const FeatureRequestUpdateManyArgsSchema: z.ZodType<Prisma.FeatureRequestUpdateManyArgs> = z.object({
  data: z.union([ FeatureRequestUpdateManyMutationInputSchema,FeatureRequestUncheckedUpdateManyInputSchema ]),
  where: FeatureRequestWhereInputSchema.optional(),
}).strict() ;
export default FeatureRequestUpdateManyArgsSchema;