import {
  BytesFieldUpdateOperationsInputSchema
} from "./chunk-BGJU64IY.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

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
//# sourceMappingURL=chunk-SWSJEC7X.js.map