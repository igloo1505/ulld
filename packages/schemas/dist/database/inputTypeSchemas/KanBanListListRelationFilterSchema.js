import { z } from 'zod';
import { KanBanListWhereInputSchema } from './KanBanListWhereInputSchema.js';
export const KanBanListListRelationFilterSchema = z.object({
    every: z.lazy(() => KanBanListWhereInputSchema).optional(),
    some: z.lazy(() => KanBanListWhereInputSchema).optional(),
    none: z.lazy(() => KanBanListWhereInputSchema).optional()
}).strict();
export default KanBanListListRelationFilterSchema;
