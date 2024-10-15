import { z } from 'zod';
import { ToDoCreateManyInputSchema } from '../inputTypeSchemas/ToDoCreateManyInputSchema.js';
export const ToDoCreateManyArgsSchema = z.object({
    data: z.union([ToDoCreateManyInputSchema, ToDoCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default ToDoCreateManyArgsSchema;
