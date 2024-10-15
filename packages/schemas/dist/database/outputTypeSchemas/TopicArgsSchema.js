import { z } from 'zod';
import { TopicSelectSchema } from '../inputTypeSchemas/TopicSelectSchema.js';
import { TopicIncludeSchema } from '../inputTypeSchemas/TopicIncludeSchema.js';
export const TopicArgsSchema = z.object({
    select: z.lazy(() => TopicSelectSchema).optional(),
    include: z.lazy(() => TopicIncludeSchema).optional(),
}).strict();
export default TopicArgsSchema;
