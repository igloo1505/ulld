import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CitationsGroupWhereInputSchema } from '../inputTypeSchemas/CitationsGroupWhereInputSchema'

export const CitationsGroupDeleteManyArgsSchema: z.ZodType<Prisma.CitationsGroupDeleteManyArgs> = z.object({
  where: CitationsGroupWhereInputSchema.optional(),
}).strict() ;

export default CitationsGroupDeleteManyArgsSchema;
