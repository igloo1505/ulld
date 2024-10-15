import { z } from 'zod';
import { TimePeriodWhereInputSchema } from '../inputTypeSchemas/TimePeriodWhereInputSchema.js';
import { TimePeriodOrderByWithRelationInputSchema } from '../inputTypeSchemas/TimePeriodOrderByWithRelationInputSchema.js';
import { TimePeriodWhereUniqueInputSchema } from '../inputTypeSchemas/TimePeriodWhereUniqueInputSchema.js';
export const TimePeriodAggregateArgsSchema = z.object({
    where: TimePeriodWhereInputSchema.optional(),
    orderBy: z.union([TimePeriodOrderByWithRelationInputSchema.array(), TimePeriodOrderByWithRelationInputSchema]).optional(),
    cursor: TimePeriodWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export default TimePeriodAggregateArgsSchema;
