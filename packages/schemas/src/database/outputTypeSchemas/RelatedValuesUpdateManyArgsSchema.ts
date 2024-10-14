import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RelatedValuesUpdateManyMutationInputSchema } from '../inputTypeSchemas/RelatedValuesUpdateManyMutationInputSchema'
import { RelatedValuesUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/RelatedValuesUncheckedUpdateManyInputSchema'
import { RelatedValuesWhereInputSchema } from '../inputTypeSchemas/RelatedValuesWhereInputSchema'

export const RelatedValuesUpdateManyArgsSchema: z.ZodType<Prisma.RelatedValuesUpdateManyArgs> = z.object({
  data: z.union([ RelatedValuesUpdateManyMutationInputSchema,RelatedValuesUncheckedUpdateManyInputSchema ]),
  where: RelatedValuesWhereInputSchema.optional(),
}).strict() ;

export default RelatedValuesUpdateManyArgsSchema;
