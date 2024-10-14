import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-TKIJII67.js";
import {
  BytesFieldUpdateOperationsInputSchema
} from "./chunk-WKMKAR2K.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

// src/database/inputTypeSchemas/DJTUncheckedUpdateInputSchema.ts
import { z } from "zod";
var DJTUncheckedUpdateInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  data: z.union([z.instanceof(Buffer), z.lazy(() => BytesFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var DJTUncheckedUpdateInputSchema_default = DJTUncheckedUpdateInputSchema;

export {
  DJTUncheckedUpdateInputSchema,
  DJTUncheckedUpdateInputSchema_default
};
//# sourceMappingURL=chunk-MVAB2B4E.js.map