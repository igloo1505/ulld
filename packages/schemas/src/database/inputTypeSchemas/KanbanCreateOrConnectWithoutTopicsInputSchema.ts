import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { KanbanWhereUniqueInputSchema } from '../KanbanWhereUniqueInputSchema.js';
import { KanbanCreateWithoutTopicsInputSchema } from '../KanbanCreateWithoutTopicsInputSchema.js';
import { KanbanUncheckedCreateWithoutTopicsInputSchema } from '../KanbanUncheckedCreateWithoutTopicsInputSchema.js';
export const KanbanCreateOrConnectWithoutTopicsInputSchema: z.ZodType<Prisma.KanbanCreateOrConnectWithoutTopicsInput> = z.object({
  where: z.lazy(() => KanbanWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => KanbanCreateWithoutTopicsInputSchema),z.lazy(() => KanbanUncheckedCreateWithoutTopicsInputSchema) ]),
}).strict();
export default KanbanCreateOrConnectWithoutTopicsInputSchema;