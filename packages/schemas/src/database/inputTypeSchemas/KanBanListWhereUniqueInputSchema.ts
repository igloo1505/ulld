import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { KanBanListWhereInputSchema } from './KanBanListWhereInputSchema.js';
import { IntFilterSchema } from './IntFilterSchema.js';
import { StringNullableFilterSchema } from './StringNullableFilterSchema.js';
import { IntNullableFilterSchema } from './IntNullableFilterSchema.js';
import { KanBanCardListRelationFilterSchema } from './KanBanCardListRelationFilterSchema.js';
import { KanbanNullableRelationFilterSchema } from './KanbanNullableRelationFilterSchema.js';
import { KanbanWhereInputSchema } from './KanbanWhereInputSchema.js';
export const KanBanListWhereUniqueInputSchema: z.ZodType<Prisma.KanBanListWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => KanBanListWhereInputSchema),z.lazy(() => KanBanListWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => KanBanListWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => KanBanListWhereInputSchema),z.lazy(() => KanBanListWhereInputSchema).array() ]).optional(),
  indexWithinBoard: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  title: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  boardId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  cards: z.lazy(() => KanBanCardListRelationFilterSchema).optional(),
  Kanban: z.union([ z.lazy(() => KanbanNullableRelationFilterSchema),z.lazy(() => KanbanWhereInputSchema) ]).optional().nullable(),
}).strict());
export default KanBanListWhereUniqueInputSchema;