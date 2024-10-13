import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/CitationsGroupUpdateManyMutationInputSchema.js
..//inputTypeSchemas/CitationsGroupUncheckedUpdateManyInputSchema.js
..//inputTypeSchemas/CitationsGroupWhereInputSchema.js
export const CitationsGroupUpdateManyArgsSchema: z.ZodType<Prisma.CitationsGroupUpdateManyArgs> = z.object({
  data: z.union([ CitationsGroupUpdateManyMutationInputSchema,CitationsGroupUncheckedUpdateManyInputSchema ]),
  where: CitationsGroupWhereInputSchema.optional(),
}).strict() ;
export default CitationsGroupUpdateManyArgsSchema;