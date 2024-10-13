import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/RelatedValuesCreateManyInputSchema.js
export const RelatedValuesCreateManyArgsSchema: z.ZodType<Prisma.RelatedValuesCreateManyArgs> = z.object({
  data: z.union([ RelatedValuesCreateManyInputSchema,RelatedValuesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default RelatedValuesCreateManyArgsSchema;