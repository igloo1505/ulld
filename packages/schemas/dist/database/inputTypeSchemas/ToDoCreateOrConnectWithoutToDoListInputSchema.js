import { z } from 'zod';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema.js';
import { ToDoCreateWithoutToDoListInputSchema } from './ToDoCreateWithoutToDoListInputSchema.js';
import { ToDoUncheckedCreateWithoutToDoListInputSchema } from './ToDoUncheckedCreateWithoutToDoListInputSchema.js';
export const ToDoCreateOrConnectWithoutToDoListInputSchema = z.object({
    where: z.lazy(() => ToDoWhereUniqueInputSchema),
    create: z.union([z.lazy(() => ToDoCreateWithoutToDoListInputSchema), z.lazy(() => ToDoUncheckedCreateWithoutToDoListInputSchema)]),
}).strict();
export default ToDoCreateOrConnectWithoutToDoListInputSchema;
