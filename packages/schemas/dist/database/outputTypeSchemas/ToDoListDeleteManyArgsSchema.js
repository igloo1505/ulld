import { z } from 'zod';
import { ToDoListWhereInputSchema } from '../inputTypeSchemas/ToDoListWhereInputSchema.js';
export const ToDoListDeleteManyArgsSchema = z.object({
    where: ToDoListWhereInputSchema.optional(),
}).strict();
export default ToDoListDeleteManyArgsSchema;
