import { z } from 'zod';
import { KanBanCardUpdateManyMutationInputSchema } from '../inputTypeSchemas/KanBanCardUpdateManyMutationInputSchema.js';
import { KanBanCardUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/KanBanCardUncheckedUpdateManyInputSchema.js';
import { KanBanCardWhereInputSchema } from '../inputTypeSchemas/KanBanCardWhereInputSchema.js';
export const KanBanCardUpdateManyArgsSchema = z.object({
    data: z.union([KanBanCardUpdateManyMutationInputSchema, KanBanCardUncheckedUpdateManyInputSchema]),
    where: KanBanCardWhereInputSchema.optional(),
}).strict();
export default KanBanCardUpdateManyArgsSchema;
