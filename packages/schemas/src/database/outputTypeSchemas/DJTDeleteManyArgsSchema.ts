import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DJTWhereInputSchema } from '../inputTypeSchemas/DJTWhereInputSchema'

export const DJTDeleteManyArgsSchema: z.ZodType<Prisma.DJTDeleteManyArgs> = z.object({
  where: DJTWhereInputSchema.optional(),
}).strict() ;

export default DJTDeleteManyArgsSchema;
