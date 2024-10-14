import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { DJTCreateInputSchema } from '../inputTypeSchemas/DJTCreateInputSchema.js'
import { DJTUncheckedCreateInputSchema } from '../inputTypeSchemas/DJTUncheckedCreateInputSchema.js'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const DJTSelectSchema: z.ZodType<Prisma.DJTSelect> = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  data: z.boolean().optional(),
}).strict()
export const DJTCreateArgsSchema: z.ZodType<Prisma.DJTCreateArgs> = z.object({
  select: DJTSelectSchema.optional(),
  data: z.union([ DJTCreateInputSchema,DJTUncheckedCreateInputSchema ]),
}).strict() ;
export default DJTCreateArgsSchema;