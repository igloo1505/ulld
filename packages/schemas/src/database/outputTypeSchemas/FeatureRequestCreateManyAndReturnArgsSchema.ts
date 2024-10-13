import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/FeatureRequestCreateManyInputSchema.js
export const FeatureRequestCreateManyAndReturnArgsSchema: z.ZodType<Prisma.FeatureRequestCreateManyAndReturnArgs> = z.object({
  data: z.union([ FeatureRequestCreateManyInputSchema,FeatureRequestCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default FeatureRequestCreateManyAndReturnArgsSchema;