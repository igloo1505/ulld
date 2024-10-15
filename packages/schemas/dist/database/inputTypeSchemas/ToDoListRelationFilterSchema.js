import { z } from 'zod';
import { ToDoWhereInputSchema } from './ToDoWhereInputSchema.js';
export const ToDoListRelationFilterSchema = z.object({
    every: z.lazy(() => ToDoWhereInputSchema).optional(),
    some: z.lazy(() => ToDoWhereInputSchema).optional(),
    none: z.lazy(() => ToDoWhereInputSchema).optional()
}).strict();
export default ToDoListRelationFilterSchema;
