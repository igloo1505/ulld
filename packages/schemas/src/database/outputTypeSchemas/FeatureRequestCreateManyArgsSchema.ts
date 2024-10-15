import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { FeatureRequestCreateManyInputSchema } from '../inputTypeSchemas/FeatureRequestCreateManyInputSchema.js'
export const FeatureRequestCreateManyArgsSchema: z.ZodType<Prisma.FeatureRequestCreateManyArgs> = z.object({
  data: z.union([ FeatureRequestCreateManyInputSchema,FeatureRequestCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default FeatureRequestCreateManyArgsSchema;