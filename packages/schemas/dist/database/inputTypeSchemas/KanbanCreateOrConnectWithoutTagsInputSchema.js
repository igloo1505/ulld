import { z } from 'zod';
import { KanbanWhereUniqueInputSchema } from './KanbanWhereUniqueInputSchema.js';
import { KanbanCreateWithoutTagsInputSchema } from './KanbanCreateWithoutTagsInputSchema.js';
import { KanbanUncheckedCreateWithoutTagsInputSchema } from './KanbanUncheckedCreateWithoutTagsInputSchema.js';
export const KanbanCreateOrConnectWithoutTagsInputSchema = z.object({
    where: z.lazy(() => KanbanWhereUniqueInputSchema),
    create: z.union([z.lazy(() => KanbanCreateWithoutTagsInputSchema), z.lazy(() => KanbanUncheckedCreateWithoutTagsInputSchema)]),
}).strict();
export default KanbanCreateOrConnectWithoutTagsInputSchema;
