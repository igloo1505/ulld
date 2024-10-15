import { z } from 'zod';
import { ToDoListWhereUniqueInputSchema } from './ToDoListWhereUniqueInputSchema.js';
import { ToDoListUpdateWithoutSubjectsInputSchema } from './ToDoListUpdateWithoutSubjectsInputSchema.js';
import { ToDoListUncheckedUpdateWithoutSubjectsInputSchema } from './ToDoListUncheckedUpdateWithoutSubjectsInputSchema.js';
export const ToDoListUpdateWithWhereUniqueWithoutSubjectsInputSchema = z.object({
    where: z.lazy(() => ToDoListWhereUniqueInputSchema),
    data: z.union([z.lazy(() => ToDoListUpdateWithoutSubjectsInputSchema), z.lazy(() => ToDoListUncheckedUpdateWithoutSubjectsInputSchema)]),
}).strict();
export default ToDoListUpdateWithWhereUniqueWithoutSubjectsInputSchema;
