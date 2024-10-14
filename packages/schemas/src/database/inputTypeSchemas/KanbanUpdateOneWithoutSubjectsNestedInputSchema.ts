import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { KanbanCreateWithoutSubjectsInputSchema } from './KanbanCreateWithoutSubjectsInputSchema.js';
import { KanbanUncheckedCreateWithoutSubjectsInputSchema } from './KanbanUncheckedCreateWithoutSubjectsInputSchema.js';
import { KanbanCreateOrConnectWithoutSubjectsInputSchema } from './KanbanCreateOrConnectWithoutSubjectsInputSchema.js';
import { KanbanUpsertWithoutSubjectsInputSchema } from './KanbanUpsertWithoutSubjectsInputSchema.js';
import { KanbanWhereInputSchema } from './KanbanWhereInputSchema.js';
import { KanbanWhereUniqueInputSchema } from './KanbanWhereUniqueInputSchema.js';
import { KanbanUpdateToOneWithWhereWithoutSubjectsInputSchema } from './KanbanUpdateToOneWithWhereWithoutSubjectsInputSchema.js';
import { KanbanUpdateWithoutSubjectsInputSchema } from './KanbanUpdateWithoutSubjectsInputSchema.js';
import { KanbanUncheckedUpdateWithoutSubjectsInputSchema } from './KanbanUncheckedUpdateWithoutSubjectsInputSchema.js';
export const KanbanUpdateOneWithoutSubjectsNestedInputSchema: z.ZodType<Prisma.KanbanUpdateOneWithoutSubjectsNestedInput> = z.object({
  create: z.union([ z.lazy(() => KanbanCreateWithoutSubjectsInputSchema),z.lazy(() => KanbanUncheckedCreateWithoutSubjectsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => KanbanCreateOrConnectWithoutSubjectsInputSchema).optional(),
  upsert: z.lazy(() => KanbanUpsertWithoutSubjectsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => KanbanWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => KanbanWhereInputSchema) ]).optional(),
  connect: z.lazy(() => KanbanWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => KanbanUpdateToOneWithWhereWithoutSubjectsInputSchema),z.lazy(() => KanbanUpdateWithoutSubjectsInputSchema),z.lazy(() => KanbanUncheckedUpdateWithoutSubjectsInputSchema) ]).optional(),
}).strict();
export default KanbanUpdateOneWithoutSubjectsNestedInputSchema;