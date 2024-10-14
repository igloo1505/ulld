import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DJTWhereUniqueInputSchema } from '../inputTypeSchemas/DJTWhereUniqueInputSchema'
import { DJTCreateInputSchema } from '../inputTypeSchemas/DJTCreateInputSchema'
import { DJTUncheckedCreateInputSchema } from '../inputTypeSchemas/DJTUncheckedCreateInputSchema'
import { DJTUpdateInputSchema } from '../inputTypeSchemas/DJTUpdateInputSchema'
import { DJTUncheckedUpdateInputSchema } from '../inputTypeSchemas/DJTUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DJTSelectSchema: z.ZodType<Prisma.DJTSelect> = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  data: z.boolean().optional(),
}).strict()

export const DJTUpsertArgsSchema: z.ZodType<Prisma.DJTUpsertArgs> = z.object({
  select: DJTSelectSchema.optional(),
  where: DJTWhereUniqueInputSchema,
  create: z.union([ DJTCreateInputSchema,DJTUncheckedCreateInputSchema ]),
  update: z.union([ DJTUpdateInputSchema,DJTUncheckedUpdateInputSchema ]),
}).strict() ;

export default DJTUpsertArgsSchema;
