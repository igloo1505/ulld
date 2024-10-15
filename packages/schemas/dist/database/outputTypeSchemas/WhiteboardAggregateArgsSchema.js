import { z } from 'zod';
import { WhiteboardWhereInputSchema } from '../inputTypeSchemas/WhiteboardWhereInputSchema.js';
import { WhiteboardOrderByWithRelationInputSchema } from '../inputTypeSchemas/WhiteboardOrderByWithRelationInputSchema.js';
import { WhiteboardWhereUniqueInputSchema } from '../inputTypeSchemas/WhiteboardWhereUniqueInputSchema.js';
export const WhiteboardAggregateArgsSchema = z.object({
    where: WhiteboardWhereInputSchema.optional(),
    orderBy: z.union([WhiteboardOrderByWithRelationInputSchema.array(), WhiteboardOrderByWithRelationInputSchema]).optional(),
    cursor: WhiteboardWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export default WhiteboardAggregateArgsSchema;
