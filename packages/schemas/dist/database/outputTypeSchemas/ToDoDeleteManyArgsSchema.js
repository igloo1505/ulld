import { z } from 'zod';
import { ToDoWhereInputSchema } from '../inputTypeSchemas/ToDoWhereInputSchema.js';
export const ToDoDeleteManyArgsSchema = z.object({
    where: ToDoWhereInputSchema.optional(),
}).strict();
export default ToDoDeleteManyArgsSchema;
