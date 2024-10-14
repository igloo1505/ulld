import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { KanbanCreateWithoutSubjectsInputSchema } from './KanbanCreateWithoutSubjectsInputSchema.js';
import { KanbanUncheckedCreateWithoutSubjectsInputSchema } from './KanbanUncheckedCreateWithoutSubjectsInputSchema.js';
import { KanbanCreateOrConnectWithoutSubjectsInputSchema } from './KanbanCreateOrConnectWithoutSubjectsInputSchema.js';
import { KanbanWhereUniqueInputSchema } from './KanbanWhereUniqueInputSchema.js';
export const KanbanCreateNestedOneWithoutSubjectsInputSchema: z.ZodType<Prisma.KanbanCreateNestedOneWithoutSubjectsInput> = z.object({
  create: z.union([ z.lazy(() => KanbanCreateWithoutSubjectsInputSchema),z.lazy(() => KanbanUncheckedCreateWithoutSubjectsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => KanbanCreateOrConnectWithoutSubjectsInputSchema).optional(),
  connect: z.lazy(() => KanbanWhereUniqueInputSchema).optional()
}).strict();
export default KanbanCreateNestedOneWithoutSubjectsInputSchema;