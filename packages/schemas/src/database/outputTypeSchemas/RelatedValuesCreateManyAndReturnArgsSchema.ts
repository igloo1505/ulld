import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { RelatedValuesCreateManyInputSchema } from '../inputTypeSchemas/RelatedValuesCreateManyInputSchema.js'
export const RelatedValuesCreateManyAndReturnArgsSchema: z.ZodType<Prisma.RelatedValuesCreateManyAndReturnArgs> = z.object({
  data: z.union([ RelatedValuesCreateManyInputSchema,RelatedValuesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default RelatedValuesCreateManyAndReturnArgsSchema;