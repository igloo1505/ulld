import { z } from 'zod';
import { ToDoListWhereUniqueInputSchema } from './ToDoListWhereUniqueInputSchema.js';
import { ToDoListUpdateWithoutSubjectsInputSchema } from './ToDoListUpdateWithoutSubjectsInputSchema.js';
import { ToDoListUncheckedUpdateWithoutSubjectsInputSchema } from './ToDoListUncheckedUpdateWithoutSubjectsInputSchema.js';
import { ToDoListCreateWithoutSubjectsInputSchema } from './ToDoListCreateWithoutSubjectsInputSchema.js';
import { ToDoListUncheckedCreateWithoutSubjectsInputSchema } from './ToDoListUncheckedCreateWithoutSubjectsInputSchema.js';
export const ToDoListUpsertWithWhereUniqueWithoutSubjectsInputSchema = z.object({
    where: z.lazy(() => ToDoListWhereUniqueInputSchema),
    update: z.union([z.lazy(() => ToDoListUpdateWithoutSubjectsInputSchema), z.lazy(() => ToDoListUncheckedUpdateWithoutSubjectsInputSchema)]),
    create: z.union([z.lazy(() => ToDoListCreateWithoutSubjectsInputSchema), z.lazy(() => ToDoListUncheckedCreateWithoutSubjectsInputSchema)]),
}).strict();
export default ToDoListUpsertWithWhereUniqueWithoutSubjectsInputSchema;
