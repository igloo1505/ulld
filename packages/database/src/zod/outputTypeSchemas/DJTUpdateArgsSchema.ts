import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DJTUpdateInputSchema } from '../inputTypeSchemas/DJTUpdateInputSchema'
import { DJTUncheckedUpdateInputSchema } from '../inputTypeSchemas/DJTUncheckedUpdateInputSchema'
import { DJTWhereUniqueInputSchema } from '../inputTypeSchemas/DJTWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DJTSelectSchema: z.ZodType<Prisma.DJTSelect> = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  data: z.boolean().optional(),
}).strict()

export const DJTUpdateArgsSchema: z.ZodType<Prisma.DJTUpdateArgs> = z.object({
  select: DJTSelectSchema.optional(),
  data: z.union([ DJTUpdateInputSchema,DJTUncheckedUpdateInputSchema ]),
  where: DJTWhereUniqueInputSchema,
}).strict() ;

export default DJTUpdateArgsSchema;
