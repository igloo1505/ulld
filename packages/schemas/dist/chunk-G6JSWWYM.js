import {
  BytesFieldUpdateOperationsInputSchema
} from "./chunk-BGJU64IY.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/WhiteboardUpdateInputSchema.ts
import { z } from "zod";
var WhiteboardUpdateInputSchema = z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  data: z.union([z.instanceof(Buffer), z.lazy(() => BytesFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var WhiteboardUpdateInputSchema_default = WhiteboardUpdateInputSchema;

export {
  WhiteboardUpdateInputSchema,
  WhiteboardUpdateInputSchema_default
};
//# sourceMappingURL=chunk-G6JSWWYM.js.map