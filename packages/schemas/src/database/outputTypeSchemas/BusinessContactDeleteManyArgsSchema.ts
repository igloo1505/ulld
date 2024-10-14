import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BusinessContactWhereInputSchema } from '../inputTypeSchemas/BusinessContactWhereInputSchema'

export const BusinessContactDeleteManyArgsSchema: z.ZodType<Prisma.BusinessContactDeleteManyArgs> = z.object({
  where: BusinessContactWhereInputSchema.optional(),
}).strict() ;

export default BusinessContactDeleteManyArgsSchema;
