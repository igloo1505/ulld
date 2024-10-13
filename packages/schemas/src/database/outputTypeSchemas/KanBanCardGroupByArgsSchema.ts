import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/KanBanCardWhereInputSchema.js
..//inputTypeSchemas/KanBanCardOrderByWithAggregationInputSchema.js
..//inputTypeSchemas/KanBanCardScalarFieldEnumSchema.js
..//inputTypeSchemas/KanBanCardScalarWhereWithAggregatesInputSchema.js
export const KanBanCardGroupByArgsSchema: z.ZodType<Prisma.KanBanCardGroupByArgs> = z.object({
  where: KanBanCardWhereInputSchema.optional(),
  orderBy: z.union([ KanBanCardOrderByWithAggregationInputSchema.array(),KanBanCardOrderByWithAggregationInputSchema ]).optional(),
  by: KanBanCardScalarFieldEnumSchema.array(),
  having: KanBanCardScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default KanBanCardGroupByArgsSchema;