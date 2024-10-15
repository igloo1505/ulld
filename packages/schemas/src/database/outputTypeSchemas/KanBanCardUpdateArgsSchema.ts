import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { KanBanCardIncludeSchema } from '../inputTypeSchemas/KanBanCardIncludeSchema.js'
import { KanBanCardUpdateInputSchema } from '../inputTypeSchemas/KanBanCardUpdateInputSchema.js'
import { KanBanCardUncheckedUpdateInputSchema } from '../inputTypeSchemas/KanBanCardUncheckedUpdateInputSchema.js'
import { KanBanCardWhereUniqueInputSchema } from '../inputTypeSchemas/KanBanCardWhereUniqueInputSchema.js'
import { KanBanListArgsSchema } from "../outputTypeSchemas/KanBanListArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const KanBanCardSelectSchema: z.ZodType<Prisma.KanBanCardSelect> = z.object({
  id: z.boolean().optional(),
  listId: z.boolean().optional(),
  indexWithinList: z.boolean().optional(),
  label: z.boolean().optional(),
  details: z.boolean().optional(),
  KanBanList: z.union([z.boolean(),z.lazy(() => KanBanListArgsSchema)]).optional(),
}).strict()
export const KanBanCardUpdateArgsSchema: z.ZodType<Prisma.KanBanCardUpdateArgs> = z.object({
  select: KanBanCardSelectSchema.optional(),
  include: KanBanCardIncludeSchema.optional(),
  data: z.union([ KanBanCardUpdateInputSchema,KanBanCardUncheckedUpdateInputSchema ]),
  where: KanBanCardWhereUniqueInputSchema,
}).strict() ;
export default KanBanCardUpdateArgsSchema;