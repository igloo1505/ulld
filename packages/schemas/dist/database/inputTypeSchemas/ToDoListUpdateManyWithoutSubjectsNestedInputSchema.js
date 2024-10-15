import { z } from 'zod';
import { ToDoListCreateWithoutSubjectsInputSchema } from './ToDoListCreateWithoutSubjectsInputSchema.js';
import { ToDoListUncheckedCreateWithoutSubjectsInputSchema } from './ToDoListUncheckedCreateWithoutSubjectsInputSchema.js';
import { ToDoListCreateOrConnectWithoutSubjectsInputSchema } from './ToDoListCreateOrConnectWithoutSubjectsInputSchema.js';
import { ToDoListUpsertWithWhereUniqueWithoutSubjectsInputSchema } from './ToDoListUpsertWithWhereUniqueWithoutSubjectsInputSchema.js';
import { ToDoListWhereUniqueInputSchema } from './ToDoListWhereUniqueInputSchema.js';
import { ToDoListUpdateWithWhereUniqueWithoutSubjectsInputSchema } from './ToDoListUpdateWithWhereUniqueWithoutSubjectsInputSchema.js';
import { ToDoListUpdateManyWithWhereWithoutSubjectsInputSchema } from './ToDoListUpdateManyWithWhereWithoutSubjectsInputSchema.js';
import { ToDoListScalarWhereInputSchema } from './ToDoListScalarWhereInputSchema.js';
export const ToDoListUpdateManyWithoutSubjectsNestedInputSchema = z.object({
    create: z.union([z.lazy(() => ToDoListCreateWithoutSubjectsInputSchema), z.lazy(() => ToDoListCreateWithoutSubjectsInputSchema).array(), z.lazy(() => ToDoListUncheckedCreateWithoutSubjectsInputSchema), z.lazy(() => ToDoListUncheckedCreateWithoutSubjectsInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => ToDoListCreateOrConnectWithoutSubjectsInputSchema), z.lazy(() => ToDoListCreateOrConnectWithoutSubjectsInputSchema).array()]).optional(),
    upsert: z.union([z.lazy(() => ToDoListUpsertWithWhereUniqueWithoutSubjectsInputSchema), z.lazy(() => ToDoListUpsertWithWhereUniqueWithoutSubjectsInputSchema).array()]).optional(),
    set: z.union([z.lazy(() => ToDoListWhereUniqueInputSchema), z.lazy(() => ToDoListWhereUniqueInputSchema).array()]).optional(),
    disconnect: z.union([z.lazy(() => ToDoListWhereUniqueInputSchema), z.lazy(() => ToDoListWhereUniqueInputSchema).array()]).optional(),
    delete: z.union([z.lazy(() => ToDoListWhereUniqueInputSchema), z.lazy(() => ToDoListWhereUniqueInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => ToDoListWhereUniqueInputSchema), z.lazy(() => ToDoListWhereUniqueInputSchema).array()]).optional(),
    update: z.union([z.lazy(() => ToDoListUpdateWithWhereUniqueWithoutSubjectsInputSchema), z.lazy(() => ToDoListUpdateWithWhereUniqueWithoutSubjectsInputSchema).array()]).optional(),
    updateMany: z.union([z.lazy(() => ToDoListUpdateManyWithWhereWithoutSubjectsInputSchema), z.lazy(() => ToDoListUpdateManyWithWhereWithoutSubjectsInputSchema).array()]).optional(),
    deleteMany: z.union([z.lazy(() => ToDoListScalarWhereInputSchema), z.lazy(() => ToDoListScalarWhereInputSchema).array()]).optional(),
}).strict();
export default ToDoListUpdateManyWithoutSubjectsNestedInputSchema;
