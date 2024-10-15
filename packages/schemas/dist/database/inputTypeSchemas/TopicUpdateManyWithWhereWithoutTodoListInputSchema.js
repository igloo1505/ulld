import { z } from 'zod';
import { TopicScalarWhereInputSchema } from './TopicScalarWhereInputSchema.js';
import { TopicUpdateManyMutationInputSchema } from './TopicUpdateManyMutationInputSchema.js';
import { TopicUncheckedUpdateManyWithoutTodoListInputSchema } from './TopicUncheckedUpdateManyWithoutTodoListInputSchema.js';
export const TopicUpdateManyWithWhereWithoutTodoListInputSchema = z.object({
    where: z.lazy(() => TopicScalarWhereInputSchema),
    data: z.union([z.lazy(() => TopicUpdateManyMutationInputSchema), z.lazy(() => TopicUncheckedUpdateManyWithoutTodoListInputSchema)]),
}).strict();
export default TopicUpdateManyWithWhereWithoutTodoListInputSchema;
