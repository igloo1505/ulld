import { z } from 'zod';
import { ToDoWhereInputSchema } from '../inputTypeSchemas/ToDoWhereInputSchema.js';
import { ToDoOrderByWithRelationInputSchema } from '../inputTypeSchemas/ToDoOrderByWithRelationInputSchema.js';
import { ToDoWhereUniqueInputSchema } from '../inputTypeSchemas/ToDoWhereUniqueInputSchema.js';
export const ToDoAggregateArgsSchema = z.object({
    where: ToDoWhereInputSchema.optional(),
    orderBy: z.union([ToDoOrderByWithRelationInputSchema.array(), ToDoOrderByWithRelationInputSchema]).optional(),
    cursor: ToDoWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export default ToDoAggregateArgsSchema;
