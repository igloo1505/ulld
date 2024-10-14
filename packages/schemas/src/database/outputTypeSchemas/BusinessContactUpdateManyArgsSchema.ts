import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BusinessContactUpdateManyMutationInputSchema } from '../inputTypeSchemas/BusinessContactUpdateManyMutationInputSchema'
import { BusinessContactUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/BusinessContactUncheckedUpdateManyInputSchema'
import { BusinessContactWhereInputSchema } from '../inputTypeSchemas/BusinessContactWhereInputSchema'

export const BusinessContactUpdateManyArgsSchema: z.ZodType<Prisma.BusinessContactUpdateManyArgs> = z.object({
  data: z.union([ BusinessContactUpdateManyMutationInputSchema,BusinessContactUncheckedUpdateManyInputSchema ]),
  where: BusinessContactWhereInputSchema.optional(),
}).strict() ;

export default BusinessContactUpdateManyArgsSchema;
