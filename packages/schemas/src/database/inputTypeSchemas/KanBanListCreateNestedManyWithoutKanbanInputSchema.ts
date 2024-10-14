import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanBanListCreateWithoutKanbanInputSchema } from './KanBanListCreateWithoutKanbanInputSchema';
import { KanBanListUncheckedCreateWithoutKanbanInputSchema } from './KanBanListUncheckedCreateWithoutKanbanInputSchema';
import { KanBanListCreateOrConnectWithoutKanbanInputSchema } from './KanBanListCreateOrConnectWithoutKanbanInputSchema';
import { KanBanListCreateManyKanbanInputEnvelopeSchema } from './KanBanListCreateManyKanbanInputEnvelopeSchema';
import { KanBanListWhereUniqueInputSchema } from './KanBanListWhereUniqueInputSchema';

export const KanBanListCreateNestedManyWithoutKanbanInputSchema: z.ZodType<Prisma.KanBanListCreateNestedManyWithoutKanbanInput> = z.object({
  create: z.union([ z.lazy(() => KanBanListCreateWithoutKanbanInputSchema),z.lazy(() => KanBanListCreateWithoutKanbanInputSchema).array(),z.lazy(() => KanBanListUncheckedCreateWithoutKanbanInputSchema),z.lazy(() => KanBanListUncheckedCreateWithoutKanbanInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => KanBanListCreateOrConnectWithoutKanbanInputSchema),z.lazy(() => KanBanListCreateOrConnectWithoutKanbanInputSchema).array() ]).optional(),
  createMany: z.lazy(() => KanBanListCreateManyKanbanInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => KanBanListWhereUniqueInputSchema),z.lazy(() => KanBanListWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default KanBanListCreateNestedManyWithoutKanbanInputSchema;
