import { z } from 'zod';
import { KanbanUpdateManyMutationInputSchema } from '../inputTypeSchemas/KanbanUpdateManyMutationInputSchema.js';
import { KanbanUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/KanbanUncheckedUpdateManyInputSchema.js';
import { KanbanWhereInputSchema } from '../inputTypeSchemas/KanbanWhereInputSchema.js';
export const KanbanUpdateManyArgsSchema = z.object({
    data: z.union([KanbanUpdateManyMutationInputSchema, KanbanUncheckedUpdateManyInputSchema]),
    where: KanbanWhereInputSchema.optional(),
}).strict();
export default KanbanUpdateManyArgsSchema;
