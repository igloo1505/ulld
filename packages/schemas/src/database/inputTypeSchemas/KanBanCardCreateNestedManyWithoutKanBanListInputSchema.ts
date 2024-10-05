import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanBanCardCreateWithoutKanBanListInputSchema } from './KanBanCardCreateWithoutKanBanListInputSchema';
import { KanBanCardUncheckedCreateWithoutKanBanListInputSchema } from './KanBanCardUncheckedCreateWithoutKanBanListInputSchema';
import { KanBanCardCreateOrConnectWithoutKanBanListInputSchema } from './KanBanCardCreateOrConnectWithoutKanBanListInputSchema';
import { KanBanCardCreateManyKanBanListInputEnvelopeSchema } from './KanBanCardCreateManyKanBanListInputEnvelopeSchema';
import { KanBanCardWhereUniqueInputSchema } from './KanBanCardWhereUniqueInputSchema';

export const KanBanCardCreateNestedManyWithoutKanBanListInputSchema: z.ZodType<Prisma.KanBanCardCreateNestedManyWithoutKanBanListInput> = z.object({
  create: z.union([ z.lazy(() => KanBanCardCreateWithoutKanBanListInputSchema),z.lazy(() => KanBanCardCreateWithoutKanBanListInputSchema).array(),z.lazy(() => KanBanCardUncheckedCreateWithoutKanBanListInputSchema),z.lazy(() => KanBanCardUncheckedCreateWithoutKanBanListInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => KanBanCardCreateOrConnectWithoutKanBanListInputSchema),z.lazy(() => KanBanCardCreateOrConnectWithoutKanBanListInputSchema).array() ]).optional(),
  createMany: z.lazy(() => KanBanCardCreateManyKanBanListInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => KanBanCardWhereUniqueInputSchema),z.lazy(() => KanBanCardWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default KanBanCardCreateNestedManyWithoutKanBanListInputSchema;
