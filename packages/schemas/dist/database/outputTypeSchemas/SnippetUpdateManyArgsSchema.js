import { z } from 'zod';
import { SnippetUpdateManyMutationInputSchema } from '../inputTypeSchemas/SnippetUpdateManyMutationInputSchema.js';
import { SnippetUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SnippetUncheckedUpdateManyInputSchema.js';
import { SnippetWhereInputSchema } from '../inputTypeSchemas/SnippetWhereInputSchema.js';
export const SnippetUpdateManyArgsSchema = z.object({
    data: z.union([SnippetUpdateManyMutationInputSchema, SnippetUncheckedUpdateManyInputSchema]),
    where: SnippetWhereInputSchema.optional(),
}).strict();
export default SnippetUpdateManyArgsSchema;
