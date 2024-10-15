import { z } from 'zod';
import { KanBanListWhereInputSchema } from '../inputTypeSchemas/KanBanListWhereInputSchema.js';
import { KanBanListOrderByWithRelationInputSchema } from '../inputTypeSchemas/KanBanListOrderByWithRelationInputSchema.js';
import { KanBanListWhereUniqueInputSchema } from '../inputTypeSchemas/KanBanListWhereUniqueInputSchema.js';
export const KanBanListAggregateArgsSchema = z.object({
    where: KanBanListWhereInputSchema.optional(),
    orderBy: z.union([KanBanListOrderByWithRelationInputSchema.array(), KanBanListOrderByWithRelationInputSchema]).optional(),
    cursor: KanBanListWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export default KanBanListAggregateArgsSchema;
