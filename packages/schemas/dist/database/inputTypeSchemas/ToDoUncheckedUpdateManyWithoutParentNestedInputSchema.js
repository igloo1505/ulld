import { z } from 'zod';
import { ToDoCreateWithoutParentInputSchema } from './ToDoCreateWithoutParentInputSchema.js';
import { ToDoUncheckedCreateWithoutParentInputSchema } from './ToDoUncheckedCreateWithoutParentInputSchema.js';
import { ToDoCreateOrConnectWithoutParentInputSchema } from './ToDoCreateOrConnectWithoutParentInputSchema.js';
import { ToDoUpsertWithWhereUniqueWithoutParentInputSchema } from './ToDoUpsertWithWhereUniqueWithoutParentInputSchema.js';
import { ToDoCreateManyParentInputEnvelopeSchema } from './ToDoCreateManyParentInputEnvelopeSchema.js';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema.js';
import { ToDoUpdateWithWhereUniqueWithoutParentInputSchema } from './ToDoUpdateWithWhereUniqueWithoutParentInputSchema.js';
import { ToDoUpdateManyWithWhereWithoutParentInputSchema } from './ToDoUpdateManyWithWhereWithoutParentInputSchema.js';
import { ToDoScalarWhereInputSchema } from './ToDoScalarWhereInputSchema.js';
export const ToDoUncheckedUpdateManyWithoutParentNestedInputSchema = z.object({
    create: z.union([z.lazy(() => ToDoCreateWithoutParentInputSchema), z.lazy(() => ToDoCreateWithoutParentInputSchema).array(), z.lazy(() => ToDoUncheckedCreateWithoutParentInputSchema), z.lazy(() => ToDoUncheckedCreateWithoutParentInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => ToDoCreateOrConnectWithoutParentInputSchema), z.lazy(() => ToDoCreateOrConnectWithoutParentInputSchema).array()]).optional(),
    upsert: z.union([z.lazy(() => ToDoUpsertWithWhereUniqueWithoutParentInputSchema), z.lazy(() => ToDoUpsertWithWhereUniqueWithoutParentInputSchema).array()]).optional(),
    createMany: z.lazy(() => ToDoCreateManyParentInputEnvelopeSchema).optional(),
    set: z.union([z.lazy(() => ToDoWhereUniqueInputSchema), z.lazy(() => ToDoWhereUniqueInputSchema).array()]).optional(),
    disconnect: z.union([z.lazy(() => ToDoWhereUniqueInputSchema), z.lazy(() => ToDoWhereUniqueInputSchema).array()]).optional(),
    delete: z.union([z.lazy(() => ToDoWhereUniqueInputSchema), z.lazy(() => ToDoWhereUniqueInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => ToDoWhereUniqueInputSchema), z.lazy(() => ToDoWhereUniqueInputSchema).array()]).optional(),
    update: z.union([z.lazy(() => ToDoUpdateWithWhereUniqueWithoutParentInputSchema), z.lazy(() => ToDoUpdateWithWhereUniqueWithoutParentInputSchema).array()]).optional(),
    updateMany: z.union([z.lazy(() => ToDoUpdateManyWithWhereWithoutParentInputSchema), z.lazy(() => ToDoUpdateManyWithWhereWithoutParentInputSchema).array()]).optional(),
    deleteMany: z.union([z.lazy(() => ToDoScalarWhereInputSchema), z.lazy(() => ToDoScalarWhereInputSchema).array()]).optional(),
}).strict();
export default ToDoUncheckedUpdateManyWithoutParentNestedInputSchema;
