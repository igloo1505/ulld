import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { ServingWhereInputSchema } from '../inputTypeSchemas/ServingWhereInputSchema.js'
export const ServingDeleteManyArgsSchema: z.ZodType<Prisma.ServingDeleteManyArgs> = z.object({
  where: ServingWhereInputSchema.optional(),
}).strict() ;
export default ServingDeleteManyArgsSchema;