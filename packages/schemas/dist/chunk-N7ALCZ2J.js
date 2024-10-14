import {
  BytesFieldUpdateOperationsInputSchema
} from "./chunk-WKMKAR2K.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

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
//# sourceMappingURL=chunk-N7ALCZ2J.js.map