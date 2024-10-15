import { z } from 'zod';
import { KanbanCreateManyInputSchema } from '../inputTypeSchemas/KanbanCreateManyInputSchema.js';
export const KanbanCreateManyAndReturnArgsSchema = z.object({
    data: z.union([KanbanCreateManyInputSchema, KanbanCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default KanbanCreateManyAndReturnArgsSchema;
