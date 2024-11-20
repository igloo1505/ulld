import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KanBanListIncludeSchema } from '../inputTypeSchemas/KanBanListIncludeSchema'
import { KanBanListUpdateInputSchema } from '../inputTypeSchemas/KanBanListUpdateInputSchema'
import { KanBanListUncheckedUpdateInputSchema } from '../inputTypeSchemas/KanBanListUncheckedUpdateInputSchema'
import { KanBanListWhereUniqueInputSchema } from '../inputTypeSchemas/KanBanListWhereUniqueInputSchema'
import { KanBanCardFindManyArgsSchema } from "../outputTypeSchemas/KanBanCardFindManyArgsSchema"
import { KanbanArgsSchema } from "../outputTypeSchemas/KanbanArgsSchema"
import { KanBanListCountOutputTypeArgsSchema } from "../outputTypeSchemas/KanBanListCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const KanBanListSelectSchema: z.ZodType<Prisma.KanBanListSelect> = z.object({
  id: z.boolean().optional(),
  indexWithinBoard: z.boolean().optional(),
  title: z.boolean().optional(),
  boardId: z.boolean().optional(),
  cards: z.union([z.boolean(),z.lazy(() => KanBanCardFindManyArgsSchema)]).optional(),
  Kanban: z.union([z.boolean(),z.lazy(() => KanbanArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => KanBanListCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const KanBanListUpdateArgsSchema: z.ZodType<Prisma.KanBanListUpdateArgs> = z.object({
  select: KanBanListSelectSchema.optional(),
  include: KanBanListIncludeSchema.optional(),
  data: z.union([ KanBanListUpdateInputSchema,KanBanListUncheckedUpdateInputSchema ]),
  where: KanBanListWhereUniqueInputSchema,
}).strict() ;

export default KanBanListUpdateArgsSchema;
