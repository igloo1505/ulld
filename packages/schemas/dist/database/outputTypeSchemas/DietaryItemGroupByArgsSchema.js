import { z } from 'zod';
import { DietaryItemWhereInputSchema } from '../inputTypeSchemas/DietaryItemWhereInputSchema.js';
import { DietaryItemOrderByWithAggregationInputSchema } from '../inputTypeSchemas/DietaryItemOrderByWithAggregationInputSchema.js';
import { DietaryItemScalarFieldEnumSchema } from '../inputTypeSchemas/DietaryItemScalarFieldEnumSchema.js';
import { DietaryItemScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/DietaryItemScalarWhereWithAggregatesInputSchema.js';
export const DietaryItemGroupByArgsSchema = z.object({
    where: DietaryItemWhereInputSchema.optional(),
    orderBy: z.union([DietaryItemOrderByWithAggregationInputSchema.array(), DietaryItemOrderByWithAggregationInputSchema]).optional(),
    by: DietaryItemScalarFieldEnumSchema.array(),
    having: DietaryItemScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export default DietaryItemGroupByArgsSchema;
