import { z } from 'zod';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema.js';
import { ToDoUpdateWithoutTopicsInputSchema } from './ToDoUpdateWithoutTopicsInputSchema.js';
import { ToDoUncheckedUpdateWithoutTopicsInputSchema } from './ToDoUncheckedUpdateWithoutTopicsInputSchema.js';
export const ToDoUpdateWithWhereUniqueWithoutTopicsInputSchema = z.object({
    where: z.lazy(() => ToDoWhereUniqueInputSchema),
    data: z.union([z.lazy(() => ToDoUpdateWithoutTopicsInputSchema), z.lazy(() => ToDoUncheckedUpdateWithoutTopicsInputSchema)]),
}).strict();
export default ToDoUpdateWithWhereUniqueWithoutTopicsInputSchema;
