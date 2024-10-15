import { z } from 'zod';
import { ToDoListCreateWithoutTagsInputSchema } from './ToDoListCreateWithoutTagsInputSchema.js';
import { ToDoListUncheckedCreateWithoutTagsInputSchema } from './ToDoListUncheckedCreateWithoutTagsInputSchema.js';
import { ToDoListCreateOrConnectWithoutTagsInputSchema } from './ToDoListCreateOrConnectWithoutTagsInputSchema.js';
import { ToDoListUpsertWithWhereUniqueWithoutTagsInputSchema } from './ToDoListUpsertWithWhereUniqueWithoutTagsInputSchema.js';
import { ToDoListWhereUniqueInputSchema } from './ToDoListWhereUniqueInputSchema.js';
import { ToDoListUpdateWithWhereUniqueWithoutTagsInputSchema } from './ToDoListUpdateWithWhereUniqueWithoutTagsInputSchema.js';
import { ToDoListUpdateManyWithWhereWithoutTagsInputSchema } from './ToDoListUpdateManyWithWhereWithoutTagsInputSchema.js';
import { ToDoListScalarWhereInputSchema } from './ToDoListScalarWhereInputSchema.js';
export const ToDoListUpdateManyWithoutTagsNestedInputSchema = z.object({
    create: z.union([z.lazy(() => ToDoListCreateWithoutTagsInputSchema), z.lazy(() => ToDoListCreateWithoutTagsInputSchema).array(), z.lazy(() => ToDoListUncheckedCreateWithoutTagsInputSchema), z.lazy(() => ToDoListUncheckedCreateWithoutTagsInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => ToDoListCreateOrConnectWithoutTagsInputSchema), z.lazy(() => ToDoListCreateOrConnectWithoutTagsInputSchema).array()]).optional(),
    upsert: z.union([z.lazy(() => ToDoListUpsertWithWhereUniqueWithoutTagsInputSchema), z.lazy(() => ToDoListUpsertWithWhereUniqueWithoutTagsInputSchema).array()]).optional(),
    set: z.union([z.lazy(() => ToDoListWhereUniqueInputSchema), z.lazy(() => ToDoListWhereUniqueInputSchema).array()]).optional(),
    disconnect: z.union([z.lazy(() => ToDoListWhereUniqueInputSchema), z.lazy(() => ToDoListWhereUniqueInputSchema).array()]).optional(),
    delete: z.union([z.lazy(() => ToDoListWhereUniqueInputSchema), z.lazy(() => ToDoListWhereUniqueInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => ToDoListWhereUniqueInputSchema), z.lazy(() => ToDoListWhereUniqueInputSchema).array()]).optional(),
    update: z.union([z.lazy(() => ToDoListUpdateWithWhereUniqueWithoutTagsInputSchema), z.lazy(() => ToDoListUpdateWithWhereUniqueWithoutTagsInputSchema).array()]).optional(),
    updateMany: z.union([z.lazy(() => ToDoListUpdateManyWithWhereWithoutTagsInputSchema), z.lazy(() => ToDoListUpdateManyWithWhereWithoutTagsInputSchema).array()]).optional(),
    deleteMany: z.union([z.lazy(() => ToDoListScalarWhereInputSchema), z.lazy(() => ToDoListScalarWhereInputSchema).array()]).optional(),
}).strict();
export default ToDoListUpdateManyWithoutTagsNestedInputSchema;
