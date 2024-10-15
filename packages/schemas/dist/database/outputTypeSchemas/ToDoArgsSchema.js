import { z } from 'zod';
import { ToDoSelectSchema } from '../inputTypeSchemas/ToDoSelectSchema.js';
import { ToDoIncludeSchema } from '../inputTypeSchemas/ToDoIncludeSchema.js';
export const ToDoArgsSchema = z.object({
    select: z.lazy(() => ToDoSelectSchema).optional(),
    include: z.lazy(() => ToDoIncludeSchema).optional(),
}).strict();
export default ToDoArgsSchema;
