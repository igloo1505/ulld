import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DietWhereInputSchema } from '../inputTypeSchemas/DietWhereInputSchema'

export const DietDeleteManyArgsSchema: z.ZodType<Prisma.DietDeleteManyArgs> = z.object({
  where: DietWhereInputSchema.optional(),
}).strict() ;

export default DietDeleteManyArgsSchema;
