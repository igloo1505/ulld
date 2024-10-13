import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/SettingsWhereInputSchema.js
..//inputTypeSchemas/SettingsOrderByWithAggregationInputSchema.js
..//inputTypeSchemas/SettingsScalarFieldEnumSchema.js
..//inputTypeSchemas/SettingsScalarWhereWithAggregatesInputSchema.js
export const SettingsGroupByArgsSchema: z.ZodType<Prisma.SettingsGroupByArgs> = z.object({
  where: SettingsWhereInputSchema.optional(),
  orderBy: z.union([ SettingsOrderByWithAggregationInputSchema.array(),SettingsOrderByWithAggregationInputSchema ]).optional(),
  by: SettingsScalarFieldEnumSchema.array(),
  having: SettingsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default SettingsGroupByArgsSchema;