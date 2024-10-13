import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { KanBanListCreateWithoutKanbanInputSchema } from '../KanBanListCreateWithoutKanbanInputSchema.js';
import { KanBanListUncheckedCreateWithoutKanbanInputSchema } from '../KanBanListUncheckedCreateWithoutKanbanInputSchema.js';
import { KanBanListCreateOrConnectWithoutKanbanInputSchema } from '../KanBanListCreateOrConnectWithoutKanbanInputSchema.js';
import { KanBanListUpsertWithWhereUniqueWithoutKanbanInputSchema } from '../KanBanListUpsertWithWhereUniqueWithoutKanbanInputSchema.js';
import { KanBanListCreateManyKanbanInputEnvelopeSchema } from '../KanBanListCreateManyKanbanInputEnvelopeSchema.js';
import { KanBanListWhereUniqueInputSchema } from '../KanBanListWhereUniqueInputSchema.js';
import { KanBanListUpdateWithWhereUniqueWithoutKanbanInputSchema } from '../KanBanListUpdateWithWhereUniqueWithoutKanbanInputSchema.js';
import { KanBanListUpdateManyWithWhereWithoutKanbanInputSchema } from '../KanBanListUpdateManyWithWhereWithoutKanbanInputSchema.js';
import { KanBanListScalarWhereInputSchema } from '../KanBanListScalarWhereInputSchema.js';
export const KanBanListUpdateManyWithoutKanbanNestedInputSchema: z.ZodType<Prisma.KanBanListUpdateManyWithoutKanbanNestedInput> = z.object({
  create: z.union([ z.lazy(() => KanBanListCreateWithoutKanbanInputSchema),z.lazy(() => KanBanListCreateWithoutKanbanInputSchema).array(),z.lazy(() => KanBanListUncheckedCreateWithoutKanbanInputSchema),z.lazy(() => KanBanListUncheckedCreateWithoutKanbanInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => KanBanListCreateOrConnectWithoutKanbanInputSchema),z.lazy(() => KanBanListCreateOrConnectWithoutKanbanInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => KanBanListUpsertWithWhereUniqueWithoutKanbanInputSchema),z.lazy(() => KanBanListUpsertWithWhereUniqueWithoutKanbanInputSchema).array() ]).optional(),
  createMany: z.lazy(() => KanBanListCreateManyKanbanInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => KanBanListWhereUniqueInputSchema),z.lazy(() => KanBanListWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => KanBanListWhereUniqueInputSchema),z.lazy(() => KanBanListWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => KanBanListWhereUniqueInputSchema),z.lazy(() => KanBanListWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => KanBanListWhereUniqueInputSchema),z.lazy(() => KanBanListWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => KanBanListUpdateWithWhereUniqueWithoutKanbanInputSchema),z.lazy(() => KanBanListUpdateWithWhereUniqueWithoutKanbanInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => KanBanListUpdateManyWithWhereWithoutKanbanInputSchema),z.lazy(() => KanBanListUpdateManyWithWhereWithoutKanbanInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => KanBanListScalarWhereInputSchema),z.lazy(() => KanBanListScalarWhereInputSchema).array() ]).optional(),
}).strict();
export default KanBanListUpdateManyWithoutKanbanNestedInputSchema;