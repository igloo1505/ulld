import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SettingsCreateInputSchema } from '../inputTypeSchemas/SettingsCreateInputSchema'
import { SettingsUncheckedCreateInputSchema } from '../inputTypeSchemas/SettingsUncheckedCreateInputSchema'
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

export const SettingsCreateArgsSchema: z.ZodType<Prisma.SettingsCreateArgs> = z.object({
  select: SettingsSelectSchema.optional(),
  data: z.union([ SettingsCreateInputSchema,SettingsUncheckedCreateInputSchema ]).optional(),
}).strict() ;

export default SettingsCreateArgsSchema;
