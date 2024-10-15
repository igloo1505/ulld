import { z } from 'zod';
import { ToDoListUpdateWithoutTasksInputSchema } from './ToDoListUpdateWithoutTasksInputSchema.js';
import { ToDoListUncheckedUpdateWithoutTasksInputSchema } from './ToDoListUncheckedUpdateWithoutTasksInputSchema.js';
import { ToDoListCreateWithoutTasksInputSchema } from './ToDoListCreateWithoutTasksInputSchema.js';
import { ToDoListUncheckedCreateWithoutTasksInputSchema } from './ToDoListUncheckedCreateWithoutTasksInputSchema.js';
import { ToDoListWhereInputSchema } from './ToDoListWhereInputSchema.js';
export const ToDoListUpsertWithoutTasksInputSchema = z.object({
    update: z.union([z.lazy(() => ToDoListUpdateWithoutTasksInputSchema), z.lazy(() => ToDoListUncheckedUpdateWithoutTasksInputSchema)]),
    create: z.union([z.lazy(() => ToDoListCreateWithoutTasksInputSchema), z.lazy(() => ToDoListUncheckedCreateWithoutTasksInputSchema)]),
    where: z.lazy(() => ToDoListWhereInputSchema).optional()
}).strict();
export default ToDoListUpsertWithoutTasksInputSchema;
