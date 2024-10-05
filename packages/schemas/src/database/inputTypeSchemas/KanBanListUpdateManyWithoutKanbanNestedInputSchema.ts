import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanBanListCreateWithoutKanbanInputSchema } from './KanBanListCreateWithoutKanbanInputSchema';
import { KanBanListUncheckedCreateWithoutKanbanInputSchema } from './KanBanListUncheckedCreateWithoutKanbanInputSchema';
import { KanBanListCreateOrConnectWithoutKanbanInputSchema } from './KanBanListCreateOrConnectWithoutKanbanInputSchema';
import { KanBanListUpsertWithWhereUniqueWithoutKanbanInputSchema } from './KanBanListUpsertWithWhereUniqueWithoutKanbanInputSchema';
import { KanBanListCreateManyKanbanInputEnvelopeSchema } from './KanBanListCreateManyKanbanInputEnvelopeSchema';
import { KanBanListWhereUniqueInputSchema } from './KanBanListWhereUniqueInputSchema';
import { KanBanListUpdateWithWhereUniqueWithoutKanbanInputSchema } from './KanBanListUpdateWithWhereUniqueWithoutKanbanInputSchema';
import { KanBanListUpdateManyWithWhereWithoutKanbanInputSchema } from './KanBanListUpdateManyWithWhereWithoutKanbanInputSchema';
import { KanBanListScalarWhereInputSchema } from './KanBanListScalarWhereInputSchema';

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
