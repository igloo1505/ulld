import { z } from 'zod';
import { KanbanCreateManyInputSchema } from '../inputTypeSchemas/KanbanCreateManyInputSchema.js';
export const KanbanCreateManyArgsSchema = z.object({
    data: z.union([KanbanCreateManyInputSchema, KanbanCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default KanbanCreateManyArgsSchema;
