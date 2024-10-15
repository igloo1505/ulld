import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ToDoWhereInputSchema } from './ToDoWhereInputSchema.js';
import { DateTimeFilterSchema } from './DateTimeFilterSchema.js';
import { StringFilterSchema } from './StringFilterSchema.js';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema.js';
import { StringNullableFilterSchema } from './StringNullableFilterSchema.js';
import { IntNullableFilterSchema } from './IntNullableFilterSchema.js';
import { EnumTaskCategoryNullableFilterSchema } from './EnumTaskCategoryNullableFilterSchema.js';
import { TaskCategorySchema } from './TaskCategorySchema.js';
import { BoolFilterSchema } from './BoolFilterSchema.js';
import { IntFilterSchema } from './IntFilterSchema.js';
import { MdxNoteListRelationFilterSchema } from './MdxNoteListRelationFilterSchema.js';
import { TagListRelationFilterSchema } from './TagListRelationFilterSchema.js';
import { TopicListRelationFilterSchema } from './TopicListRelationFilterSchema.js';
import { SubjectListRelationFilterSchema } from './SubjectListRelationFilterSchema.js';
import { ToDoNullableRelationFilterSchema } from './ToDoNullableRelationFilterSchema.js';
import { ToDoListRelationFilterSchema } from './ToDoListRelationFilterSchema.js';
import { ToDoListNullableRelationFilterSchema } from './ToDoListNullableRelationFilterSchema.js';
import { ToDoListWhereInputSchema } from './ToDoListWhereInputSchema.js';
export const ToDoWhereUniqueInputSchema: z.ZodType<Prisma.ToDoWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => ToDoWhereInputSchema),z.lazy(() => ToDoWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ToDoWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ToDoWhereInputSchema),z.lazy(() => ToDoWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  task: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dueAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  details: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  parentId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  category: z.union([ z.lazy(() => EnumTaskCategoryNullableFilterSchema),z.lazy(() => TaskCategorySchema) ]).optional().nullable(),
  bookmarked: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  status: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  priority: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  toDoListId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  completedOn: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  associatedNotes: z.lazy(() => MdxNoteListRelationFilterSchema).optional(),
  tags: z.lazy(() => TagListRelationFilterSchema).optional(),
  topics: z.lazy(() => TopicListRelationFilterSchema).optional(),
  subjects: z.lazy(() => SubjectListRelationFilterSchema).optional(),
  parent: z.union([ z.lazy(() => ToDoNullableRelationFilterSchema),z.lazy(() => ToDoWhereInputSchema) ]).optional().nullable(),
  child: z.lazy(() => ToDoListRelationFilterSchema).optional(),
  ToDoList: z.union([ z.lazy(() => ToDoListNullableRelationFilterSchema),z.lazy(() => ToDoListWhereInputSchema) ]).optional().nullable(),
}).strict());
export default ToDoWhereUniqueInputSchema;