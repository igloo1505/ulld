import {
  EnumautoSettingFieldUpdateOperationsInputSchema
} from "./chunk-GFG2PSHJ.js";
import {
  autoSettingSchema
} from "./chunk-76RQYGNI.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-TKIJII67.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

// src/database/inputTypeSchemas/AutoSettingUncheckedUpdateManyInputSchema.ts
import { z } from "zod";
var AutoSettingUncheckedUpdateManyInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  type: z.union([z.lazy(() => autoSettingSchema), z.lazy(() => EnumautoSettingFieldUpdateOperationsInputSchema)]).optional(),
  glob: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  value: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var AutoSettingUncheckedUpdateManyInputSchema_default = AutoSettingUncheckedUpdateManyInputSchema;

export {
  AutoSettingUncheckedUpdateManyInputSchema,
  AutoSettingUncheckedUpdateManyInputSchema_default
};
//# sourceMappingURL=chunk-WB66DE6P.js.map