import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { CitationsGroupWhereInputSchema } from '../inputTypeSchemas/CitationsGroupWhereInputSchema.js'
export const CitationsGroupDeleteManyArgsSchema: z.ZodType<Prisma.CitationsGroupDeleteManyArgs> = z.object({
  where: CitationsGroupWhereInputSchema.optional(),
}).strict() ;
export default CitationsGroupDeleteManyArgsSchema;