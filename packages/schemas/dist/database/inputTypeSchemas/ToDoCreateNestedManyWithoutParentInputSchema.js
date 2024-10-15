import { z } from 'zod';
import { ToDoCreateWithoutParentInputSchema } from './ToDoCreateWithoutParentInputSchema.js';
import { ToDoUncheckedCreateWithoutParentInputSchema } from './ToDoUncheckedCreateWithoutParentInputSchema.js';
import { ToDoCreateOrConnectWithoutParentInputSchema } from './ToDoCreateOrConnectWithoutParentInputSchema.js';
import { ToDoCreateManyParentInputEnvelopeSchema } from './ToDoCreateManyParentInputEnvelopeSchema.js';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema.js';
export const ToDoCreateNestedManyWithoutParentInputSchema = z.object({
    create: z.union([z.lazy(() => ToDoCreateWithoutParentInputSchema), z.lazy(() => ToDoCreateWithoutParentInputSchema).array(), z.lazy(() => ToDoUncheckedCreateWithoutParentInputSchema), z.lazy(() => ToDoUncheckedCreateWithoutParentInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => ToDoCreateOrConnectWithoutParentInputSchema), z.lazy(() => ToDoCreateOrConnectWithoutParentInputSchema).array()]).optional(),
    createMany: z.lazy(() => ToDoCreateManyParentInputEnvelopeSchema).optional(),
    connect: z.union([z.lazy(() => ToDoWhereUniqueInputSchema), z.lazy(() => ToDoWhereUniqueInputSchema).array()]).optional(),
}).strict();
export default ToDoCreateNestedManyWithoutParentInputSchema;
