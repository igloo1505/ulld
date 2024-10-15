import { z } from 'zod';
import { TopicScalarWhereInputSchema } from './TopicScalarWhereInputSchema.js';
import { TopicUpdateManyMutationInputSchema } from './TopicUpdateManyMutationInputSchema.js';
import { TopicUncheckedUpdateManyWithoutIpynbNotesInputSchema } from './TopicUncheckedUpdateManyWithoutIpynbNotesInputSchema.js';
export const TopicUpdateManyWithWhereWithoutIpynbNotesInputSchema = z.object({
    where: z.lazy(() => TopicScalarWhereInputSchema),
    data: z.union([z.lazy(() => TopicUpdateManyMutationInputSchema), z.lazy(() => TopicUncheckedUpdateManyWithoutIpynbNotesInputSchema)]),
}).strict();
export default TopicUpdateManyWithWhereWithoutIpynbNotesInputSchema;
