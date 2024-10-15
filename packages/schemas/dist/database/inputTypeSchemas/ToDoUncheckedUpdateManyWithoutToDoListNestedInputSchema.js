import { z } from 'zod';
import { ToDoCreateWithoutToDoListInputSchema } from './ToDoCreateWithoutToDoListInputSchema.js';
import { ToDoUncheckedCreateWithoutToDoListInputSchema } from './ToDoUncheckedCreateWithoutToDoListInputSchema.js';
import { ToDoCreateOrConnectWithoutToDoListInputSchema } from './ToDoCreateOrConnectWithoutToDoListInputSchema.js';
import { ToDoUpsertWithWhereUniqueWithoutToDoListInputSchema } from './ToDoUpsertWithWhereUniqueWithoutToDoListInputSchema.js';
import { ToDoCreateManyToDoListInputEnvelopeSchema } from './ToDoCreateManyToDoListInputEnvelopeSchema.js';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema.js';
import { ToDoUpdateWithWhereUniqueWithoutToDoListInputSchema } from './ToDoUpdateWithWhereUniqueWithoutToDoListInputSchema.js';
import { ToDoUpdateManyWithWhereWithoutToDoListInputSchema } from './ToDoUpdateManyWithWhereWithoutToDoListInputSchema.js';
import { ToDoScalarWhereInputSchema } from './ToDoScalarWhereInputSchema.js';
export const ToDoUncheckedUpdateManyWithoutToDoListNestedInputSchema = z.object({
    create: z.union([z.lazy(() => ToDoCreateWithoutToDoListInputSchema), z.lazy(() => ToDoCreateWithoutToDoListInputSchema).array(), z.lazy(() => ToDoUncheckedCreateWithoutToDoListInputSchema), z.lazy(() => ToDoUncheckedCreateWithoutToDoListInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => ToDoCreateOrConnectWithoutToDoListInputSchema), z.lazy(() => ToDoCreateOrConnectWithoutToDoListInputSchema).array()]).optional(),
    upsert: z.union([z.lazy(() => ToDoUpsertWithWhereUniqueWithoutToDoListInputSchema), z.lazy(() => ToDoUpsertWithWhereUniqueWithoutToDoListInputSchema).array()]).optional(),
    createMany: z.lazy(() => ToDoCreateManyToDoListInputEnvelopeSchema).optional(),
    set: z.union([z.lazy(() => ToDoWhereUniqueInputSchema), z.lazy(() => ToDoWhereUniqueInputSchema).array()]).optional(),
    disconnect: z.union([z.lazy(() => ToDoWhereUniqueInputSchema), z.lazy(() => ToDoWhereUniqueInputSchema).array()]).optional(),
    delete: z.union([z.lazy(() => ToDoWhereUniqueInputSchema), z.lazy(() => ToDoWhereUniqueInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => ToDoWhereUniqueInputSchema), z.lazy(() => ToDoWhereUniqueInputSchema).array()]).optional(),
    update: z.union([z.lazy(() => ToDoUpdateWithWhereUniqueWithoutToDoListInputSchema), z.lazy(() => ToDoUpdateWithWhereUniqueWithoutToDoListInputSchema).array()]).optional(),
    updateMany: z.union([z.lazy(() => ToDoUpdateManyWithWhereWithoutToDoListInputSchema), z.lazy(() => ToDoUpdateManyWithWhereWithoutToDoListInputSchema).array()]).optional(),
    deleteMany: z.union([z.lazy(() => ToDoScalarWhereInputSchema), z.lazy(() => ToDoScalarWhereInputSchema).array()]).optional(),
}).strict();
export default ToDoUncheckedUpdateManyWithoutToDoListNestedInputSchema;
