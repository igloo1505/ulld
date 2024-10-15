import { z } from 'zod';
import { RelatedValuesWhereInputSchema } from '../inputTypeSchemas/RelatedValuesWhereInputSchema.js';
import { RelatedValuesOrderByWithRelationInputSchema } from '../inputTypeSchemas/RelatedValuesOrderByWithRelationInputSchema.js';
import { RelatedValuesWhereUniqueInputSchema } from '../inputTypeSchemas/RelatedValuesWhereUniqueInputSchema.js';
export const RelatedValuesAggregateArgsSchema = z.object({
    where: RelatedValuesWhereInputSchema.optional(),
    orderBy: z.union([RelatedValuesOrderByWithRelationInputSchema.array(), RelatedValuesOrderByWithRelationInputSchema]).optional(),
    cursor: RelatedValuesWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export default RelatedValuesAggregateArgsSchema;
