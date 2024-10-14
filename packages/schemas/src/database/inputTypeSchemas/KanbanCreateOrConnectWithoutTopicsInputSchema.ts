import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanbanWhereUniqueInputSchema } from './KanbanWhereUniqueInputSchema';
import { KanbanCreateWithoutTopicsInputSchema } from './KanbanCreateWithoutTopicsInputSchema';
import { KanbanUncheckedCreateWithoutTopicsInputSchema } from './KanbanUncheckedCreateWithoutTopicsInputSchema';

export const KanbanCreateOrConnectWithoutTopicsInputSchema: z.ZodType<Prisma.KanbanCreateOrConnectWithoutTopicsInput> = z.object({
  where: z.lazy(() => KanbanWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => KanbanCreateWithoutTopicsInputSchema),z.lazy(() => KanbanUncheckedCreateWithoutTopicsInputSchema) ]),
}).strict();

export default KanbanCreateOrConnectWithoutTopicsInputSchema;
