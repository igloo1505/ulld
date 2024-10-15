import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema.js';
import { TopicCreateWithoutQAPairInputSchema } from './TopicCreateWithoutQAPairInputSchema.js';
import { TopicUncheckedCreateWithoutQAPairInputSchema } from './TopicUncheckedCreateWithoutQAPairInputSchema.js';
export const TopicCreateOrConnectWithoutQAPairInputSchema = z.object({
    where: z.lazy(() => TopicWhereUniqueInputSchema),
    create: z.union([z.lazy(() => TopicCreateWithoutQAPairInputSchema), z.lazy(() => TopicUncheckedCreateWithoutQAPairInputSchema)]),
}).strict();
export default TopicCreateOrConnectWithoutQAPairInputSchema;
