import { z } from 'zod';
import { TopicUpdateManyMutationInputSchema } from '../inputTypeSchemas/TopicUpdateManyMutationInputSchema.js';
import { TopicUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TopicUncheckedUpdateManyInputSchema.js';
import { TopicWhereInputSchema } from '../inputTypeSchemas/TopicWhereInputSchema.js';
export const TopicUpdateManyArgsSchema = z.object({
    data: z.union([TopicUpdateManyMutationInputSchema, TopicUncheckedUpdateManyInputSchema]),
    where: TopicWhereInputSchema.optional(),
}).strict();
export default TopicUpdateManyArgsSchema;
