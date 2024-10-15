import { z } from 'zod';
import { CitationsGroupWhereInputSchema } from '../inputTypeSchemas/CitationsGroupWhereInputSchema.js';
import { CitationsGroupOrderByWithAggregationInputSchema } from '../inputTypeSchemas/CitationsGroupOrderByWithAggregationInputSchema.js';
import { CitationsGroupScalarFieldEnumSchema } from '../inputTypeSchemas/CitationsGroupScalarFieldEnumSchema.js';
import { CitationsGroupScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/CitationsGroupScalarWhereWithAggregatesInputSchema.js';
export const CitationsGroupGroupByArgsSchema = z.object({
    where: CitationsGroupWhereInputSchema.optional(),
    orderBy: z.union([CitationsGroupOrderByWithAggregationInputSchema.array(), CitationsGroupOrderByWithAggregationInputSchema]).optional(),
    by: CitationsGroupScalarFieldEnumSchema.array(),
    having: CitationsGroupScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export default CitationsGroupGroupByArgsSchema;
