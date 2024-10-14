import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FeatureRequestCreateManyInputSchema } from '../inputTypeSchemas/FeatureRequestCreateManyInputSchema'

export const FeatureRequestCreateManyAndReturnArgsSchema: z.ZodType<Prisma.FeatureRequestCreateManyAndReturnArgs> = z.object({
  data: z.union([ FeatureRequestCreateManyInputSchema,FeatureRequestCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default FeatureRequestCreateManyAndReturnArgsSchema;
