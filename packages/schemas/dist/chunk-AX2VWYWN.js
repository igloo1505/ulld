import {
  SettingsCreateInputSchema
} from "./chunk-YZQCAXX5.js";
import {
  SettingsUncheckedCreateInputSchema
} from "./chunk-MEJVWHHA.js";

// src/database/outputTypeSchemas/SettingsCreateArgsSchema.ts
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
var SettingsCreateArgsSchema = z.object({
  select: SettingsSelectSchema.optional(),
  data: z.union([SettingsCreateInputSchema, SettingsUncheckedCreateInputSchema]).optional()
}).strict();
var SettingsCreateArgsSchema_default = SettingsCreateArgsSchema;

export {
  SettingsSelectSchema,
  SettingsCreateArgsSchema,
  SettingsCreateArgsSchema_default
};
//# sourceMappingURL=chunk-AX2VWYWN.js.map