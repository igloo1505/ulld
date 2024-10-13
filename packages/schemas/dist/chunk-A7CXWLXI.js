import {
  EnumautoSettingFieldUpdateOperationsInputSchema
} from "./chunk-MRN325O7.js";
import {
  autoSettingSchema
} from "./chunk-EK76L66X.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

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
//# sourceMappingURL=chunk-A7CXWLXI.js.map