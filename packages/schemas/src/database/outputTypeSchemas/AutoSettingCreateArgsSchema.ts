import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/AutoSettingCreateInputSchema.js
..//inputTypeSchemas/AutoSettingUncheckedCreateInputSchema.js
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const AutoSettingSelectSchema: z.ZodType<Prisma.AutoSettingSelect> = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  glob: z.boolean().optional(),
  value: z.boolean().optional(),
}).strict()
export const AutoSettingCreateArgsSchema: z.ZodType<Prisma.AutoSettingCreateArgs> = z.object({
  select: AutoSettingSelectSchema.optional(),
  data: z.union([ AutoSettingCreateInputSchema,AutoSettingUncheckedCreateInputSchema ]),
}).strict() ;
export default AutoSettingCreateArgsSchema;