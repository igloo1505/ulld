import { z } from 'zod';
import { KanbanWhereInputSchema } from '../inputTypeSchemas/KanbanWhereInputSchema.js';
export const KanbanDeleteManyArgsSchema = z.object({
    where: KanbanWhereInputSchema.optional(),
}).strict();
export default KanbanDeleteManyArgsSchema;
