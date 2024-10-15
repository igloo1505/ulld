import { z } from 'zod';
import { TagWhereInputSchema } from '../inputTypeSchemas/TagWhereInputSchema.js';
export const TagDeleteManyArgsSchema = z.object({
    where: TagWhereInputSchema.optional(),
}).strict();
export default TagDeleteManyArgsSchema;
