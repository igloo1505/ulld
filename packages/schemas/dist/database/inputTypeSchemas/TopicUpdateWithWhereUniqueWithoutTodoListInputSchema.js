import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema.js';
import { TopicUpdateWithoutTodoListInputSchema } from './TopicUpdateWithoutTodoListInputSchema.js';
import { TopicUncheckedUpdateWithoutTodoListInputSchema } from './TopicUncheckedUpdateWithoutTodoListInputSchema.js';
export const TopicUpdateWithWhereUniqueWithoutTodoListInputSchema = z.object({
    where: z.lazy(() => TopicWhereUniqueInputSchema),
    data: z.union([z.lazy(() => TopicUpdateWithoutTodoListInputSchema), z.lazy(() => TopicUncheckedUpdateWithoutTodoListInputSchema)]),
}).strict();
export default TopicUpdateWithWhereUniqueWithoutTodoListInputSchema;
