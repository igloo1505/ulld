import {
  SettingsWhereUniqueInputSchema
} from "./chunk-X25TG6QI.js";

// src/database/outputTypeSchemas/SettingsFindUniqueArgsSchema.ts
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
var SettingsFindUniqueArgsSchema = z.object({
  select: SettingsSelectSchema.optional(),
  where: SettingsWhereUniqueInputSchema
}).strict();
var SettingsFindUniqueArgsSchema_default = SettingsFindUniqueArgsSchema;

export {
  SettingsSelectSchema,
  SettingsFindUniqueArgsSchema,
  SettingsFindUniqueArgsSchema_default
};
//# sourceMappingURL=chunk-OBMLH3VE.js.map