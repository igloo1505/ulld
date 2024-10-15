import { z } from 'zod';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema.js';
import { ToDoUpdateWithoutAssociatedNotesInputSchema } from './ToDoUpdateWithoutAssociatedNotesInputSchema.js';
import { ToDoUncheckedUpdateWithoutAssociatedNotesInputSchema } from './ToDoUncheckedUpdateWithoutAssociatedNotesInputSchema.js';
export const ToDoUpdateWithWhereUniqueWithoutAssociatedNotesInputSchema = z.object({
    where: z.lazy(() => ToDoWhereUniqueInputSchema),
    data: z.union([z.lazy(() => ToDoUpdateWithoutAssociatedNotesInputSchema), z.lazy(() => ToDoUncheckedUpdateWithoutAssociatedNotesInputSchema)]),
}).strict();
export default ToDoUpdateWithWhereUniqueWithoutAssociatedNotesInputSchema;
