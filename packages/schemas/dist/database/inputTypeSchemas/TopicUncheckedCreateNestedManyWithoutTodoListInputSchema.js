import { z } from 'zod';
import { TopicCreateWithoutTodoListInputSchema } from './TopicCreateWithoutTodoListInputSchema.js';
import { TopicUncheckedCreateWithoutTodoListInputSchema } from './TopicUncheckedCreateWithoutTodoListInputSchema.js';
import { TopicCreateOrConnectWithoutTodoListInputSchema } from './TopicCreateOrConnectWithoutTodoListInputSchema.js';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema.js';
export const TopicUncheckedCreateNestedManyWithoutTodoListInputSchema = z.object({
    create: z.union([z.lazy(() => TopicCreateWithoutTodoListInputSchema), z.lazy(() => TopicCreateWithoutTodoListInputSchema).array(), z.lazy(() => TopicUncheckedCreateWithoutTodoListInputSchema), z.lazy(() => TopicUncheckedCreateWithoutTodoListInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => TopicCreateOrConnectWithoutTodoListInputSchema), z.lazy(() => TopicCreateOrConnectWithoutTodoListInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => TopicWhereUniqueInputSchema), z.lazy(() => TopicWhereUniqueInputSchema).array()]).optional(),
}).strict();
export default TopicUncheckedCreateNestedManyWithoutTodoListInputSchema;
