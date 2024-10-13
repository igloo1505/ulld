import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-PNLBXL4W.js";
import {
  BytesFieldUpdateOperationsInputSchema
} from "./chunk-BGJU64IY.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

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
//# sourceMappingURL=chunk-TSKSHWRO.js.map