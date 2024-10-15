import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema.js';
import { TagCreateWithoutTodoListInputSchema } from './TagCreateWithoutTodoListInputSchema.js';
import { TagUncheckedCreateWithoutTodoListInputSchema } from './TagUncheckedCreateWithoutTodoListInputSchema.js';
export const TagCreateOrConnectWithoutTodoListInputSchema = z.object({
    where: z.lazy(() => TagWhereUniqueInputSchema),
    create: z.union([z.lazy(() => TagCreateWithoutTodoListInputSchema), z.lazy(() => TagUncheckedCreateWithoutTodoListInputSchema)]),
}).strict();
export default TagCreateOrConnectWithoutTodoListInputSchema;
