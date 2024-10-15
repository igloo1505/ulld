import { z } from 'zod';
import { BusinessContactWhereInputSchema } from '../inputTypeSchemas/BusinessContactWhereInputSchema.js';
import { BusinessContactOrderByWithRelationInputSchema } from '../inputTypeSchemas/BusinessContactOrderByWithRelationInputSchema.js';
import { BusinessContactWhereUniqueInputSchema } from '../inputTypeSchemas/BusinessContactWhereUniqueInputSchema.js';
export const BusinessContactAggregateArgsSchema = z.object({
    where: BusinessContactWhereInputSchema.optional(),
    orderBy: z.union([BusinessContactOrderByWithRelationInputSchema.array(), BusinessContactOrderByWithRelationInputSchema]).optional(),
    cursor: BusinessContactWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export default BusinessContactAggregateArgsSchema;
