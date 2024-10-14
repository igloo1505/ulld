import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanbanCreateWithoutSubjectsInputSchema } from './KanbanCreateWithoutSubjectsInputSchema';
import { KanbanUncheckedCreateWithoutSubjectsInputSchema } from './KanbanUncheckedCreateWithoutSubjectsInputSchema';
import { KanbanCreateOrConnectWithoutSubjectsInputSchema } from './KanbanCreateOrConnectWithoutSubjectsInputSchema';
import { KanbanUpsertWithoutSubjectsInputSchema } from './KanbanUpsertWithoutSubjectsInputSchema';
import { KanbanWhereInputSchema } from './KanbanWhereInputSchema';
import { KanbanWhereUniqueInputSchema } from './KanbanWhereUniqueInputSchema';
import { KanbanUpdateToOneWithWhereWithoutSubjectsInputSchema } from './KanbanUpdateToOneWithWhereWithoutSubjectsInputSchema';
import { KanbanUpdateWithoutSubjectsInputSchema } from './KanbanUpdateWithoutSubjectsInputSchema';
import { KanbanUncheckedUpdateWithoutSubjectsInputSchema } from './KanbanUncheckedUpdateWithoutSubjectsInputSchema';

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
