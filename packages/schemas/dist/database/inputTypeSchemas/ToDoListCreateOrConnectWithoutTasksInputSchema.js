import { z } from 'zod';
import { ToDoListWhereUniqueInputSchema } from './ToDoListWhereUniqueInputSchema.js';
import { ToDoListCreateWithoutTasksInputSchema } from './ToDoListCreateWithoutTasksInputSchema.js';
import { ToDoListUncheckedCreateWithoutTasksInputSchema } from './ToDoListUncheckedCreateWithoutTasksInputSchema.js';
export const ToDoListCreateOrConnectWithoutTasksInputSchema = z.object({
    where: z.lazy(() => ToDoListWhereUniqueInputSchema),
    create: z.union([z.lazy(() => ToDoListCreateWithoutTasksInputSchema), z.lazy(() => ToDoListUncheckedCreateWithoutTasksInputSchema)]),
}).strict();
export default ToDoListCreateOrConnectWithoutTasksInputSchema;
