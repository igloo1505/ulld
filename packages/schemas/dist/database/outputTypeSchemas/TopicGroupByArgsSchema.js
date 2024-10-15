import { z } from 'zod';
import { TopicWhereInputSchema } from '../inputTypeSchemas/TopicWhereInputSchema.js';
import { TopicOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TopicOrderByWithAggregationInputSchema.js';
import { TopicScalarFieldEnumSchema } from '../inputTypeSchemas/TopicScalarFieldEnumSchema.js';
import { TopicScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TopicScalarWhereWithAggregatesInputSchema.js';
export const TopicGroupByArgsSchema = z.object({
    where: TopicWhereInputSchema.optional(),
    orderBy: z.union([TopicOrderByWithAggregationInputSchema.array(), TopicOrderByWithAggregationInputSchema]).optional(),
    by: TopicScalarFieldEnumSchema.array(),
    having: TopicScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export default TopicGroupByArgsSchema;
