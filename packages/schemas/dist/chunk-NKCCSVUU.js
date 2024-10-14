import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-TKIJII67.js";
import {
  BytesFieldUpdateOperationsInputSchema
} from "./chunk-WKMKAR2K.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

// src/database/inputTypeSchemas/DJTUncheckedUpdateManyInputSchema.ts
import { z } from "zod";
var DJTUncheckedUpdateManyInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  data: z.union([z.instanceof(Buffer), z.lazy(() => BytesFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var DJTUncheckedUpdateManyInputSchema_default = DJTUncheckedUpdateManyInputSchema;

export {
  DJTUncheckedUpdateManyInputSchema,
  DJTUncheckedUpdateManyInputSchema_default
};
//# sourceMappingURL=chunk-NKCCSVUU.js.map