import { z } from 'zod';
import { ToDoListCountOutputTypeSelectSchema } from './ToDoListCountOutputTypeSelectSchema.js';
export const ToDoListCountOutputTypeArgsSchema = z.object({
    select: z.lazy(() => ToDoListCountOutputTypeSelectSchema).nullish(),
}).strict();
export default ToDoListCountOutputTypeSelectSchema;
