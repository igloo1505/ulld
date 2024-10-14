import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FeatureRequestUpdateManyMutationInputSchema } from '../inputTypeSchemas/FeatureRequestUpdateManyMutationInputSchema'
import { FeatureRequestUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/FeatureRequestUncheckedUpdateManyInputSchema'
import { FeatureRequestWhereInputSchema } from '../inputTypeSchemas/FeatureRequestWhereInputSchema'

export const FeatureRequestUpdateManyArgsSchema: z.ZodType<Prisma.FeatureRequestUpdateManyArgs> = z.object({
  data: z.union([ FeatureRequestUpdateManyMutationInputSchema,FeatureRequestUncheckedUpdateManyInputSchema ]),
  where: FeatureRequestWhereInputSchema.optional(),
}).strict() ;

export default FeatureRequestUpdateManyArgsSchema;
