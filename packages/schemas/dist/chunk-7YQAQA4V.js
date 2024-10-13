import {
  EnumautoSettingFieldUpdateOperationsInputSchema
} from "./chunk-MRN325O7.js";
import {
  autoSettingSchema
} from "./chunk-EK76L66X.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/AutoSettingUpdateManyMutationInputSchema.ts
import { z } from "zod";
var AutoSettingUpdateManyMutationInputSchema = z.object({
  type: z.union([z.lazy(() => autoSettingSchema), z.lazy(() => EnumautoSettingFieldUpdateOperationsInputSchema)]).optional(),
  glob: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  value: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var AutoSettingUpdateManyMutationInputSchema_default = AutoSettingUpdateManyMutationInputSchema;

export {
  AutoSettingUpdateManyMutationInputSchema,
  AutoSettingUpdateManyMutationInputSchema_default
};
//# sourceMappingURL=chunk-7YQAQA4V.js.map