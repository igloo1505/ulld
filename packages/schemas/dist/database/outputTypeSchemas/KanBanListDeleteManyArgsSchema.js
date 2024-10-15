import { z } from 'zod';
import { KanBanListWhereInputSchema } from '../inputTypeSchemas/KanBanListWhereInputSchema.js';
export const KanBanListDeleteManyArgsSchema = z.object({
    where: KanBanListWhereInputSchema.optional(),
}).strict();
export default KanBanListDeleteManyArgsSchema;
