import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/AutoSettingWhereInputSchema.js.js
..//inputTypeSchemas/AutoSettingOrderByWithRelationInputSchema.js.js
..//inputTypeSchemas/AutoSettingWhereUniqueInputSchema.js.js
export const AutoSettingAggregateArgsSchema: z.ZodType<Prisma.AutoSettingAggregateArgs> = z.object({
  where: AutoSettingWhereInputSchema.optional(),
  orderBy: z.union([ AutoSettingOrderByWithRelationInputSchema.array(),AutoSettingOrderByWithRelationInputSchema ]).optional(),
  cursor: AutoSettingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default AutoSettingAggregateArgsSchema;