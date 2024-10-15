import { z } from 'zod';
import { TagScalarWhereInputSchema } from './TagScalarWhereInputSchema.js';
import { TagUpdateManyMutationInputSchema } from './TagUpdateManyMutationInputSchema.js';
import { TagUncheckedUpdateManyWithoutTodoListInputSchema } from './TagUncheckedUpdateManyWithoutTodoListInputSchema.js';
export const TagUpdateManyWithWhereWithoutTodoListInputSchema = z.object({
    where: z.lazy(() => TagScalarWhereInputSchema),
    data: z.union([z.lazy(() => TagUpdateManyMutationInputSchema), z.lazy(() => TagUncheckedUpdateManyWithoutTodoListInputSchema)]),
}).strict();
export default TagUpdateManyWithWhereWithoutTodoListInputSchema;
