import { z } from 'zod';
import { KanBanCardWhereInputSchema } from '../inputTypeSchemas/KanBanCardWhereInputSchema.js';
export const KanBanCardDeleteManyArgsSchema = z.object({
    where: KanBanCardWhereInputSchema.optional(),
}).strict();
export default KanBanCardDeleteManyArgsSchema;
