import {
  ImageAlignmentSchema
} from "./chunk-RNDSF24S.js";
import {
  JsonNullValueInputSchema
} from "./chunk-ISNMLY2P.js";
import {
  InputJsonValueSchema
} from "./chunk-2JBXZQIV.js";

// src/database/inputTypeSchemas/SettingsCreateManyInputSchema.ts
import { z } from "zod";
var SettingsCreateManyInputSchema = z.object({
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
var SettingsCreateManyInputSchema_default = SettingsCreateManyInputSchema;

export {
  SettingsCreateManyInputSchema,
  SettingsCreateManyInputSchema_default
};
//# sourceMappingURL=chunk-EDFXX3PP.js.map