import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema.js';
import { StringFilterSchema } from './StringFilterSchema.js';
import { DateTimeFilterSchema } from './DateTimeFilterSchema.js';
import { ToDoListRelationFilterSchema } from './ToDoListRelationFilterSchema.js';
import { TagListRelationFilterSchema } from './TagListRelationFilterSchema.js';
import { TopicListRelationFilterSchema } from './TopicListRelationFilterSchema.js';
import { SubjectListRelationFilterSchema } from './SubjectListRelationFilterSchema.js';
export const ToDoListWhereInputSchema = z.object({
    AND: z.union([z.lazy(() => ToDoListWhereInputSchema), z.lazy(() => ToDoListWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => ToDoListWhereInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => ToDoListWhereInputSchema), z.lazy(() => ToDoListWhereInputSchema).array()]).optional(),
    id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    label: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    lastUpdate: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    lastAccess: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    tasks: z.lazy(() => ToDoListRelationFilterSchema).optional(),
    tags: z.lazy(() => TagListRelationFilterSchema).optional(),
    topics: z.lazy(() => TopicListRelationFilterSchema).optional(),
    subjects: z.lazy(() => SubjectListRelationFilterSchema).optional()
}).strict();
export default ToDoListWhereInputSchema;
