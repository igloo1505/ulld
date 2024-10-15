import { z } from 'zod';
import { KanbanWhereInputSchema } from '../inputTypeSchemas/KanbanWhereInputSchema.js';
import { KanbanOrderByWithRelationInputSchema } from '../inputTypeSchemas/KanbanOrderByWithRelationInputSchema.js';
import { KanbanWhereUniqueInputSchema } from '../inputTypeSchemas/KanbanWhereUniqueInputSchema.js';
export const KanbanAggregateArgsSchema = z.object({
    where: KanbanWhereInputSchema.optional(),
    orderBy: z.union([KanbanOrderByWithRelationInputSchema.array(), KanbanOrderByWithRelationInputSchema]).optional(),
    cursor: KanbanWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export default KanbanAggregateArgsSchema;
