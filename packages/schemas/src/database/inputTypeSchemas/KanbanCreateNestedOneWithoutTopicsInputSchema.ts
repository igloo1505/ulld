import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanbanCreateWithoutTopicsInputSchema } from './KanbanCreateWithoutTopicsInputSchema';
import { KanbanUncheckedCreateWithoutTopicsInputSchema } from './KanbanUncheckedCreateWithoutTopicsInputSchema';
import { KanbanCreateOrConnectWithoutTopicsInputSchema } from './KanbanCreateOrConnectWithoutTopicsInputSchema';
import { KanbanWhereUniqueInputSchema } from './KanbanWhereUniqueInputSchema';

export const KanbanCreateNestedOneWithoutTopicsInputSchema: z.ZodType<Prisma.KanbanCreateNestedOneWithoutTopicsInput> = z.object({
  create: z.union([ z.lazy(() => KanbanCreateWithoutTopicsInputSchema),z.lazy(() => KanbanUncheckedCreateWithoutTopicsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => KanbanCreateOrConnectWithoutTopicsInputSchema).optional(),
  connect: z.lazy(() => KanbanWhereUniqueInputSchema).optional()
}).strict();

export default KanbanCreateNestedOneWithoutTopicsInputSchema;
