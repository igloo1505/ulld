import { z } from 'zod';
import { TopicCountOutputTypeSelectSchema } from './TopicCountOutputTypeSelectSchema.js';
export const TopicCountOutputTypeArgsSchema = z.object({
    select: z.lazy(() => TopicCountOutputTypeSelectSchema).nullish(),
}).strict();
export default TopicCountOutputTypeSelectSchema;
