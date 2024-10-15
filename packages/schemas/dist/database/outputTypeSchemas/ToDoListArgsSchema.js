import { z } from 'zod';
import { ToDoListSelectSchema } from '../inputTypeSchemas/ToDoListSelectSchema.js';
import { ToDoListIncludeSchema } from '../inputTypeSchemas/ToDoListIncludeSchema.js';
export const ToDoListArgsSchema = z.object({
    select: z.lazy(() => ToDoListSelectSchema).optional(),
    include: z.lazy(() => ToDoListIncludeSchema).optional(),
}).strict();
export default ToDoListArgsSchema;
