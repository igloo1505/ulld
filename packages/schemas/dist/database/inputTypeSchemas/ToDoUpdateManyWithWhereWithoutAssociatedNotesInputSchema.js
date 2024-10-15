import { z } from 'zod';
import { ToDoScalarWhereInputSchema } from './ToDoScalarWhereInputSchema.js';
import { ToDoUpdateManyMutationInputSchema } from './ToDoUpdateManyMutationInputSchema.js';
import { ToDoUncheckedUpdateManyWithoutAssociatedNotesInputSchema } from './ToDoUncheckedUpdateManyWithoutAssociatedNotesInputSchema.js';
export const ToDoUpdateManyWithWhereWithoutAssociatedNotesInputSchema = z.object({
    where: z.lazy(() => ToDoScalarWhereInputSchema),
    data: z.union([z.lazy(() => ToDoUpdateManyMutationInputSchema), z.lazy(() => ToDoUncheckedUpdateManyWithoutAssociatedNotesInputSchema)]),
}).strict();
export default ToDoUpdateManyWithWhereWithoutAssociatedNotesInputSchema;
