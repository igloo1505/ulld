import { z } from 'zod';
import { DailyFocusWhereInputSchema } from '../inputTypeSchemas/DailyFocusWhereInputSchema.js';
import { DailyFocusOrderByWithRelationInputSchema } from '../inputTypeSchemas/DailyFocusOrderByWithRelationInputSchema.js';
import { DailyFocusWhereUniqueInputSchema } from '../inputTypeSchemas/DailyFocusWhereUniqueInputSchema.js';
export const DailyFocusAggregateArgsSchema = z.object({
    where: DailyFocusWhereInputSchema.optional(),
    orderBy: z.union([DailyFocusOrderByWithRelationInputSchema.array(), DailyFocusOrderByWithRelationInputSchema]).optional(),
    cursor: DailyFocusWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export default DailyFocusAggregateArgsSchema;
