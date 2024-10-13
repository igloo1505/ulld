import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/DietUpdateManyMutationInputSchema.js
..//inputTypeSchemas/DietUncheckedUpdateManyInputSchema.js
..//inputTypeSchemas/DietWhereInputSchema.js
export const DietUpdateManyArgsSchema: z.ZodType<Prisma.DietUpdateManyArgs> = z.object({
  data: z.union([ DietUpdateManyMutationInputSchema,DietUncheckedUpdateManyInputSchema ]),
  where: DietWhereInputSchema.optional(),
}).strict() ;
export default DietUpdateManyArgsSchema;