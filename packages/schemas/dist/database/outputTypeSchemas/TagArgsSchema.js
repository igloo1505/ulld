import { z } from 'zod';
import { TagSelectSchema } from '../inputTypeSchemas/TagSelectSchema.js';
import { TagIncludeSchema } from '../inputTypeSchemas/TagIncludeSchema.js';
export const TagArgsSchema = z.object({
    select: z.lazy(() => TagSelectSchema).optional(),
    include: z.lazy(() => TagIncludeSchema).optional(),
}).strict();
export default TagArgsSchema;
