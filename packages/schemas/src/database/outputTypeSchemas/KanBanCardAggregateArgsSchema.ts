import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/KanBanCardWhereInputSchema.js
..//inputTypeSchemas/KanBanCardOrderByWithRelationInputSchema.js
..//inputTypeSchemas/KanBanCardWhereUniqueInputSchema.js
export const KanBanCardAggregateArgsSchema: z.ZodType<Prisma.KanBanCardAggregateArgs> = z.object({
  where: KanBanCardWhereInputSchema.optional(),
  orderBy: z.union([ KanBanCardOrderByWithRelationInputSchema.array(),KanBanCardOrderByWithRelationInputSchema ]).optional(),
  cursor: KanBanCardWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default KanBanCardAggregateArgsSchema;