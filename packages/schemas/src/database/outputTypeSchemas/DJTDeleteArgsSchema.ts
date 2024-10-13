import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/DJTWhereUniqueInputSchema.js
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const DJTSelectSchema: z.ZodType<Prisma.DJTSelect> = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  data: z.boolean().optional(),
}).strict()
export const DJTDeleteArgsSchema: z.ZodType<Prisma.DJTDeleteArgs> = z.object({
  select: DJTSelectSchema.optional(),
  where: DJTWhereUniqueInputSchema,
}).strict() ;
export default DJTDeleteArgsSchema;