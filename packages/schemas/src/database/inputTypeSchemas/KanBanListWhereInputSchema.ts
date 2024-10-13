import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IntFilterSchema } from '../IntFilterSchema.js';
import { StringNullableFilterSchema } from '../StringNullableFilterSchema.js';
import { IntNullableFilterSchema } from '../IntNullableFilterSchema.js';
import { KanBanCardListRelationFilterSchema } from '../KanBanCardListRelationFilterSchema.js';
import { KanbanNullableRelationFilterSchema } from '../KanbanNullableRelationFilterSchema.js';
import { KanbanWhereInputSchema } from '../KanbanWhereInputSchema.js';
export const KanBanListWhereInputSchema: z.ZodType<Prisma.KanBanListWhereInput> = z.object({
  AND: z.union([ z.lazy(() => KanBanListWhereInputSchema),z.lazy(() => KanBanListWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => KanBanListWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => KanBanListWhereInputSchema),z.lazy(() => KanBanListWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  indexWithinBoard: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  boardId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  cards: z.lazy(() => KanBanCardListRelationFilterSchema).optional(),
  Kanban: z.union([ z.lazy(() => KanbanNullableRelationFilterSchema),z.lazy(() => KanbanWhereInputSchema) ]).optional().nullable(),
}).strict();
export default KanBanListWhereInputSchema;