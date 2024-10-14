import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FeatureRequestWhereInputSchema } from '../inputTypeSchemas/FeatureRequestWhereInputSchema'

export const FeatureRequestDeleteManyArgsSchema: z.ZodType<Prisma.FeatureRequestDeleteManyArgs> = z.object({
  where: FeatureRequestWhereInputSchema.optional(),
}).strict() ;

export default FeatureRequestDeleteManyArgsSchema;
