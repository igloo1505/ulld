import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanBanListCreateWithoutCardsInputSchema } from './KanBanListCreateWithoutCardsInputSchema';
import { KanBanListUncheckedCreateWithoutCardsInputSchema } from './KanBanListUncheckedCreateWithoutCardsInputSchema';
import { KanBanListCreateOrConnectWithoutCardsInputSchema } from './KanBanListCreateOrConnectWithoutCardsInputSchema';
import { KanBanListUpsertWithoutCardsInputSchema } from './KanBanListUpsertWithoutCardsInputSchema';
import { KanBanListWhereInputSchema } from './KanBanListWhereInputSchema';
import { KanBanListWhereUniqueInputSchema } from './KanBanListWhereUniqueInputSchema';
import { KanBanListUpdateToOneWithWhereWithoutCardsInputSchema } from './KanBanListUpdateToOneWithWhereWithoutCardsInputSchema';
import { KanBanListUpdateWithoutCardsInputSchema } from './KanBanListUpdateWithoutCardsInputSchema';
import { KanBanListUncheckedUpdateWithoutCardsInputSchema } from './KanBanListUncheckedUpdateWithoutCardsInputSchema';

export const KanBanListUpdateOneWithoutCardsNestedInputSchema: z.ZodType<Prisma.KanBanListUpdateOneWithoutCardsNestedInput> = z.object({
  create: z.union([ z.lazy(() => KanBanListCreateWithoutCardsInputSchema),z.lazy(() => KanBanListUncheckedCreateWithoutCardsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => KanBanListCreateOrConnectWithoutCardsInputSchema).optional(),
  upsert: z.lazy(() => KanBanListUpsertWithoutCardsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => KanBanListWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => KanBanListWhereInputSchema) ]).optional(),
  connect: z.lazy(() => KanBanListWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => KanBanListUpdateToOneWithWhereWithoutCardsInputSchema),z.lazy(() => KanBanListUpdateWithoutCardsInputSchema),z.lazy(() => KanBanListUncheckedUpdateWithoutCardsInputSchema) ]).optional(),
}).strict();

export default KanBanListUpdateOneWithoutCardsNestedInputSchema;
