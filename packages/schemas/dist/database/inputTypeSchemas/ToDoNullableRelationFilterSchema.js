import { z } from 'zod';
import { ToDoWhereInputSchema } from './ToDoWhereInputSchema.js';
export const ToDoNullableRelationFilterSchema = z.object({
    is: z.lazy(() => ToDoWhereInputSchema).optional().nullable(),
    isNot: z.lazy(() => ToDoWhereInputSchema).optional().nullable()
}).strict();
export default ToDoNullableRelationFilterSchema;
