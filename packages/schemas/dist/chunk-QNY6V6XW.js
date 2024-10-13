import {
  BytesFieldUpdateOperationsInputSchema
} from "./chunk-BGJU64IY.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

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
//# sourceMappingURL=chunk-QNY6V6XW.js.map