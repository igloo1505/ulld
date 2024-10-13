import {
  BytesFieldUpdateOperationsInputSchema
} from "./chunk-BGJU64IY.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/WhiteboardUncheckedUpdateManyInputSchema.ts
import { z } from "zod";
var WhiteboardUncheckedUpdateManyInputSchema = z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  data: z.union([z.instanceof(Buffer), z.lazy(() => BytesFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var WhiteboardUncheckedUpdateManyInputSchema_default = WhiteboardUncheckedUpdateManyInputSchema;

export {
  WhiteboardUncheckedUpdateManyInputSchema,
  WhiteboardUncheckedUpdateManyInputSchema_default
};
//# sourceMappingURL=chunk-QAAZ7D6W.js.map