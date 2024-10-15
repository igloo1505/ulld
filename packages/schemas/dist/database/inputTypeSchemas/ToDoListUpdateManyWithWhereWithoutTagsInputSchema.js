import { z } from 'zod';
import { ToDoListScalarWhereInputSchema } from './ToDoListScalarWhereInputSchema.js';
import { ToDoListUpdateManyMutationInputSchema } from './ToDoListUpdateManyMutationInputSchema.js';
import { ToDoListUncheckedUpdateManyWithoutTagsInputSchema } from './ToDoListUncheckedUpdateManyWithoutTagsInputSchema.js';
export const ToDoListUpdateManyWithWhereWithoutTagsInputSchema = z.object({
    where: z.lazy(() => ToDoListScalarWhereInputSchema),
    data: z.union([z.lazy(() => ToDoListUpdateManyMutationInputSchema), z.lazy(() => ToDoListUncheckedUpdateManyWithoutTagsInputSchema)]),
}).strict();
export default ToDoListUpdateManyWithWhereWithoutTagsInputSchema;
