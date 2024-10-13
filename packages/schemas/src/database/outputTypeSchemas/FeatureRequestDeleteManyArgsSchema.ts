import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/FeatureRequestWhereInputSchema.js
export const FeatureRequestDeleteManyArgsSchema: z.ZodType<Prisma.FeatureRequestDeleteManyArgs> = z.object({
  where: FeatureRequestWhereInputSchema.optional(),
}).strict() ;
export default FeatureRequestDeleteManyArgsSchema;