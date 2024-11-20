import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SettingsUpdateInputSchema } from '../inputTypeSchemas/SettingsUpdateInputSchema'
import { SettingsUncheckedUpdateInputSchema } from '../inputTypeSchemas/SettingsUncheckedUpdateInputSchema'
import { SettingsWhereUniqueInputSchema } from '../inputTypeSchemas/SettingsWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SettingsSelectSchema: z.ZodType<Prisma.SettingsSelect> = z.object({
  id: z.boolean().optional(),
  tooltips: z.boolean().optional(),
  title: z.boolean().optional(),
  summary_showCitations: z.boolean().optional(),
  summary_showTags: z.boolean().optional(),
  landingImageAlign: z.boolean().optional(),
  lockedLandingImage: z.boolean().optional(),
  cleanOnSync: z.boolean().optional(),
  plotTheme: z.boolean().optional(),
  firstSync: z.boolean().optional(),
  lastSync: z.boolean().optional(),
}).strict()

export const SettingsUpdateArgsSchema: z.ZodType<Prisma.SettingsUpdateArgs> = z.object({
  select: SettingsSelectSchema.optional(),
  data: z.union([ SettingsUpdateInputSchema,SettingsUncheckedUpdateInputSchema ]),
  where: SettingsWhereUniqueInputSchema,
}).strict() ;

export default SettingsUpdateArgsSchema;
