import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DJTWhereUniqueInputSchema } from '../inputTypeSchemas/DJTWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DJTSelectSchema: z.ZodType<Prisma.DJTSelect> = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  data: z.boolean().optional(),
}).strict()

export const DJTFindUniqueArgsSchema: z.ZodType<Prisma.DJTFindUniqueArgs> = z.object({
  select: DJTSelectSchema.optional(),
  where: DJTWhereUniqueInputSchema,
}).strict() ;

export default DJTFindUniqueArgsSchema;
