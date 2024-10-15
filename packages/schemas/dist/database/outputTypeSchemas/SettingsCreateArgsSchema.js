import { z } from 'zod';
import { SettingsCreateInputSchema } from '../inputTypeSchemas/SettingsCreateInputSchema.js';
import { SettingsUncheckedCreateInputSchema } from '../inputTypeSchemas/SettingsUncheckedCreateInputSchema.js';
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
export const SettingsCreateArgsSchema = z.object({
    select: SettingsSelectSchema.optional(),
    data: z.union([SettingsCreateInputSchema, SettingsUncheckedCreateInputSchema]).optional(),
}).strict();
export default SettingsCreateArgsSchema;
