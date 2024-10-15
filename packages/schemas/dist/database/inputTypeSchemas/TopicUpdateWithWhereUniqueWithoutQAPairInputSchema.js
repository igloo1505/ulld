import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema.js';
import { TopicUpdateWithoutQAPairInputSchema } from './TopicUpdateWithoutQAPairInputSchema.js';
import { TopicUncheckedUpdateWithoutQAPairInputSchema } from './TopicUncheckedUpdateWithoutQAPairInputSchema.js';
export const TopicUpdateWithWhereUniqueWithoutQAPairInputSchema = z.object({
    where: z.lazy(() => TopicWhereUniqueInputSchema),
    data: z.union([z.lazy(() => TopicUpdateWithoutQAPairInputSchema), z.lazy(() => TopicUncheckedUpdateWithoutQAPairInputSchema)]),
}).strict();
export default TopicUpdateWithWhereUniqueWithoutQAPairInputSchema;
