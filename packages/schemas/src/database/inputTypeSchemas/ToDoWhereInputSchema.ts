import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { EnumTaskCategoryNullableFilterSchema } from './EnumTaskCategoryNullableFilterSchema';
import { TaskCategorySchema } from './TaskCategorySchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { MdxNoteListRelationFilterSchema } from './MdxNoteListRelationFilterSchema';
import { TagListRelationFilterSchema } from './TagListRelationFilterSchema';
import { TopicListRelationFilterSchema } from './TopicListRelationFilterSchema';
import { SubjectListRelationFilterSchema } from './SubjectListRelationFilterSchema';
import { ToDoNullableRelationFilterSchema } from './ToDoNullableRelationFilterSchema';
import { ToDoListRelationFilterSchema } from './ToDoListRelationFilterSchema';
import { ToDoListNullableRelationFilterSchema } from './ToDoListNullableRelationFilterSchema';
import { ToDoListWhereInputSchema } from './ToDoListWhereInputSchema';

export const ToDoWhereInputSchema: z.ZodType<Prisma.ToDoWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ToDoWhereInputSchema),z.lazy(() => ToDoWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ToDoWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ToDoWhereInputSchema),z.lazy(() => ToDoWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  task: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dueAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  details: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  parentId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  category: z.union([ z.lazy(() => EnumTaskCategoryNullableFilterSchema),z.lazy(() => TaskCategorySchema) ]).optional().nullable(),
  bookmarked: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  status: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  priority: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  toDoListId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  completedOn: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  associatedNotes: z.lazy(() => MdxNoteListRelationFilterSchema).optional(),
  tags: z.lazy(() => TagListRelationFilterSchema).optional(),
  topics: z.lazy(() => TopicListRelationFilterSchema).optional(),
  subjects: z.lazy(() => SubjectListRelationFilterSchema).optional(),
  parent: z.union([ z.lazy(() => ToDoNullableRelationFilterSchema),z.lazy(() => ToDoWhereInputSchema) ]).optional().nullable(),
  child: z.lazy(() => ToDoListRelationFilterSchema).optional(),
  ToDoList: z.union([ z.lazy(() => ToDoListNullableRelationFilterSchema),z.lazy(() => ToDoListWhereInputSchema) ]).optional().nullable(),
}).strict();

export default ToDoWhereInputSchema;
