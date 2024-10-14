import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoListWhereInputSchema } from './ToDoListWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { ToDoListRelationFilterSchema } from './ToDoListRelationFilterSchema';
import { TagListRelationFilterSchema } from './TagListRelationFilterSchema';
import { TopicListRelationFilterSchema } from './TopicListRelationFilterSchema';
import { SubjectListRelationFilterSchema } from './SubjectListRelationFilterSchema';

export const ToDoListWhereUniqueInputSchema: z.ZodType<Prisma.ToDoListWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => ToDoListWhereInputSchema),z.lazy(() => ToDoListWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ToDoListWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ToDoListWhereInputSchema),z.lazy(() => ToDoListWhereInputSchema).array() ]).optional(),
  label: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  lastUpdate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  lastAccess: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  tasks: z.lazy(() => ToDoListRelationFilterSchema).optional(),
  tags: z.lazy(() => TagListRelationFilterSchema).optional(),
  topics: z.lazy(() => TopicListRelationFilterSchema).optional(),
  subjects: z.lazy(() => SubjectListRelationFilterSchema).optional()
}).strict());

export default ToDoListWhereUniqueInputSchema;
