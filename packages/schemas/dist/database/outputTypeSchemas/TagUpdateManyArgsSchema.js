import { z } from 'zod';
import { TagUpdateManyMutationInputSchema } from '../inputTypeSchemas/TagUpdateManyMutationInputSchema.js';
import { TagUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TagUncheckedUpdateManyInputSchema.js';
import { TagWhereInputSchema } from '../inputTypeSchemas/TagWhereInputSchema.js';
export const TagUpdateManyArgsSchema = z.object({
    data: z.union([TagUpdateManyMutationInputSchema, TagUncheckedUpdateManyInputSchema]),
    where: TagWhereInputSchema.optional(),
}).strict();
export default TagUpdateManyArgsSchema;
