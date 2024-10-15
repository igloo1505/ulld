import { z } from 'zod';
export const ToDoCountOutputTypeSelectSchema = z.object({
    associatedNotes: z.boolean().optional(),
    tags: z.boolean().optional(),
    topics: z.boolean().optional(),
    subjects: z.boolean().optional(),
    child: z.boolean().optional(),
}).strict();
export default ToDoCountOutputTypeSelectSchema;
