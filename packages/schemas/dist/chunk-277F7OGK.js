import {
  SettingsWhereUniqueInputSchema
} from "./chunk-TBMVEKRR.js";

// src/database/outputTypeSchemas/SettingsFindUniqueOrThrowArgsSchema.ts
import { z } from "zod";
var SettingsSelectSchema = z.object({
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
  lastSync: z.boolean().optional()
}).strict();
var SettingsFindUniqueOrThrowArgsSchema = z.object({
  select: SettingsSelectSchema.optional(),
  where: SettingsWhereUniqueInputSchema
}).strict();
var SettingsFindUniqueOrThrowArgsSchema_default = SettingsFindUniqueOrThrowArgsSchema;

export {
  SettingsSelectSchema,
  SettingsFindUniqueOrThrowArgsSchema,
  SettingsFindUniqueOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-277F7OGK.js.map