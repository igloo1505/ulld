import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RelatedValuesCreateManyInputSchema } from '../inputTypeSchemas/RelatedValuesCreateManyInputSchema'

export const RelatedValuesCreateManyAndReturnArgsSchema: z.ZodType<Prisma.RelatedValuesCreateManyAndReturnArgs> = z.object({
  data: z.union([ RelatedValuesCreateManyInputSchema,RelatedValuesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default RelatedValuesCreateManyAndReturnArgsSchema;
