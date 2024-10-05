import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { KanBanListListRelationFilterSchema } from './KanBanListListRelationFilterSchema';
import { TagListRelationFilterSchema } from './TagListRelationFilterSchema';
import { SubjectListRelationFilterSchema } from './SubjectListRelationFilterSchema';
import { TopicListRelationFilterSchema } from './TopicListRelationFilterSchema';

export const KanbanWhereInputSchema: z.ZodType<Prisma.KanbanWhereInput> = z.object({
  AND: z.union([ z.lazy(() => KanbanWhereInputSchema),z.lazy(() => KanbanWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => KanbanWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => KanbanWhereInputSchema),z.lazy(() => KanbanWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  lastUpdate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  lists: z.lazy(() => KanBanListListRelationFilterSchema).optional(),
  tags: z.lazy(() => TagListRelationFilterSchema).optional(),
  subjects: z.lazy(() => SubjectListRelationFilterSchema).optional(),
  topics: z.lazy(() => TopicListRelationFilterSchema).optional()
}).strict();

export default KanbanWhereInputSchema;
