import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DietUpdateManyMutationInputSchema } from '../inputTypeSchemas/DietUpdateManyMutationInputSchema'
import { DietUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/DietUncheckedUpdateManyInputSchema'
import { DietWhereInputSchema } from '../inputTypeSchemas/DietWhereInputSchema'

export const DietUpdateManyArgsSchema: z.ZodType<Prisma.DietUpdateManyArgs> = z.object({
  data: z.union([ DietUpdateManyMutationInputSchema,DietUncheckedUpdateManyInputSchema ]),
  where: DietWhereInputSchema.optional(),
}).strict() ;

export default DietUpdateManyArgsSchema;
