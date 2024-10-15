import { z } from 'zod';
import { KanBanListWhereInputSchema } from './KanBanListWhereInputSchema.js';
export const KanBanListNullableRelationFilterSchema = z.object({
    is: z.lazy(() => KanBanListWhereInputSchema).optional().nullable(),
    isNot: z.lazy(() => KanBanListWhereInputSchema).optional().nullable()
}).strict();
export default KanBanListNullableRelationFilterSchema;
