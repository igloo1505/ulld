import { z } from 'zod';
import { KanBanListCreateWithoutCardsInputSchema } from './KanBanListCreateWithoutCardsInputSchema.js';
import { KanBanListUncheckedCreateWithoutCardsInputSchema } from './KanBanListUncheckedCreateWithoutCardsInputSchema.js';
import { KanBanListCreateOrConnectWithoutCardsInputSchema } from './KanBanListCreateOrConnectWithoutCardsInputSchema.js';
import { KanBanListUpsertWithoutCardsInputSchema } from './KanBanListUpsertWithoutCardsInputSchema.js';
import { KanBanListWhereInputSchema } from './KanBanListWhereInputSchema.js';
import { KanBanListWhereUniqueInputSchema } from './KanBanListWhereUniqueInputSchema.js';
import { KanBanListUpdateToOneWithWhereWithoutCardsInputSchema } from './KanBanListUpdateToOneWithWhereWithoutCardsInputSchema.js';
import { KanBanListUpdateWithoutCardsInputSchema } from './KanBanListUpdateWithoutCardsInputSchema.js';
import { KanBanListUncheckedUpdateWithoutCardsInputSchema } from './KanBanListUncheckedUpdateWithoutCardsInputSchema.js';
export const KanBanListUpdateOneWithoutCardsNestedInputSchema = z.object({
    create: z.union([z.lazy(() => KanBanListCreateWithoutCardsInputSchema), z.lazy(() => KanBanListUncheckedCreateWithoutCardsInputSchema)]).optional(),
    connectOrCreate: z.lazy(() => KanBanListCreateOrConnectWithoutCardsInputSchema).optional(),
    upsert: z.lazy(() => KanBanListUpsertWithoutCardsInputSchema).optional(),
    disconnect: z.union([z.boolean(), z.lazy(() => KanBanListWhereInputSchema)]).optional(),
    delete: z.union([z.boolean(), z.lazy(() => KanBanListWhereInputSchema)]).optional(),
    connect: z.lazy(() => KanBanListWhereUniqueInputSchema).optional(),
    update: z.union([z.lazy(() => KanBanListUpdateToOneWithWhereWithoutCardsInputSchema), z.lazy(() => KanBanListUpdateWithoutCardsInputSchema), z.lazy(() => KanBanListUncheckedUpdateWithoutCardsInputSchema)]).optional(),
}).strict();
export default KanBanListUpdateOneWithoutCardsNestedInputSchema;
