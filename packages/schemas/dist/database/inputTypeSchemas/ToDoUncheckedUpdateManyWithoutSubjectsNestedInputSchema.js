import { z } from 'zod';
import { ToDoCreateWithoutSubjectsInputSchema } from './ToDoCreateWithoutSubjectsInputSchema.js';
import { ToDoUncheckedCreateWithoutSubjectsInputSchema } from './ToDoUncheckedCreateWithoutSubjectsInputSchema.js';
import { ToDoCreateOrConnectWithoutSubjectsInputSchema } from './ToDoCreateOrConnectWithoutSubjectsInputSchema.js';
import { ToDoUpsertWithWhereUniqueWithoutSubjectsInputSchema } from './ToDoUpsertWithWhereUniqueWithoutSubjectsInputSchema.js';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema.js';
import { ToDoUpdateWithWhereUniqueWithoutSubjectsInputSchema } from './ToDoUpdateWithWhereUniqueWithoutSubjectsInputSchema.js';
import { ToDoUpdateManyWithWhereWithoutSubjectsInputSchema } from './ToDoUpdateManyWithWhereWithoutSubjectsInputSchema.js';
import { ToDoScalarWhereInputSchema } from './ToDoScalarWhereInputSchema.js';
export const ToDoUncheckedUpdateManyWithoutSubjectsNestedInputSchema = z.object({
    create: z.union([z.lazy(() => ToDoCreateWithoutSubjectsInputSchema), z.lazy(() => ToDoCreateWithoutSubjectsInputSchema).array(), z.lazy(() => ToDoUncheckedCreateWithoutSubjectsInputSchema), z.lazy(() => ToDoUncheckedCreateWithoutSubjectsInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => ToDoCreateOrConnectWithoutSubjectsInputSchema), z.lazy(() => ToDoCreateOrConnectWithoutSubjectsInputSchema).array()]).optional(),
    upsert: z.union([z.lazy(() => ToDoUpsertWithWhereUniqueWithoutSubjectsInputSchema), z.lazy(() => ToDoUpsertWithWhereUniqueWithoutSubjectsInputSchema).array()]).optional(),
    set: z.union([z.lazy(() => ToDoWhereUniqueInputSchema), z.lazy(() => ToDoWhereUniqueInputSchema).array()]).optional(),
    disconnect: z.union([z.lazy(() => ToDoWhereUniqueInputSchema), z.lazy(() => ToDoWhereUniqueInputSchema).array()]).optional(),
    delete: z.union([z.lazy(() => ToDoWhereUniqueInputSchema), z.lazy(() => ToDoWhereUniqueInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => ToDoWhereUniqueInputSchema), z.lazy(() => ToDoWhereUniqueInputSchema).array()]).optional(),
    update: z.union([z.lazy(() => ToDoUpdateWithWhereUniqueWithoutSubjectsInputSchema), z.lazy(() => ToDoUpdateWithWhereUniqueWithoutSubjectsInputSchema).array()]).optional(),
    updateMany: z.union([z.lazy(() => ToDoUpdateManyWithWhereWithoutSubjectsInputSchema), z.lazy(() => ToDoUpdateManyWithWhereWithoutSubjectsInputSchema).array()]).optional(),
    deleteMany: z.union([z.lazy(() => ToDoScalarWhereInputSchema), z.lazy(() => ToDoScalarWhereInputSchema).array()]).optional(),
}).strict();
export default ToDoUncheckedUpdateManyWithoutSubjectsNestedInputSchema;
