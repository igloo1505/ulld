import { z } from 'zod';
import { TagCountOutputTypeSelectSchema } from './TagCountOutputTypeSelectSchema.js';
export const TagCountOutputTypeArgsSchema = z.object({
    select: z.lazy(() => TagCountOutputTypeSelectSchema).nullish(),
}).strict();
export default TagCountOutputTypeSelectSchema;
