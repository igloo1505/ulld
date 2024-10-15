import { z } from 'zod';
import { CitationsGroupWhereInputSchema } from '../inputTypeSchemas/CitationsGroupWhereInputSchema.js';
import { CitationsGroupOrderByWithRelationInputSchema } from '../inputTypeSchemas/CitationsGroupOrderByWithRelationInputSchema.js';
import { CitationsGroupWhereUniqueInputSchema } from '../inputTypeSchemas/CitationsGroupWhereUniqueInputSchema.js';
export const CitationsGroupAggregateArgsSchema = z.object({
    where: CitationsGroupWhereInputSchema.optional(),
    orderBy: z.union([CitationsGroupOrderByWithRelationInputSchema.array(), CitationsGroupOrderByWithRelationInputSchema]).optional(),
    cursor: CitationsGroupWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export default CitationsGroupAggregateArgsSchema;
