import {
  BytesFieldUpdateOperationsInputSchema
} from "./chunk-WKMKAR2K.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

// src/database/inputTypeSchemas/WhiteboardUncheckedUpdateInputSchema.ts
import { z } from "zod";
var WhiteboardUncheckedUpdateInputSchema = z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  data: z.union([z.instanceof(Buffer), z.lazy(() => BytesFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var WhiteboardUncheckedUpdateInputSchema_default = WhiteboardUncheckedUpdateInputSchema;

export {
  WhiteboardUncheckedUpdateInputSchema,
  WhiteboardUncheckedUpdateInputSchema_default
};
//# sourceMappingURL=chunk-EKF6DLRY.js.map