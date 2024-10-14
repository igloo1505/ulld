import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { KanBanCardListRelationFilterSchema } from './KanBanCardListRelationFilterSchema';
import { KanbanNullableRelationFilterSchema } from './KanbanNullableRelationFilterSchema';
import { KanbanWhereInputSchema } from './KanbanWhereInputSchema';

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
