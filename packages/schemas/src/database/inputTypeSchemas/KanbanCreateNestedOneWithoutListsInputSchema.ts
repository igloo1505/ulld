import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { KanbanCreateWithoutListsInputSchema } from '../KanbanCreateWithoutListsInputSchema.js';
import { KanbanUncheckedCreateWithoutListsInputSchema } from '../KanbanUncheckedCreateWithoutListsInputSchema.js';
import { KanbanCreateOrConnectWithoutListsInputSchema } from '../KanbanCreateOrConnectWithoutListsInputSchema.js';
import { KanbanWhereUniqueInputSchema } from '../KanbanWhereUniqueInputSchema.js';
export const KanbanCreateNestedOneWithoutListsInputSchema: z.ZodType<Prisma.KanbanCreateNestedOneWithoutListsInput> = z.object({
  create: z.union([ z.lazy(() => KanbanCreateWithoutListsInputSchema),z.lazy(() => KanbanUncheckedCreateWithoutListsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => KanbanCreateOrConnectWithoutListsInputSchema).optional(),
  connect: z.lazy(() => KanbanWhereUniqueInputSchema).optional()
}).strict();
export default KanbanCreateNestedOneWithoutListsInputSchema;