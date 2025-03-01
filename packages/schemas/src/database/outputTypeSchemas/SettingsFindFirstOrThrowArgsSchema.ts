import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { SettingsWhereInputSchema } from '../inputTypeSchemas/SettingsWhereInputSchema.js'
import { SettingsOrderByWithRelationInputSchema } from '../inputTypeSchemas/SettingsOrderByWithRelationInputSchema.js'
import { SettingsWhereUniqueInputSchema } from '../inputTypeSchemas/SettingsWhereUniqueInputSchema.js'
import { SettingsScalarFieldEnumSchema } from '../inputTypeSchemas/SettingsScalarFieldEnumSchema.js'
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
  pluginSettings: z.boolean().optional(),
  firstSync: z.boolean().optional(),
  lastSync: z.boolean().optional(),
}).strict()
export const SettingsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SettingsFindFirstOrThrowArgs> = z.object({
  select: SettingsSelectSchema.optional(),
  where: SettingsWhereInputSchema.optional(),
  orderBy: z.union([ SettingsOrderByWithRelationInputSchema.array(),SettingsOrderByWithRelationInputSchema ]).optional(),
  cursor: SettingsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SettingsScalarFieldEnumSchema,SettingsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;
export default SettingsFindFirstOrThrowArgsSchema;