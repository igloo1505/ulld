import { z } from 'zod';
import { TimePeriodWhereInputSchema } from '../inputTypeSchemas/TimePeriodWhereInputSchema.js';
import { TimePeriodOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TimePeriodOrderByWithAggregationInputSchema.js';
import { TimePeriodScalarFieldEnumSchema } from '../inputTypeSchemas/TimePeriodScalarFieldEnumSchema.js';
import { TimePeriodScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TimePeriodScalarWhereWithAggregatesInputSchema.js';
export const TimePeriodGroupByArgsSchema = z.object({
    where: TimePeriodWhereInputSchema.optional(),
    orderBy: z.union([TimePeriodOrderByWithAggregationInputSchema.array(), TimePeriodOrderByWithAggregationInputSchema]).optional(),
    by: TimePeriodScalarFieldEnumSchema.array(),
    having: TimePeriodScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export default TimePeriodGroupByArgsSchema;
