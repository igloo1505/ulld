import {
  EnumautoSettingFieldUpdateOperationsInputSchema
} from "./chunk-MRN325O7.js";
import {
  autoSettingSchema
} from "./chunk-EK76L66X.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-PNLBXL4W.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/AutoSettingUncheckedUpdateInputSchema.ts
import { z } from "zod";
var AutoSettingUncheckedUpdateInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  type: z.union([z.lazy(() => autoSettingSchema), z.lazy(() => EnumautoSettingFieldUpdateOperationsInputSchema)]).optional(),
  glob: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  value: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var AutoSettingUncheckedUpdateInputSchema_default = AutoSettingUncheckedUpdateInputSchema;

export {
  AutoSettingUncheckedUpdateInputSchema,
  AutoSettingUncheckedUpdateInputSchema_default
};
//# sourceMappingURL=chunk-WBU7GVUW.js.map