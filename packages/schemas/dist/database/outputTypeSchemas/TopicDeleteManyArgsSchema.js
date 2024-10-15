import { z } from 'zod';
import { TopicWhereInputSchema } from '../inputTypeSchemas/TopicWhereInputSchema.js';
export const TopicDeleteManyArgsSchema = z.object({
    where: TopicWhereInputSchema.optional(),
}).strict();
export default TopicDeleteManyArgsSchema;
