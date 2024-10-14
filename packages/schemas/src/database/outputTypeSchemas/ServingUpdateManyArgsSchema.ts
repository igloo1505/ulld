import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { ServingUpdateManyMutationInputSchema } from '../inputTypeSchemas/ServingUpdateManyMutationInputSchema.js'
import { ServingUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ServingUncheckedUpdateManyInputSchema.js'
import { ServingWhereInputSchema } from '../inputTypeSchemas/ServingWhereInputSchema.js'
export const ServingUpdateManyArgsSchema: z.ZodType<Prisma.ServingUpdateManyArgs> = z.object({
  data: z.union([ ServingUpdateManyMutationInputSchema,ServingUncheckedUpdateManyInputSchema ]),
  where: ServingWhereInputSchema.optional(),
}).strict() ;
export default ServingUpdateManyArgsSchema;