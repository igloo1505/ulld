import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { KanbanWhereInputSchema } from '../KanbanWhereInputSchema.js';
import { StringFilterSchema } from '../StringFilterSchema.js';
import { DateTimeFilterSchema } from '../DateTimeFilterSchema.js';
import { KanBanListListRelationFilterSchema } from '../KanBanListListRelationFilterSchema.js';
import { TagListRelationFilterSchema } from '../TagListRelationFilterSchema.js';
import { SubjectListRelationFilterSchema } from '../SubjectListRelationFilterSchema.js';
import { TopicListRelationFilterSchema } from '../TopicListRelationFilterSchema.js';
export const KanbanWhereUniqueInputSchema: z.ZodType<Prisma.KanbanWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => KanbanWhereInputSchema),z.lazy(() => KanbanWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => KanbanWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => KanbanWhereInputSchema),z.lazy(() => KanbanWhereInputSchema).array() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  lastUpdate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  lists: z.lazy(() => KanBanListListRelationFilterSchema).optional(),
  tags: z.lazy(() => TagListRelationFilterSchema).optional(),
  subjects: z.lazy(() => SubjectListRelationFilterSchema).optional(),
  topics: z.lazy(() => TopicListRelationFilterSchema).optional()
}).strict());
export default KanbanWhereUniqueInputSchema;