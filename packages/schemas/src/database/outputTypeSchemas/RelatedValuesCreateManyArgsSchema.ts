import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RelatedValuesCreateManyInputSchema } from '../inputTypeSchemas/RelatedValuesCreateManyInputSchema'

export const RelatedValuesCreateManyArgsSchema: z.ZodType<Prisma.RelatedValuesCreateManyArgs> = z.object({
  data: z.union([ RelatedValuesCreateManyInputSchema,RelatedValuesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default RelatedValuesCreateManyArgsSchema;
