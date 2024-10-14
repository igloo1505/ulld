import {
  SettingsWhereUniqueInputSchema
} from "./chunk-TBMVEKRR.js";

// src/database/outputTypeSchemas/SettingsDeleteArgsSchema.ts
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
var SettingsDeleteArgsSchema = z.object({
  select: SettingsSelectSchema.optional(),
  where: SettingsWhereUniqueInputSchema
}).strict();
var SettingsDeleteArgsSchema_default = SettingsDeleteArgsSchema;

export {
  SettingsSelectSchema,
  SettingsDeleteArgsSchema,
  SettingsDeleteArgsSchema_default
};
//# sourceMappingURL=chunk-BUZZ5OKY.js.map