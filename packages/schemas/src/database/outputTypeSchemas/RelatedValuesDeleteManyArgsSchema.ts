import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/RelatedValuesWhereInputSchema.js
export const RelatedValuesDeleteManyArgsSchema: z.ZodType<Prisma.RelatedValuesDeleteManyArgs> = z.object({
  where: RelatedValuesWhereInputSchema.optional(),
}).strict() ;
export default RelatedValuesDeleteManyArgsSchema;