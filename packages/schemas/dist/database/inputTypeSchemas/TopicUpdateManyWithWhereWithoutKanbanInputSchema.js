import { z } from 'zod';
import { TopicScalarWhereInputSchema } from './TopicScalarWhereInputSchema.js';
import { TopicUpdateManyMutationInputSchema } from './TopicUpdateManyMutationInputSchema.js';
import { TopicUncheckedUpdateManyWithoutKanbanInputSchema } from './TopicUncheckedUpdateManyWithoutKanbanInputSchema.js';
export const TopicUpdateManyWithWhereWithoutKanbanInputSchema = z.object({
    where: z.lazy(() => TopicScalarWhereInputSchema),
    data: z.union([z.lazy(() => TopicUpdateManyMutationInputSchema), z.lazy(() => TopicUncheckedUpdateManyWithoutKanbanInputSchema)]),
}).strict();
export default TopicUpdateManyWithWhereWithoutKanbanInputSchema;
