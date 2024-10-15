import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { RandomImageWhereUniqueInputSchema } from '../inputTypeSchemas/RandomImageWhereUniqueInputSchema.js'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const RandomImageSelectSchema: z.ZodType<Prisma.RandomImageSelect> = z.object({
  path: z.boolean().optional(),
  createdAt: z.boolean().optional(),
}).strict()
export const RandomImageFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.RandomImageFindUniqueOrThrowArgs> = z.object({
  select: RandomImageSelectSchema.optional(),
  where: RandomImageWhereUniqueInputSchema,
}).strict() ;
export default RandomImageFindUniqueOrThrowArgsSchema;