import { z } from 'zod';
import { TopicWhereInputSchema } from './TopicWhereInputSchema.js';
export const TopicListRelationFilterSchema = z.object({
    every: z.lazy(() => TopicWhereInputSchema).optional(),
    some: z.lazy(() => TopicWhereInputSchema).optional(),
    none: z.lazy(() => TopicWhereInputSchema).optional()
}).strict();
export default TopicListRelationFilterSchema;
