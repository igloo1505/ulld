import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/SettingsAppendixWhereInputSchema.js
..//inputTypeSchemas/SettingsAppendixOrderByWithAggregationInputSchema.js
..//inputTypeSchemas/SettingsAppendixScalarFieldEnumSchema.js
..//inputTypeSchemas/SettingsAppendixScalarWhereWithAggregatesInputSchema.js
export const SettingsAppendixGroupByArgsSchema: z.ZodType<Prisma.SettingsAppendixGroupByArgs> = z.object({
  where: SettingsAppendixWhereInputSchema.optional(),
  orderBy: z.union([ SettingsAppendixOrderByWithAggregationInputSchema.array(),SettingsAppendixOrderByWithAggregationInputSchema ]).optional(),
  by: SettingsAppendixScalarFieldEnumSchema.array(),
  having: SettingsAppendixScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default SettingsAppendixGroupByArgsSchema;