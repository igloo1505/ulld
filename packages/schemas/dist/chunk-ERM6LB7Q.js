import {
  SettingsCreateInputSchema
} from "./chunk-BTZ5PK6G.js";
import {
  SettingsUncheckedCreateInputSchema
} from "./chunk-YOOQW7NY.js";
import {
  SettingsUpdateInputSchema
} from "./chunk-7QSA45XT.js";
import {
  SettingsUncheckedUpdateInputSchema
} from "./chunk-WBHEC4WC.js";
import {
  SettingsWhereUniqueInputSchema
} from "./chunk-X25TG6QI.js";

// src/database/outputTypeSchemas/SettingsUpsertArgsSchema.ts
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
var SettingsUpsertArgsSchema = z.object({
  select: SettingsSelectSchema.optional(),
  where: SettingsWhereUniqueInputSchema,
  create: z.union([SettingsCreateInputSchema, SettingsUncheckedCreateInputSchema]),
  update: z.union([SettingsUpdateInputSchema, SettingsUncheckedUpdateInputSchema])
}).strict();
var SettingsUpsertArgsSchema_default = SettingsUpsertArgsSchema;

export {
  SettingsSelectSchema,
  SettingsUpsertArgsSchema,
  SettingsUpsertArgsSchema_default
};
//# sourceMappingURL=chunk-ERM6LB7Q.js.map