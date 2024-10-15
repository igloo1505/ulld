import { z } from 'zod';
import { DailyFocusWhereInputSchema } from '../inputTypeSchemas/DailyFocusWhereInputSchema.js';
import { DailyFocusOrderByWithAggregationInputSchema } from '../inputTypeSchemas/DailyFocusOrderByWithAggregationInputSchema.js';
import { DailyFocusScalarFieldEnumSchema } from '../inputTypeSchemas/DailyFocusScalarFieldEnumSchema.js';
import { DailyFocusScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/DailyFocusScalarWhereWithAggregatesInputSchema.js';
export const DailyFocusGroupByArgsSchema = z.object({
    where: DailyFocusWhereInputSchema.optional(),
    orderBy: z.union([DailyFocusOrderByWithAggregationInputSchema.array(), DailyFocusOrderByWithAggregationInputSchema]).optional(),
    by: DailyFocusScalarFieldEnumSchema.array(),
    having: DailyFocusScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export default DailyFocusGroupByArgsSchema;
