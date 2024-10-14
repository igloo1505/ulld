import {
  EnumautoSettingFieldUpdateOperationsInputSchema
} from "./chunk-GFG2PSHJ.js";
import {
  autoSettingSchema
} from "./chunk-76RQYGNI.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

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
//# sourceMappingURL=chunk-C6M2NUMU.js.map