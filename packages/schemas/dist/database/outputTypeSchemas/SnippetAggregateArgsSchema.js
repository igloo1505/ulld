import { z } from 'zod';
import { SnippetWhereInputSchema } from '../inputTypeSchemas/SnippetWhereInputSchema.js';
import { SnippetOrderByWithRelationInputSchema } from '../inputTypeSchemas/SnippetOrderByWithRelationInputSchema.js';
import { SnippetWhereUniqueInputSchema } from '../inputTypeSchemas/SnippetWhereUniqueInputSchema.js';
export const SnippetAggregateArgsSchema = z.object({
    where: SnippetWhereInputSchema.optional(),
    orderBy: z.union([SnippetOrderByWithRelationInputSchema.array(), SnippetOrderByWithRelationInputSchema]).optional(),
    cursor: SnippetWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export default SnippetAggregateArgsSchema;
