import { z } from 'zod';
import { ServingWhereInputSchema } from '../inputTypeSchemas/ServingWhereInputSchema.js';
import { ServingOrderByWithRelationInputSchema } from '../inputTypeSchemas/ServingOrderByWithRelationInputSchema.js';
import { ServingWhereUniqueInputSchema } from '../inputTypeSchemas/ServingWhereUniqueInputSchema.js';
export const ServingAggregateArgsSchema = z.object({
    where: ServingWhereInputSchema.optional(),
    orderBy: z.union([ServingOrderByWithRelationInputSchema.array(), ServingOrderByWithRelationInputSchema]).optional(),
    cursor: ServingWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export default ServingAggregateArgsSchema;
