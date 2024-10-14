import {
  ImageAlignmentSchema
} from "./chunk-XOBHDDTF.js";
import {
  JsonNullValueInputSchema
} from "./chunk-ZXTFXMHW.js";
import {
  InputJsonValueSchema
} from "./chunk-T77FYKUT.js";

// src/database/inputTypeSchemas/SettingsCreateInputSchema.ts
import { z } from "zod";
var SettingsCreateInputSchema = z.object({
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
var SettingsCreateInputSchema_default = SettingsCreateInputSchema;

export {
  SettingsCreateInputSchema,
  SettingsCreateInputSchema_default
};
//# sourceMappingURL=chunk-YZQCAXX5.js.map