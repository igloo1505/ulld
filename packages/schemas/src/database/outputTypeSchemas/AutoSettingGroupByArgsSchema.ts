import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/AutoSettingWhereInputSchema.js
..//inputTypeSchemas/AutoSettingOrderByWithAggregationInputSchema.js
..//inputTypeSchemas/AutoSettingScalarFieldEnumSchema.js
..//inputTypeSchemas/AutoSettingScalarWhereWithAggregatesInputSchema.js
export const AutoSettingGroupByArgsSchema: z.ZodType<Prisma.AutoSettingGroupByArgs> = z.object({
  where: AutoSettingWhereInputSchema.optional(),
  orderBy: z.union([ AutoSettingOrderByWithAggregationInputSchema.array(),AutoSettingOrderByWithAggregationInputSchema ]).optional(),
  by: AutoSettingScalarFieldEnumSchema.array(),
  having: AutoSettingScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default AutoSettingGroupByArgsSchema;