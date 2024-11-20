import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanbanWhereUniqueInputSchema } from './KanbanWhereUniqueInputSchema';
import { KanbanCreateWithoutSubjectsInputSchema } from './KanbanCreateWithoutSubjectsInputSchema';
import { KanbanUncheckedCreateWithoutSubjectsInputSchema } from './KanbanUncheckedCreateWithoutSubjectsInputSchema';

export const KanbanCreateOrConnectWithoutSubjectsInputSchema: z.ZodType<Prisma.KanbanCreateOrConnectWithoutSubjectsInput> = z.object({
  where: z.lazy(() => KanbanWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => KanbanCreateWithoutSubjectsInputSchema),z.lazy(() => KanbanUncheckedCreateWithoutSubjectsInputSchema) ]),
}).strict();

export default KanbanCreateOrConnectWithoutSubjectsInputSchema;
