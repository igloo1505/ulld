import {
  JsonValueSchema
} from "./chunk-MUF2HC5X.js";
import {
  ImageAlignmentSchema
} from "./chunk-RNDSF24S.js";

// src/database/modelSchema/SettingsSchema.ts
import { z } from "zod";
var SettingsSchema = z.object({
  landingImageAlign: ImageAlignmentSchema,
  id: z.number().int(),
  tooltips: z.boolean(),
  title: z.string(),
  summary_showCitations: z.boolean(),
  summary_showTags: z.boolean(),
  lockedLandingImage: z.string().nullable(),
  cleanOnSync: z.boolean(),
  plotTheme: z.string().nullable(),
  /**
   * [PluginSettingsRecord]
   */
  pluginSettings: JsonValueSchema,
  firstSync: z.coerce.date(),
  lastSync: z.coerce.date()
});
var SettingsPartialSchema = SettingsSchema.partial();
var SettingsSchema_default = SettingsSchema;

export {
  SettingsSchema,
  SettingsPartialSchema,
  SettingsSchema_default
};
//# sourceMappingURL=chunk-JGTHUFYQ.js.map