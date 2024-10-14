import {
  SettingsUpdateInputSchema
} from "./chunk-VZWT55QV.js";
import {
  SettingsUncheckedUpdateInputSchema
} from "./chunk-OCS5TQDR.js";
import {
  SettingsWhereUniqueInputSchema
} from "./chunk-TBMVEKRR.js";

// src/database/outputTypeSchemas/SettingsUpdateArgsSchema.ts
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
var SettingsUpdateArgsSchema = z.object({
  select: SettingsSelectSchema.optional(),
  data: z.union([SettingsUpdateInputSchema, SettingsUncheckedUpdateInputSchema]),
  where: SettingsWhereUniqueInputSchema
}).strict();
var SettingsUpdateArgsSchema_default = SettingsUpdateArgsSchema;

export {
  SettingsSelectSchema,
  SettingsUpdateArgsSchema,
  SettingsUpdateArgsSchema_default
};
//# sourceMappingURL=chunk-DRRWZ76L.js.map