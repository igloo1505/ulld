import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema.js';
import { TagUpdateWithoutTodoListInputSchema } from './TagUpdateWithoutTodoListInputSchema.js';
import { TagUncheckedUpdateWithoutTodoListInputSchema } from './TagUncheckedUpdateWithoutTodoListInputSchema.js';
export const TagUpdateWithWhereUniqueWithoutTodoListInputSchema = z.object({
    where: z.lazy(() => TagWhereUniqueInputSchema),
    data: z.union([z.lazy(() => TagUpdateWithoutTodoListInputSchema), z.lazy(() => TagUncheckedUpdateWithoutTodoListInputSchema)]),
}).strict();
export default TagUpdateWithWhereUniqueWithoutTodoListInputSchema;
