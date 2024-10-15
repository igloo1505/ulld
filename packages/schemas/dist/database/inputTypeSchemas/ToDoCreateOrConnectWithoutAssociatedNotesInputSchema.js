import { z } from 'zod';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema.js';
import { ToDoCreateWithoutAssociatedNotesInputSchema } from './ToDoCreateWithoutAssociatedNotesInputSchema.js';
import { ToDoUncheckedCreateWithoutAssociatedNotesInputSchema } from './ToDoUncheckedCreateWithoutAssociatedNotesInputSchema.js';
export const ToDoCreateOrConnectWithoutAssociatedNotesInputSchema = z.object({
    where: z.lazy(() => ToDoWhereUniqueInputSchema),
    create: z.union([z.lazy(() => ToDoCreateWithoutAssociatedNotesInputSchema), z.lazy(() => ToDoUncheckedCreateWithoutAssociatedNotesInputSchema)]),
}).strict();
export default ToDoCreateOrConnectWithoutAssociatedNotesInputSchema;
