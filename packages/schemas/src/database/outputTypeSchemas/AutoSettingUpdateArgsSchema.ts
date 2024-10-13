import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/AutoSettingUpdateInputSchema.js
..//inputTypeSchemas/AutoSettingUncheckedUpdateInputSchema.js
..//inputTypeSchemas/AutoSettingWhereUniqueInputSchema.js
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const AutoSettingSelectSchema: z.ZodType<Prisma.AutoSettingSelect> = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  glob: z.boolean().optional(),
  value: z.boolean().optional(),
}).strict()
export const AutoSettingUpdateArgsSchema: z.ZodType<Prisma.AutoSettingUpdateArgs> = z.object({
  select: AutoSettingSelectSchema.optional(),
  data: z.union([ AutoSettingUpdateInputSchema,AutoSettingUncheckedUpdateInputSchema ]),
  where: AutoSettingWhereUniqueInputSchema,
}).strict() ;
export default AutoSettingUpdateArgsSchema;