import { z } from 'zod';
import { KanbanCreateWithoutTopicsInputSchema } from './KanbanCreateWithoutTopicsInputSchema.js';
import { KanbanUncheckedCreateWithoutTopicsInputSchema } from './KanbanUncheckedCreateWithoutTopicsInputSchema.js';
import { KanbanCreateOrConnectWithoutTopicsInputSchema } from './KanbanCreateOrConnectWithoutTopicsInputSchema.js';
import { KanbanWhereUniqueInputSchema } from './KanbanWhereUniqueInputSchema.js';
export const KanbanCreateNestedOneWithoutTopicsInputSchema = z.object({
    create: z.union([z.lazy(() => KanbanCreateWithoutTopicsInputSchema), z.lazy(() => KanbanUncheckedCreateWithoutTopicsInputSchema)]).optional(),
    connectOrCreate: z.lazy(() => KanbanCreateOrConnectWithoutTopicsInputSchema).optional(),
    connect: z.lazy(() => KanbanWhereUniqueInputSchema).optional()
}).strict();
export default KanbanCreateNestedOneWithoutTopicsInputSchema;
