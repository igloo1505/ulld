import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { DietUpdateManyMutationInputSchema } from '../inputTypeSchemas/DietUpdateManyMutationInputSchema.js'
import { DietUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/DietUncheckedUpdateManyInputSchema.js'
import { DietWhereInputSchema } from '../inputTypeSchemas/DietWhereInputSchema.js'
export const DietUpdateManyArgsSchema: z.ZodType<Prisma.DietUpdateManyArgs> = z.object({
  data: z.union([ DietUpdateManyMutationInputSchema,DietUncheckedUpdateManyInputSchema ]),
  where: DietWhereInputSchema.optional(),
}).strict() ;
export default DietUpdateManyArgsSchema;