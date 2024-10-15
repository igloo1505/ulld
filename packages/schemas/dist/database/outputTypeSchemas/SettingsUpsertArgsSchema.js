import { z } from 'zod';
import { SettingsWhereUniqueInputSchema } from '../inputTypeSchemas/SettingsWhereUniqueInputSchema.js';
import { SettingsCreateInputSchema } from '../inputTypeSchemas/SettingsCreateInputSchema.js';
import { SettingsUncheckedCreateInputSchema } from '../inputTypeSchemas/SettingsUncheckedCreateInputSchema.js';
import { SettingsUpdateInputSchema } from '../inputTypeSchemas/SettingsUpdateInputSchema.js';
import { SettingsUncheckedUpdateInputSchema } from '../inputTypeSchemas/SettingsUncheckedUpdateInputSchema.js';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const SettingsSelectSchema = z.object({
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
}).strict();
export const SettingsUpsertArgsSchema = z.object({
    select: SettingsSelectSchema.optional(),
    where: SettingsWhereUniqueInputSchema,
    create: z.union([SettingsCreateInputSchema, SettingsUncheckedCreateInputSchema]),
    update: z.union([SettingsUpdateInputSchema, SettingsUncheckedUpdateInputSchema]),
}).strict();
export default SettingsUpsertArgsSchema;
