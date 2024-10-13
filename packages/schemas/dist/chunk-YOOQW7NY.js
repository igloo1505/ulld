import {
  ImageAlignmentSchema
} from "./chunk-RNDSF24S.js";
import {
  JsonNullValueInputSchema
} from "./chunk-ISNMLY2P.js";
import {
  InputJsonValueSchema
} from "./chunk-2JBXZQIV.js";

// src/database/inputTypeSchemas/SettingsUncheckedCreateInputSchema.ts
import { z } from "zod";
var SettingsUncheckedCreateInputSchema = z.object({
  id: z.number().int().optional(),
  tooltips: z.boolean().optional(),
  title: z.string().optional(),
  summary_showCitations: z.boolean().optional(),
  summary_showTags: z.boolean().optional(),
  landingImageAlign: z.lazy(() => ImageAlignmentSchema).optional(),
  lockedLandingImage: z.string().optional().nullable(),
  cleanOnSync: z.boolean().optional(),
  plotTheme: z.string().optional().nullable(),
  pluginSettings: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
  firstSync: z.coerce.date().optional(),
  lastSync: z.coerce.date().optional()
}).strict();
var SettingsUncheckedCreateInputSchema_default = SettingsUncheckedCreateInputSchema;

export {
  SettingsUncheckedCreateInputSchema,
  SettingsUncheckedCreateInputSchema_default
};
//# sourceMappingURL=chunk-YOOQW7NY.js.map