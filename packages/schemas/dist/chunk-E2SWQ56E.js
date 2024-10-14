import {
  BytesFieldUpdateOperationsInputSchema
} from "./chunk-WKMKAR2K.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

// src/database/inputTypeSchemas/DJTUpdateInputSchema.ts
import { z } from "zod";
var DJTUpdateInputSchema = z.object({
  type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  data: z.union([z.instanceof(Buffer), z.lazy(() => BytesFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var DJTUpdateInputSchema_default = DJTUpdateInputSchema;

export {
  DJTUpdateInputSchema,
  DJTUpdateInputSchema_default
};
//# sourceMappingURL=chunk-E2SWQ56E.js.map