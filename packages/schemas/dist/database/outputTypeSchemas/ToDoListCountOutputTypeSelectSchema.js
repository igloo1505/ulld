import { z } from 'zod';
export const ToDoListCountOutputTypeSelectSchema = z.object({
    tasks: z.boolean().optional(),
    tags: z.boolean().optional(),
    topics: z.boolean().optional(),
    subjects: z.boolean().optional(),
}).strict();
export default ToDoListCountOutputTypeSelectSchema;
