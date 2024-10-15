import { z } from 'zod';
import { ToDoListCreateManyInputSchema } from '../inputTypeSchemas/ToDoListCreateManyInputSchema.js';
export const ToDoListCreateManyAndReturnArgsSchema = z.object({
    data: z.union([ToDoListCreateManyInputSchema, ToDoListCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default ToDoListCreateManyAndReturnArgsSchema;
