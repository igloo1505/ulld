import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/AutoSettingWhereInputSchema.js
..//inputTypeSchemas/AutoSettingOrderByWithRelationInputSchema.js
..//inputTypeSchemas/AutoSettingWhereUniqueInputSchema.js
..//inputTypeSchemas/AutoSettingScalarFieldEnumSchema.js
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const AutoSettingSelectSchema: z.ZodType<Prisma.AutoSettingSelect> = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  glob: z.boolean().optional(),
  value: z.boolean().optional(),
}).strict()
export const AutoSettingFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AutoSettingFindFirstOrThrowArgs> = z.object({
  select: AutoSettingSelectSchema.optional(),
  where: AutoSettingWhereInputSchema.optional(),
  orderBy: z.union([ AutoSettingOrderByWithRelationInputSchema.array(),AutoSettingOrderByWithRelationInputSchema ]).optional(),
  cursor: AutoSettingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AutoSettingScalarFieldEnumSchema,AutoSettingScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;
export default AutoSettingFindFirstOrThrowArgsSchema;