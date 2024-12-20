import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { KanBanListCreateWithoutKanbanInputSchema } from './KanBanListCreateWithoutKanbanInputSchema.js';
import { KanBanListUncheckedCreateWithoutKanbanInputSchema } from './KanBanListUncheckedCreateWithoutKanbanInputSchema.js';
import { KanBanListCreateOrConnectWithoutKanbanInputSchema } from './KanBanListCreateOrConnectWithoutKanbanInputSchema.js';
import { KanBanListCreateManyKanbanInputEnvelopeSchema } from './KanBanListCreateManyKanbanInputEnvelopeSchema.js';
import { KanBanListWhereUniqueInputSchema } from './KanBanListWhereUniqueInputSchema.js';
export const KanBanListCreateNestedManyWithoutKanbanInputSchema: z.ZodType<Prisma.KanBanListCreateNestedManyWithoutKanbanInput> = z.object({
  create: z.union([ z.lazy(() => KanBanListCreateWithoutKanbanInputSchema),z.lazy(() => KanBanListCreateWithoutKanbanInputSchema).array(),z.lazy(() => KanBanListUncheckedCreateWithoutKanbanInputSchema),z.lazy(() => KanBanListUncheckedCreateWithoutKanbanInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => KanBanListCreateOrConnectWithoutKanbanInputSchema),z.lazy(() => KanBanListCreateOrConnectWithoutKanbanInputSchema).array() ]).optional(),
  createMany: z.lazy(() => KanBanListCreateManyKanbanInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => KanBanListWhereUniqueInputSchema),z.lazy(() => KanBanListWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default KanBanListCreateNestedManyWithoutKanbanInputSchema;