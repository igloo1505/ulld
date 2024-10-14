import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { KanBanCardCreateWithoutKanBanListInputSchema } from './KanBanCardCreateWithoutKanBanListInputSchema.js';
import { KanBanCardUncheckedCreateWithoutKanBanListInputSchema } from './KanBanCardUncheckedCreateWithoutKanBanListInputSchema.js';
import { KanBanCardCreateOrConnectWithoutKanBanListInputSchema } from './KanBanCardCreateOrConnectWithoutKanBanListInputSchema.js';
import { KanBanCardCreateManyKanBanListInputEnvelopeSchema } from './KanBanCardCreateManyKanBanListInputEnvelopeSchema.js';
import { KanBanCardWhereUniqueInputSchema } from './KanBanCardWhereUniqueInputSchema.js';
export const KanBanCardUncheckedCreateNestedManyWithoutKanBanListInputSchema: z.ZodType<Prisma.KanBanCardUncheckedCreateNestedManyWithoutKanBanListInput> = z.object({
  create: z.union([ z.lazy(() => KanBanCardCreateWithoutKanBanListInputSchema),z.lazy(() => KanBanCardCreateWithoutKanBanListInputSchema).array(),z.lazy(() => KanBanCardUncheckedCreateWithoutKanBanListInputSchema),z.lazy(() => KanBanCardUncheckedCreateWithoutKanBanListInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => KanBanCardCreateOrConnectWithoutKanBanListInputSchema),z.lazy(() => KanBanCardCreateOrConnectWithoutKanBanListInputSchema).array() ]).optional(),
  createMany: z.lazy(() => KanBanCardCreateManyKanBanListInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => KanBanCardWhereUniqueInputSchema),z.lazy(() => KanBanCardWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default KanBanCardUncheckedCreateNestedManyWithoutKanBanListInputSchema;