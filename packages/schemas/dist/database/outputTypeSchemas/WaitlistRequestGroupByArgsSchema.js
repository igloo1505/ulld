import { z } from 'zod';
import { WaitlistRequestWhereInputSchema } from '../inputTypeSchemas/WaitlistRequestWhereInputSchema.js';
import { WaitlistRequestOrderByWithAggregationInputSchema } from '../inputTypeSchemas/WaitlistRequestOrderByWithAggregationInputSchema.js';
import { WaitlistRequestScalarFieldEnumSchema } from '../inputTypeSchemas/WaitlistRequestScalarFieldEnumSchema.js';
import { WaitlistRequestScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/WaitlistRequestScalarWhereWithAggregatesInputSchema.js';
export const WaitlistRequestGroupByArgsSchema = z.object({
    where: WaitlistRequestWhereInputSchema.optional(),
    orderBy: z.union([WaitlistRequestOrderByWithAggregationInputSchema.array(), WaitlistRequestOrderByWithAggregationInputSchema]).optional(),
    by: WaitlistRequestScalarFieldEnumSchema.array(),
    having: WaitlistRequestScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export default WaitlistRequestGroupByArgsSchema;
