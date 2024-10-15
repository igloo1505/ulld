import { z } from 'zod';
import { TopicScalarWhereInputSchema } from './TopicScalarWhereInputSchema.js';
import { TopicUpdateManyMutationInputSchema } from './TopicUpdateManyMutationInputSchema.js';
import { TopicUncheckedUpdateManyWithoutBibEntriesInputSchema } from './TopicUncheckedUpdateManyWithoutBibEntriesInputSchema.js';
export const TopicUpdateManyWithWhereWithoutBibEntriesInputSchema = z.object({
    where: z.lazy(() => TopicScalarWhereInputSchema),
    data: z.union([z.lazy(() => TopicUpdateManyMutationInputSchema), z.lazy(() => TopicUncheckedUpdateManyWithoutBibEntriesInputSchema)]),
}).strict();
export default TopicUpdateManyWithWhereWithoutBibEntriesInputSchema;
