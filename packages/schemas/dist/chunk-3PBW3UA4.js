import {
  EnumImageAlignmentFieldUpdateOperationsInputSchema
} from "./chunk-X4XR22BM.js";
import {
  ImageAlignmentSchema
} from "./chunk-RNDSF24S.js";
import {
  BoolFieldUpdateOperationsInputSchema
} from "./chunk-RAFX4YSS.js";
import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-SOLYHFAT.js";
import {
  JsonNullValueInputSchema
} from "./chunk-ISNMLY2P.js";
import {
  InputJsonValueSchema
} from "./chunk-2JBXZQIV.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-PNLBXL4W.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/SettingsUncheckedUpdateManyInputSchema.ts
import { z } from "zod";
var SettingsUncheckedUpdateManyInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  tooltips: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  summary_showCitations: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  summary_showTags: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  landingImageAlign: z.union([z.lazy(() => ImageAlignmentSchema), z.lazy(() => EnumImageAlignmentFieldUpdateOperationsInputSchema)]).optional(),
  lockedLandingImage: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  cleanOnSync: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  plotTheme: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  pluginSettings: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
  firstSync: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastSync: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var SettingsUncheckedUpdateManyInputSchema_default = SettingsUncheckedUpdateManyInputSchema;

export {
  SettingsUncheckedUpdateManyInputSchema,
  SettingsUncheckedUpdateManyInputSchema_default
};
//# sourceMappingURL=chunk-3PBW3UA4.js.map