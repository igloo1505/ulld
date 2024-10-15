import { z } from 'zod';
import { ToDoListCreateManyInputSchema } from '../inputTypeSchemas/ToDoListCreateManyInputSchema.js';
export const ToDoListCreateManyArgsSchema = z.object({
    data: z.union([ToDoListCreateManyInputSchema, ToDoListCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default ToDoListCreateManyArgsSchema;
