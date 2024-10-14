import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanBanCardCreateWithoutKanBanListInputSchema } from './KanBanCardCreateWithoutKanBanListInputSchema';
import { KanBanCardUncheckedCreateWithoutKanBanListInputSchema } from './KanBanCardUncheckedCreateWithoutKanBanListInputSchema';
import { KanBanCardCreateOrConnectWithoutKanBanListInputSchema } from './KanBanCardCreateOrConnectWithoutKanBanListInputSchema';
import { KanBanCardUpsertWithWhereUniqueWithoutKanBanListInputSchema } from './KanBanCardUpsertWithWhereUniqueWithoutKanBanListInputSchema';
import { KanBanCardCreateManyKanBanListInputEnvelopeSchema } from './KanBanCardCreateManyKanBanListInputEnvelopeSchema';
import { KanBanCardWhereUniqueInputSchema } from './KanBanCardWhereUniqueInputSchema';
import { KanBanCardUpdateWithWhereUniqueWithoutKanBanListInputSchema } from './KanBanCardUpdateWithWhereUniqueWithoutKanBanListInputSchema';
import { KanBanCardUpdateManyWithWhereWithoutKanBanListInputSchema } from './KanBanCardUpdateManyWithWhereWithoutKanBanListInputSchema';
import { KanBanCardScalarWhereInputSchema } from './KanBanCardScalarWhereInputSchema';

export const KanBanCardUncheckedUpdateManyWithoutKanBanListNestedInputSchema: z.ZodType<Prisma.KanBanCardUncheckedUpdateManyWithoutKanBanListNestedInput> = z.object({
  create: z.union([ z.lazy(() => KanBanCardCreateWithoutKanBanListInputSchema),z.lazy(() => KanBanCardCreateWithoutKanBanListInputSchema).array(),z.lazy(() => KanBanCardUncheckedCreateWithoutKanBanListInputSchema),z.lazy(() => KanBanCardUncheckedCreateWithoutKanBanListInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => KanBanCardCreateOrConnectWithoutKanBanListInputSchema),z.lazy(() => KanBanCardCreateOrConnectWithoutKanBanListInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => KanBanCardUpsertWithWhereUniqueWithoutKanBanListInputSchema),z.lazy(() => KanBanCardUpsertWithWhereUniqueWithoutKanBanListInputSchema).array() ]).optional(),
  createMany: z.lazy(() => KanBanCardCreateManyKanBanListInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => KanBanCardWhereUniqueInputSchema),z.lazy(() => KanBanCardWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => KanBanCardWhereUniqueInputSchema),z.lazy(() => KanBanCardWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => KanBanCardWhereUniqueInputSchema),z.lazy(() => KanBanCardWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => KanBanCardWhereUniqueInputSchema),z.lazy(() => KanBanCardWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => KanBanCardUpdateWithWhereUniqueWithoutKanBanListInputSchema),z.lazy(() => KanBanCardUpdateWithWhereUniqueWithoutKanBanListInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => KanBanCardUpdateManyWithWhereWithoutKanBanListInputSchema),z.lazy(() => KanBanCardUpdateManyWithWhereWithoutKanBanListInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => KanBanCardScalarWhereInputSchema),z.lazy(() => KanBanCardScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default KanBanCardUncheckedUpdateManyWithoutKanBanListNestedInputSchema;
