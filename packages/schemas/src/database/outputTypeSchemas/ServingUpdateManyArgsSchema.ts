import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/ServingUpdateManyMutationInputSchema.js
..//inputTypeSchemas/ServingUncheckedUpdateManyInputSchema.js
..//inputTypeSchemas/ServingWhereInputSchema.js
export const ServingUpdateManyArgsSchema: z.ZodType<Prisma.ServingUpdateManyArgs> = z.object({
  data: z.union([ ServingUpdateManyMutationInputSchema,ServingUncheckedUpdateManyInputSchema ]),
  where: ServingWhereInputSchema.optional(),
}).strict() ;
export default ServingUpdateManyArgsSchema;