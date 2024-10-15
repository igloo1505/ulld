import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema.js';
import { TopicCreateWithoutIpynbNotesInputSchema } from './TopicCreateWithoutIpynbNotesInputSchema.js';
import { TopicUncheckedCreateWithoutIpynbNotesInputSchema } from './TopicUncheckedCreateWithoutIpynbNotesInputSchema.js';
export const TopicCreateOrConnectWithoutIpynbNotesInputSchema = z.object({
    where: z.lazy(() => TopicWhereUniqueInputSchema),
    create: z.union([z.lazy(() => TopicCreateWithoutIpynbNotesInputSchema), z.lazy(() => TopicUncheckedCreateWithoutIpynbNotesInputSchema)]),
}).strict();
export default TopicCreateOrConnectWithoutIpynbNotesInputSchema;
