import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanbanCreateWithoutSubjectsInputSchema } from './KanbanCreateWithoutSubjectsInputSchema';
import { KanbanUncheckedCreateWithoutSubjectsInputSchema } from './KanbanUncheckedCreateWithoutSubjectsInputSchema';
import { KanbanCreateOrConnectWithoutSubjectsInputSchema } from './KanbanCreateOrConnectWithoutSubjectsInputSchema';
import { KanbanWhereUniqueInputSchema } from './KanbanWhereUniqueInputSchema';

export const KanbanCreateNestedOneWithoutSubjectsInputSchema: z.ZodType<Prisma.KanbanCreateNestedOneWithoutSubjectsInput> = z.object({
  create: z.union([ z.lazy(() => KanbanCreateWithoutSubjectsInputSchema),z.lazy(() => KanbanUncheckedCreateWithoutSubjectsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => KanbanCreateOrConnectWithoutSubjectsInputSchema).optional(),
  connect: z.lazy(() => KanbanWhereUniqueInputSchema).optional()
}).strict();

export default KanbanCreateNestedOneWithoutSubjectsInputSchema;
