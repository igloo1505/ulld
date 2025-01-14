import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { SettingsAppendixWhereUniqueInputSchema } from '../inputTypeSchemas/SettingsAppendixWhereUniqueInputSchema.js'
import { SettingsAppendixCreateInputSchema } from '../inputTypeSchemas/SettingsAppendixCreateInputSchema.js'
import { SettingsAppendixUncheckedCreateInputSchema } from '../inputTypeSchemas/SettingsAppendixUncheckedCreateInputSchema.js'
import { SettingsAppendixUpdateInputSchema } from '../inputTypeSchemas/SettingsAppendixUpdateInputSchema.js'
import { SettingsAppendixUncheckedUpdateInputSchema } from '../inputTypeSchemas/SettingsAppendixUncheckedUpdateInputSchema.js'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const SettingsAppendixSelectSchema: z.ZodType<Prisma.SettingsAppendixSelect> = z.object({
  id: z.boolean().optional(),
  data: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()
export const SettingsAppendixUpsertArgsSchema: z.ZodType<Prisma.SettingsAppendixUpsertArgs> = z.object({
  select: SettingsAppendixSelectSchema.optional(),
  where: SettingsAppendixWhereUniqueInputSchema,
  create: z.union([ SettingsAppendixCreateInputSchema,SettingsAppendixUncheckedCreateInputSchema ]),
  update: z.union([ SettingsAppendixUpdateInputSchema,SettingsAppendixUncheckedUpdateInputSchema ]),
}).strict() ;
export default SettingsAppendixUpsertArgsSchema;