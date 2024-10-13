import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-PNLBXL4W.js";
import {
  BytesFieldUpdateOperationsInputSchema
} from "./chunk-BGJU64IY.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

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
//# sourceMappingURL=chunk-P2SRW3O6.js.map