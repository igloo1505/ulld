import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/RelatedValuesUpdateManyMutationInputSchema.js
..//inputTypeSchemas/RelatedValuesUncheckedUpdateManyInputSchema.js
..//inputTypeSchemas/RelatedValuesWhereInputSchema.js
export const RelatedValuesUpdateManyArgsSchema: z.ZodType<Prisma.RelatedValuesUpdateManyArgs> = z.object({
  data: z.union([ RelatedValuesUpdateManyMutationInputSchema,RelatedValuesUncheckedUpdateManyInputSchema ]),
  where: RelatedValuesWhereInputSchema.optional(),
}).strict() ;
export default RelatedValuesUpdateManyArgsSchema;