import { z } from 'zod';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema.js';
import { ToDoUpdateWithoutTagsInputSchema } from './ToDoUpdateWithoutTagsInputSchema.js';
import { ToDoUncheckedUpdateWithoutTagsInputSchema } from './ToDoUncheckedUpdateWithoutTagsInputSchema.js';
export const ToDoUpdateWithWhereUniqueWithoutTagsInputSchema = z.object({
    where: z.lazy(() => ToDoWhereUniqueInputSchema),
    data: z.union([z.lazy(() => ToDoUpdateWithoutTagsInputSchema), z.lazy(() => ToDoUncheckedUpdateWithoutTagsInputSchema)]),
}).strict();
export default ToDoUpdateWithWhereUniqueWithoutTagsInputSchema;
