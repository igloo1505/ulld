import { z } from 'zod';
import { RelatedValuesWhereInputSchema } from '../inputTypeSchemas/RelatedValuesWhereInputSchema.js';
import { RelatedValuesOrderByWithAggregationInputSchema } from '../inputTypeSchemas/RelatedValuesOrderByWithAggregationInputSchema.js';
import { RelatedValuesScalarFieldEnumSchema } from '../inputTypeSchemas/RelatedValuesScalarFieldEnumSchema.js';
import { RelatedValuesScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/RelatedValuesScalarWhereWithAggregatesInputSchema.js';
export const RelatedValuesGroupByArgsSchema = z.object({
    where: RelatedValuesWhereInputSchema.optional(),
    orderBy: z.union([RelatedValuesOrderByWithAggregationInputSchema.array(), RelatedValuesOrderByWithAggregationInputSchema]).optional(),
    by: RelatedValuesScalarFieldEnumSchema.array(),
    having: RelatedValuesScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export default RelatedValuesGroupByArgsSchema;
