import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema.js';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema.js';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema.js';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema.js';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema.js';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema.js';
import { EnumTaskCategoryNullableWithAggregatesFilterSchema } from './EnumTaskCategoryNullableWithAggregatesFilterSchema.js';
import { TaskCategorySchema } from './TaskCategorySchema.js';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema.js';
export const ToDoScalarWhereWithAggregatesInputSchema = z.object({
    AND: z.union([z.lazy(() => ToDoScalarWhereWithAggregatesInputSchema), z.lazy(() => ToDoScalarWhereWithAggregatesInputSchema).array()]).optional(),
    OR: z.lazy(() => ToDoScalarWhereWithAggregatesInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => ToDoScalarWhereWithAggregatesInputSchema), z.lazy(() => ToDoScalarWhereWithAggregatesInputSchema).array()]).optional(),
    id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
    task: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
    dueAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()]).optional().nullable(),
    details: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
    parentId: z.union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()]).optional().nullable(),
    category: z.union([z.lazy(() => EnumTaskCategoryNullableWithAggregatesFilterSchema), z.lazy(() => TaskCategorySchema)]).optional().nullable(),
    bookmarked: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
    status: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
    priority: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
    toDoListId: z.union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()]).optional().nullable(),
    completedOn: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()]).optional().nullable(),
}).strict();
export default ToDoScalarWhereWithAggregatesInputSchema;
