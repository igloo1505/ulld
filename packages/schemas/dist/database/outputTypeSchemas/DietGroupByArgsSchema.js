import { z } from 'zod';
import { DietWhereInputSchema } from '../inputTypeSchemas/DietWhereInputSchema.js';
import { DietOrderByWithAggregationInputSchema } from '../inputTypeSchemas/DietOrderByWithAggregationInputSchema.js';
import { DietScalarFieldEnumSchema } from '../inputTypeSchemas/DietScalarFieldEnumSchema.js';
import { DietScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/DietScalarWhereWithAggregatesInputSchema.js';
export const DietGroupByArgsSchema = z.object({
    where: DietWhereInputSchema.optional(),
    orderBy: z.union([DietOrderByWithAggregationInputSchema.array(), DietOrderByWithAggregationInputSchema]).optional(),
    by: DietScalarFieldEnumSchema.array(),
    having: DietScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export default DietGroupByArgsSchema;
