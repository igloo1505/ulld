import { z } from 'zod';
import { ToDoCreateWithoutSubjectsInputSchema } from './ToDoCreateWithoutSubjectsInputSchema.js';
import { ToDoUncheckedCreateWithoutSubjectsInputSchema } from './ToDoUncheckedCreateWithoutSubjectsInputSchema.js';
import { ToDoCreateOrConnectWithoutSubjectsInputSchema } from './ToDoCreateOrConnectWithoutSubjectsInputSchema.js';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema.js';
export const ToDoUncheckedCreateNestedManyWithoutSubjectsInputSchema = z.object({
    create: z.union([z.lazy(() => ToDoCreateWithoutSubjectsInputSchema), z.lazy(() => ToDoCreateWithoutSubjectsInputSchema).array(), z.lazy(() => ToDoUncheckedCreateWithoutSubjectsInputSchema), z.lazy(() => ToDoUncheckedCreateWithoutSubjectsInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => ToDoCreateOrConnectWithoutSubjectsInputSchema), z.lazy(() => ToDoCreateOrConnectWithoutSubjectsInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => ToDoWhereUniqueInputSchema), z.lazy(() => ToDoWhereUniqueInputSchema).array()]).optional(),
}).strict();
export default ToDoUncheckedCreateNestedManyWithoutSubjectsInputSchema;
