import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/SettingsWhereInputSchema.js
..//inputTypeSchemas/SettingsOrderByWithRelationInputSchema.js
..//inputTypeSchemas/SettingsWhereUniqueInputSchema.js
export const SettingsAggregateArgsSchema: z.ZodType<Prisma.SettingsAggregateArgs> = z.object({
  where: SettingsWhereInputSchema.optional(),
  orderBy: z.union([ SettingsOrderByWithRelationInputSchema.array(),SettingsOrderByWithRelationInputSchema ]).optional(),
  cursor: SettingsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default SettingsAggregateArgsSchema;