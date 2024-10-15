import { z } from 'zod';
import { KanBanListUpdateManyMutationInputSchema } from '../inputTypeSchemas/KanBanListUpdateManyMutationInputSchema.js';
import { KanBanListUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/KanBanListUncheckedUpdateManyInputSchema.js';
import { KanBanListWhereInputSchema } from '../inputTypeSchemas/KanBanListWhereInputSchema.js';
export const KanBanListUpdateManyArgsSchema = z.object({
    data: z.union([KanBanListUpdateManyMutationInputSchema, KanBanListUncheckedUpdateManyInputSchema]),
    where: KanBanListWhereInputSchema.optional(),
}).strict();
export default KanBanListUpdateManyArgsSchema;
