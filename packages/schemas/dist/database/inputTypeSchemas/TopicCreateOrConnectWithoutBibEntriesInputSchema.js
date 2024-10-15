import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema.js';
import { TopicCreateWithoutBibEntriesInputSchema } from './TopicCreateWithoutBibEntriesInputSchema.js';
import { TopicUncheckedCreateWithoutBibEntriesInputSchema } from './TopicUncheckedCreateWithoutBibEntriesInputSchema.js';
export const TopicCreateOrConnectWithoutBibEntriesInputSchema = z.object({
    where: z.lazy(() => TopicWhereUniqueInputSchema),
    create: z.union([z.lazy(() => TopicCreateWithoutBibEntriesInputSchema), z.lazy(() => TopicUncheckedCreateWithoutBibEntriesInputSchema)]),
}).strict();
export default TopicCreateOrConnectWithoutBibEntriesInputSchema;
