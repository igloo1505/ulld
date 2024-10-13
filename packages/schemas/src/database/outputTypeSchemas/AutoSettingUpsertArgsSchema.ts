import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/AutoSettingWhereUniqueInputSchema.js
..//inputTypeSchemas/AutoSettingCreateInputSchema.js
..//inputTypeSchemas/AutoSettingUncheckedCreateInputSchema.js
..//inputTypeSchemas/AutoSettingUpdateInputSchema.js
..//inputTypeSchemas/AutoSettingUncheckedUpdateInputSchema.js
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const AutoSettingSelectSchema: z.ZodType<Prisma.AutoSettingSelect> = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  glob: z.boolean().optional(),
  value: z.boolean().optional(),
}).strict()
export const AutoSettingUpsertArgsSchema: z.ZodType<Prisma.AutoSettingUpsertArgs> = z.object({
  select: AutoSettingSelectSchema.optional(),
  where: AutoSettingWhereUniqueInputSchema,
  create: z.union([ AutoSettingCreateInputSchema,AutoSettingUncheckedCreateInputSchema ]),
  update: z.union([ AutoSettingUpdateInputSchema,AutoSettingUncheckedUpdateInputSchema ]),
}).strict() ;
export default AutoSettingUpsertArgsSchema;