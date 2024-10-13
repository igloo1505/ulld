import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/KanBanCardIncludeSchema.js
..//inputTypeSchemas/KanBanCardWhereUniqueInputSchema.js
..//inputTypeSchemas/KanBanCardCreateInputSchema.js
..//inputTypeSchemas/KanBanCardUncheckedCreateInputSchema.js
..//inputTypeSchemas/KanBanCardUpdateInputSchema.js
..//inputTypeSchemas/KanBanCardUncheckedUpdateInputSchema.js
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
export const KanBanCardUpsertArgsSchema: z.ZodType<Prisma.KanBanCardUpsertArgs> = z.object({
  select: KanBanCardSelectSchema.optional(),
  include: KanBanCardIncludeSchema.optional(),
  where: KanBanCardWhereUniqueInputSchema,
  create: z.union([ KanBanCardCreateInputSchema,KanBanCardUncheckedCreateInputSchema ]),
  update: z.union([ KanBanCardUpdateInputSchema,KanBanCardUncheckedUpdateInputSchema ]),
}).strict() ;
export default KanBanCardUpsertArgsSchema;