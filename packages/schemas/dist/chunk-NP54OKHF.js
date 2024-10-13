import {
  SettingsOrderByWithRelationInputSchema
} from "./chunk-K6MLFEZC.js";
import {
  SettingsScalarFieldEnumSchema
} from "./chunk-CYRVHWML.js";
import {
  SettingsWhereUniqueInputSchema
} from "./chunk-X25TG6QI.js";
import {
  SettingsWhereInputSchema
} from "./chunk-EHHLO74Z.js";

// src/database/outputTypeSchemas/SettingsFindFirstOrThrowArgsSchema.ts
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
var SettingsFindFirstOrThrowArgsSchema = z.object({
  select: SettingsSelectSchema.optional(),
  where: SettingsWhereInputSchema.optional(),
  orderBy: z.union([SettingsOrderByWithRelationInputSchema.array(), SettingsOrderByWithRelationInputSchema]).optional(),
  cursor: SettingsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([SettingsScalarFieldEnumSchema, SettingsScalarFieldEnumSchema.array()]).optional()
}).strict();
var SettingsFindFirstOrThrowArgsSchema_default = SettingsFindFirstOrThrowArgsSchema;

export {
  SettingsSelectSchema,
  SettingsFindFirstOrThrowArgsSchema,
  SettingsFindFirstOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-NP54OKHF.js.map