import { z } from 'zod';
import { KanBanListUpdateWithoutCardsInputSchema } from './KanBanListUpdateWithoutCardsInputSchema.js';
import { KanBanListUncheckedUpdateWithoutCardsInputSchema } from './KanBanListUncheckedUpdateWithoutCardsInputSchema.js';
import { KanBanListCreateWithoutCardsInputSchema } from './KanBanListCreateWithoutCardsInputSchema.js';
import { KanBanListUncheckedCreateWithoutCardsInputSchema } from './KanBanListUncheckedCreateWithoutCardsInputSchema.js';
import { KanBanListWhereInputSchema } from './KanBanListWhereInputSchema.js';
export const KanBanListUpsertWithoutCardsInputSchema = z.object({
    update: z.union([z.lazy(() => KanBanListUpdateWithoutCardsInputSchema), z.lazy(() => KanBanListUncheckedUpdateWithoutCardsInputSchema)]),
    create: z.union([z.lazy(() => KanBanListCreateWithoutCardsInputSchema), z.lazy(() => KanBanListUncheckedCreateWithoutCardsInputSchema)]),
    where: z.lazy(() => KanBanListWhereInputSchema).optional()
}).strict();
export default KanBanListUpsertWithoutCardsInputSchema;
