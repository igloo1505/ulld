import { z } from 'zod';
import { ReadingListWhereInputSchema } from '../inputTypeSchemas/ReadingListWhereInputSchema.js';
import { ReadingListOrderByWithRelationInputSchema } from '../inputTypeSchemas/ReadingListOrderByWithRelationInputSchema.js';
import { ReadingListWhereUniqueInputSchema } from '../inputTypeSchemas/ReadingListWhereUniqueInputSchema.js';
export const ReadingListAggregateArgsSchema = z.object({
    where: ReadingListWhereInputSchema.optional(),
    orderBy: z.union([ReadingListOrderByWithRelationInputSchema.array(), ReadingListOrderByWithRelationInputSchema]).optional(),
    cursor: ReadingListWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export default ReadingListAggregateArgsSchema;
