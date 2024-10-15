import { z } from 'zod';
import { KanbanCreateWithoutListsInputSchema } from './KanbanCreateWithoutListsInputSchema.js';
import { KanbanUncheckedCreateWithoutListsInputSchema } from './KanbanUncheckedCreateWithoutListsInputSchema.js';
import { KanbanCreateOrConnectWithoutListsInputSchema } from './KanbanCreateOrConnectWithoutListsInputSchema.js';
import { KanbanUpsertWithoutListsInputSchema } from './KanbanUpsertWithoutListsInputSchema.js';
import { KanbanWhereInputSchema } from './KanbanWhereInputSchema.js';
import { KanbanWhereUniqueInputSchema } from './KanbanWhereUniqueInputSchema.js';
import { KanbanUpdateToOneWithWhereWithoutListsInputSchema } from './KanbanUpdateToOneWithWhereWithoutListsInputSchema.js';
import { KanbanUpdateWithoutListsInputSchema } from './KanbanUpdateWithoutListsInputSchema.js';
import { KanbanUncheckedUpdateWithoutListsInputSchema } from './KanbanUncheckedUpdateWithoutListsInputSchema.js';
export const KanbanUpdateOneWithoutListsNestedInputSchema = z.object({
    create: z.union([z.lazy(() => KanbanCreateWithoutListsInputSchema), z.lazy(() => KanbanUncheckedCreateWithoutListsInputSchema)]).optional(),
    connectOrCreate: z.lazy(() => KanbanCreateOrConnectWithoutListsInputSchema).optional(),
    upsert: z.lazy(() => KanbanUpsertWithoutListsInputSchema).optional(),
    disconnect: z.union([z.boolean(), z.lazy(() => KanbanWhereInputSchema)]).optional(),
    delete: z.union([z.boolean(), z.lazy(() => KanbanWhereInputSchema)]).optional(),
    connect: z.lazy(() => KanbanWhereUniqueInputSchema).optional(),
    update: z.union([z.lazy(() => KanbanUpdateToOneWithWhereWithoutListsInputSchema), z.lazy(() => KanbanUpdateWithoutListsInputSchema), z.lazy(() => KanbanUncheckedUpdateWithoutListsInputSchema)]).optional(),
}).strict();
export default KanbanUpdateOneWithoutListsNestedInputSchema;
