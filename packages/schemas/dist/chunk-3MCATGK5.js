import {
  EnumautoSettingFieldUpdateOperationsInputSchema
} from "./chunk-GFG2PSHJ.js";
import {
  autoSettingSchema
} from "./chunk-76RQYGNI.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

// src/database/inputTypeSchemas/AutoSettingUpdateInputSchema.ts
import { z } from "zod";
var AutoSettingUpdateInputSchema = z.object({
  type: z.union([z.lazy(() => autoSettingSchema), z.lazy(() => EnumautoSettingFieldUpdateOperationsInputSchema)]).optional(),
  glob: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  value: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var AutoSettingUpdateInputSchema_default = AutoSettingUpdateInputSchema;

export {
  AutoSettingUpdateInputSchema,
  AutoSettingUpdateInputSchema_default
};
//# sourceMappingURL=chunk-3MCATGK5.js.map