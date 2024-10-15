import { z } from 'zod';
import { TopicCreateWithoutBibEntriesInputSchema } from './TopicCreateWithoutBibEntriesInputSchema.js';
import { TopicUncheckedCreateWithoutBibEntriesInputSchema } from './TopicUncheckedCreateWithoutBibEntriesInputSchema.js';
import { TopicCreateOrConnectWithoutBibEntriesInputSchema } from './TopicCreateOrConnectWithoutBibEntriesInputSchema.js';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema.js';
export const TopicCreateNestedManyWithoutBibEntriesInputSchema = z.object({
    create: z.union([z.lazy(() => TopicCreateWithoutBibEntriesInputSchema), z.lazy(() => TopicCreateWithoutBibEntriesInputSchema).array(), z.lazy(() => TopicUncheckedCreateWithoutBibEntriesInputSchema), z.lazy(() => TopicUncheckedCreateWithoutBibEntriesInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => TopicCreateOrConnectWithoutBibEntriesInputSchema), z.lazy(() => TopicCreateOrConnectWithoutBibEntriesInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => TopicWhereUniqueInputSchema), z.lazy(() => TopicWhereUniqueInputSchema).array()]).optional(),
}).strict();
export default TopicCreateNestedManyWithoutBibEntriesInputSchema;
