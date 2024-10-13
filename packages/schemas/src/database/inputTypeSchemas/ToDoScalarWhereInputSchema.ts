import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IntFilterSchema } from '../IntFilterSchema.js';
import { DateTimeFilterSchema } from '../DateTimeFilterSchema.js';
import { StringFilterSchema } from '../StringFilterSchema.js';
import { DateTimeNullableFilterSchema } from '../DateTimeNullableFilterSchema.js';
import { StringNullableFilterSchema } from '../StringNullableFilterSchema.js';
import { IntNullableFilterSchema } from '../IntNullableFilterSchema.js';
import { EnumTaskCategoryNullableFilterSchema } from '../EnumTaskCategoryNullableFilterSchema.js';
import { TaskCategorySchema } from '../TaskCategorySchema.js';
import { BoolFilterSchema } from '../BoolFilterSchema.js';
export const ToDoScalarWhereInputSchema: z.ZodType<Prisma.ToDoScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ToDoScalarWhereInputSchema),z.lazy(() => ToDoScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ToDoScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ToDoScalarWhereInputSchema),z.lazy(() => ToDoScalarWhereInputSchema).array() ]).optional(),
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
}).strict();
export default ToDoScalarWhereInputSchema;