import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanbanCreateWithoutListsInputSchema } from './KanbanCreateWithoutListsInputSchema';
import { KanbanUncheckedCreateWithoutListsInputSchema } from './KanbanUncheckedCreateWithoutListsInputSchema';
import { KanbanCreateOrConnectWithoutListsInputSchema } from './KanbanCreateOrConnectWithoutListsInputSchema';
import { KanbanWhereUniqueInputSchema } from './KanbanWhereUniqueInputSchema';

export const KanbanCreateNestedOneWithoutListsInputSchema: z.ZodType<Prisma.KanbanCreateNestedOneWithoutListsInput> = z.object({
  create: z.union([ z.lazy(() => KanbanCreateWithoutListsInputSchema),z.lazy(() => KanbanUncheckedCreateWithoutListsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => KanbanCreateOrConnectWithoutListsInputSchema).optional(),
  connect: z.lazy(() => KanbanWhereUniqueInputSchema).optional()
}).strict();

export default KanbanCreateNestedOneWithoutListsInputSchema;
