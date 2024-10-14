import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { CitationsGroupUpdateManyMutationInputSchema } from '../inputTypeSchemas/CitationsGroupUpdateManyMutationInputSchema.js'
import { CitationsGroupUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/CitationsGroupUncheckedUpdateManyInputSchema.js'
import { CitationsGroupWhereInputSchema } from '../inputTypeSchemas/CitationsGroupWhereInputSchema.js'
export const CitationsGroupUpdateManyArgsSchema: z.ZodType<Prisma.CitationsGroupUpdateManyArgs> = z.object({
  data: z.union([ CitationsGroupUpdateManyMutationInputSchema,CitationsGroupUncheckedUpdateManyInputSchema ]),
  where: CitationsGroupWhereInputSchema.optional(),
}).strict() ;
export default CitationsGroupUpdateManyArgsSchema;