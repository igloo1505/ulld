import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServingUpdateManyMutationInputSchema } from '../inputTypeSchemas/ServingUpdateManyMutationInputSchema'
import { ServingUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ServingUncheckedUpdateManyInputSchema'
import { ServingWhereInputSchema } from '../inputTypeSchemas/ServingWhereInputSchema'

export const ServingUpdateManyArgsSchema: z.ZodType<Prisma.ServingUpdateManyArgs> = z.object({
  data: z.union([ ServingUpdateManyMutationInputSchema,ServingUncheckedUpdateManyInputSchema ]),
  where: ServingWhereInputSchema.optional(),
}).strict() ;

export default ServingUpdateManyArgsSchema;
