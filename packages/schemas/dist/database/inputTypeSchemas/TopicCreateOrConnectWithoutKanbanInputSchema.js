import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema.js';
import { TopicCreateWithoutKanbanInputSchema } from './TopicCreateWithoutKanbanInputSchema.js';
import { TopicUncheckedCreateWithoutKanbanInputSchema } from './TopicUncheckedCreateWithoutKanbanInputSchema.js';
export const TopicCreateOrConnectWithoutKanbanInputSchema = z.object({
    where: z.lazy(() => TopicWhereUniqueInputSchema),
    create: z.union([z.lazy(() => TopicCreateWithoutKanbanInputSchema), z.lazy(() => TopicUncheckedCreateWithoutKanbanInputSchema)]),
}).strict();
export default TopicCreateOrConnectWithoutKanbanInputSchema;
