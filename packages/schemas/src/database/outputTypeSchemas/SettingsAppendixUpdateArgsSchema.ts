import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/SettingsAppendixUpdateInputSchema.js
..//inputTypeSchemas/SettingsAppendixUncheckedUpdateInputSchema.js
..//inputTypeSchemas/SettingsAppendixWhereUniqueInputSchema.js
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const SettingsAppendixSelectSchema: z.ZodType<Prisma.SettingsAppendixSelect> = z.object({
  id: z.boolean().optional(),
  data: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()
export const SettingsAppendixUpdateArgsSchema: z.ZodType<Prisma.SettingsAppendixUpdateArgs> = z.object({
  select: SettingsAppendixSelectSchema.optional(),
  data: z.union([ SettingsAppendixUpdateInputSchema,SettingsAppendixUncheckedUpdateInputSchema ]),
  where: SettingsAppendixWhereUniqueInputSchema,
}).strict() ;
export default SettingsAppendixUpdateArgsSchema;