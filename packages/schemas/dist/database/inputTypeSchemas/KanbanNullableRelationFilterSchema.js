import { z } from 'zod';
import { KanbanWhereInputSchema } from './KanbanWhereInputSchema.js';
export const KanbanNullableRelationFilterSchema = z.object({
    is: z.lazy(() => KanbanWhereInputSchema).optional().nullable(),
    isNot: z.lazy(() => KanbanWhereInputSchema).optional().nullable()
}).strict();
export default KanbanNullableRelationFilterSchema;
