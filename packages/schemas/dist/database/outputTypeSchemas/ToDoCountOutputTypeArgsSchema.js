import { z } from 'zod';
import { ToDoCountOutputTypeSelectSchema } from './ToDoCountOutputTypeSelectSchema.js';
export const ToDoCountOutputTypeArgsSchema = z.object({
    select: z.lazy(() => ToDoCountOutputTypeSelectSchema).nullish(),
}).strict();
export default ToDoCountOutputTypeSelectSchema;
