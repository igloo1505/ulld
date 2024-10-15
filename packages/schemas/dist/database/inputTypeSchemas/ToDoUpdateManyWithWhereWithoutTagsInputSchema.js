import { z } from 'zod';
import { ToDoScalarWhereInputSchema } from './ToDoScalarWhereInputSchema.js';
import { ToDoUpdateManyMutationInputSchema } from './ToDoUpdateManyMutationInputSchema.js';
import { ToDoUncheckedUpdateManyWithoutTagsInputSchema } from './ToDoUncheckedUpdateManyWithoutTagsInputSchema.js';
export const ToDoUpdateManyWithWhereWithoutTagsInputSchema = z.object({
    where: z.lazy(() => ToDoScalarWhereInputSchema),
    data: z.union([z.lazy(() => ToDoUpdateManyMutationInputSchema), z.lazy(() => ToDoUncheckedUpdateManyWithoutTagsInputSchema)]),
}).strict();
export default ToDoUpdateManyWithWhereWithoutTagsInputSchema;
