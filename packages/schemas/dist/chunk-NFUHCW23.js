import {
  EnumImageAlignmentFieldUpdateOperationsInputSchema
} from "./chunk-ME22URTV.js";
import {
  ImageAlignmentSchema
} from "./chunk-XOBHDDTF.js";
import {
  BoolFieldUpdateOperationsInputSchema
} from "./chunk-APCVB345.js";
import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-EGW2GABF.js";
import {
  JsonNullValueInputSchema
} from "./chunk-ZXTFXMHW.js";
import {
  InputJsonValueSchema
} from "./chunk-T77FYKUT.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-TKIJII67.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-VTROTMKZ.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

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
//# sourceMappingURL=chunk-NFUHCW23.js.map