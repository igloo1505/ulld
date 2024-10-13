import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/KanBanListWhereInputSchema.js
..//inputTypeSchemas/KanBanListOrderByWithAggregationInputSchema.js
..//inputTypeSchemas/KanBanListScalarFieldEnumSchema.js
..//inputTypeSchemas/KanBanListScalarWhereWithAggregatesInputSchema.js
export const KanBanListGroupByArgsSchema: z.ZodType<Prisma.KanBanListGroupByArgs> = z.object({
  where: KanBanListWhereInputSchema.optional(),
  orderBy: z.union([ KanBanListOrderByWithAggregationInputSchema.array(),KanBanListOrderByWithAggregationInputSchema ]).optional(),
  by: KanBanListScalarFieldEnumSchema.array(),
  having: KanBanListScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default KanBanListGroupByArgsSchema;