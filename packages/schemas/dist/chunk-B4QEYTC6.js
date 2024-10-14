import {
  SettingsOrderByWithRelationInputSchema
} from "./chunk-MLT4QA76.js";
import {
  SettingsScalarFieldEnumSchema
} from "./chunk-F7P3K44D.js";
import {
  SettingsWhereUniqueInputSchema
} from "./chunk-TBMVEKRR.js";
import {
  SettingsWhereInputSchema
} from "./chunk-ULKFREWN.js";

// src/database/outputTypeSchemas/SettingsFindFirstArgsSchema.ts
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
var SettingsFindFirstArgsSchema = z.object({
  select: SettingsSelectSchema.optional(),
  where: SettingsWhereInputSchema.optional(),
  orderBy: z.union([SettingsOrderByWithRelationInputSchema.array(), SettingsOrderByWithRelationInputSchema]).optional(),
  cursor: SettingsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([SettingsScalarFieldEnumSchema, SettingsScalarFieldEnumSchema.array()]).optional()
}).strict();
var SettingsFindFirstArgsSchema_default = SettingsFindFirstArgsSchema;

export {
  SettingsSelectSchema,
  SettingsFindFirstArgsSchema,
  SettingsFindFirstArgsSchema_default
};
//# sourceMappingURL=chunk-B4QEYTC6.js.map