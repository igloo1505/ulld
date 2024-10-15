import { z } from 'zod';
import { RandomImageWhereInputSchema } from '../inputTypeSchemas/RandomImageWhereInputSchema.js';
import { RandomImageOrderByWithRelationInputSchema } from '../inputTypeSchemas/RandomImageOrderByWithRelationInputSchema.js';
import { RandomImageWhereUniqueInputSchema } from '../inputTypeSchemas/RandomImageWhereUniqueInputSchema.js';
export const RandomImageAggregateArgsSchema = z.object({
    where: RandomImageWhereInputSchema.optional(),
    orderBy: z.union([RandomImageOrderByWithRelationInputSchema.array(), RandomImageOrderByWithRelationInputSchema]).optional(),
    cursor: RandomImageWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export default RandomImageAggregateArgsSchema;
