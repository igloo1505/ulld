import { z } from 'zod';
import { ToDoListCreateWithoutTasksInputSchema } from './ToDoListCreateWithoutTasksInputSchema.js';
import { ToDoListUncheckedCreateWithoutTasksInputSchema } from './ToDoListUncheckedCreateWithoutTasksInputSchema.js';
import { ToDoListCreateOrConnectWithoutTasksInputSchema } from './ToDoListCreateOrConnectWithoutTasksInputSchema.js';
import { ToDoListUpsertWithoutTasksInputSchema } from './ToDoListUpsertWithoutTasksInputSchema.js';
import { ToDoListWhereInputSchema } from './ToDoListWhereInputSchema.js';
import { ToDoListWhereUniqueInputSchema } from './ToDoListWhereUniqueInputSchema.js';
import { ToDoListUpdateToOneWithWhereWithoutTasksInputSchema } from './ToDoListUpdateToOneWithWhereWithoutTasksInputSchema.js';
import { ToDoListUpdateWithoutTasksInputSchema } from './ToDoListUpdateWithoutTasksInputSchema.js';
import { ToDoListUncheckedUpdateWithoutTasksInputSchema } from './ToDoListUncheckedUpdateWithoutTasksInputSchema.js';
export const ToDoListUpdateOneWithoutTasksNestedInputSchema = z.object({
    create: z.union([z.lazy(() => ToDoListCreateWithoutTasksInputSchema), z.lazy(() => ToDoListUncheckedCreateWithoutTasksInputSchema)]).optional(),
    connectOrCreate: z.lazy(() => ToDoListCreateOrConnectWithoutTasksInputSchema).optional(),
    upsert: z.lazy(() => ToDoListUpsertWithoutTasksInputSchema).optional(),
    disconnect: z.union([z.boolean(), z.lazy(() => ToDoListWhereInputSchema)]).optional(),
    delete: z.union([z.boolean(), z.lazy(() => ToDoListWhereInputSchema)]).optional(),
    connect: z.lazy(() => ToDoListWhereUniqueInputSchema).optional(),
    update: z.union([z.lazy(() => ToDoListUpdateToOneWithWhereWithoutTasksInputSchema), z.lazy(() => ToDoListUpdateWithoutTasksInputSchema), z.lazy(() => ToDoListUncheckedUpdateWithoutTasksInputSchema)]).optional(),
}).strict();
export default ToDoListUpdateOneWithoutTasksNestedInputSchema;
