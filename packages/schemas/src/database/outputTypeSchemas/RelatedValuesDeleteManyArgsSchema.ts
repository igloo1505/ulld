import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RelatedValuesWhereInputSchema } from '../inputTypeSchemas/RelatedValuesWhereInputSchema'

export const RelatedValuesDeleteManyArgsSchema: z.ZodType<Prisma.RelatedValuesDeleteManyArgs> = z.object({
  where: RelatedValuesWhereInputSchema.optional(),
}).strict() ;

export default RelatedValuesDeleteManyArgsSchema;
