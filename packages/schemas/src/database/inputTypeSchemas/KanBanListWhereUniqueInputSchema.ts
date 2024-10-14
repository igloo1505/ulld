import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanBanListWhereInputSchema } from './KanBanListWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { KanBanCardListRelationFilterSchema } from './KanBanCardListRelationFilterSchema';
import { KanbanNullableRelationFilterSchema } from './KanbanNullableRelationFilterSchema';
import { KanbanWhereInputSchema } from './KanbanWhereInputSchema';

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
