import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServingWhereInputSchema } from '../inputTypeSchemas/ServingWhereInputSchema'

export const ServingDeleteManyArgsSchema: z.ZodType<Prisma.ServingDeleteManyArgs> = z.object({
  where: ServingWhereInputSchema.optional(),
}).strict() ;

export default ServingDeleteManyArgsSchema;
