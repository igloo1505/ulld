import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CitationsGroupUpdateManyMutationInputSchema } from '../inputTypeSchemas/CitationsGroupUpdateManyMutationInputSchema'
import { CitationsGroupUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/CitationsGroupUncheckedUpdateManyInputSchema'
import { CitationsGroupWhereInputSchema } from '../inputTypeSchemas/CitationsGroupWhereInputSchema'

export const CitationsGroupUpdateManyArgsSchema: z.ZodType<Prisma.CitationsGroupUpdateManyArgs> = z.object({
  data: z.union([ CitationsGroupUpdateManyMutationInputSchema,CitationsGroupUncheckedUpdateManyInputSchema ]),
  where: CitationsGroupWhereInputSchema.optional(),
}).strict() ;

export default CitationsGroupUpdateManyArgsSchema;
