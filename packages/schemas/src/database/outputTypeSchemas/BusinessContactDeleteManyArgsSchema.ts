import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { BusinessContactWhereInputSchema } from '../inputTypeSchemas/BusinessContactWhereInputSchema.js'
export const BusinessContactDeleteManyArgsSchema: z.ZodType<Prisma.BusinessContactDeleteManyArgs> = z.object({
  where: BusinessContactWhereInputSchema.optional(),
}).strict() ;
export default BusinessContactDeleteManyArgsSchema;