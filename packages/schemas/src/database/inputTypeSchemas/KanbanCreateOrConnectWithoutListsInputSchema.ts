import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanbanWhereUniqueInputSchema } from './KanbanWhereUniqueInputSchema';
import { KanbanCreateWithoutListsInputSchema } from './KanbanCreateWithoutListsInputSchema';
import { KanbanUncheckedCreateWithoutListsInputSchema } from './KanbanUncheckedCreateWithoutListsInputSchema';

export const KanbanCreateOrConnectWithoutListsInputSchema: z.ZodType<Prisma.KanbanCreateOrConnectWithoutListsInput> = z.object({
  where: z.lazy(() => KanbanWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => KanbanCreateWithoutListsInputSchema),z.lazy(() => KanbanUncheckedCreateWithoutListsInputSchema) ]),
}).strict();

export default KanbanCreateOrConnectWithoutListsInputSchema;
