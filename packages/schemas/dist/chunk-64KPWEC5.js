import {
  BytesFieldUpdateOperationsInputSchema
} from "./chunk-WKMKAR2K.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

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
//# sourceMappingURL=chunk-64KPWEC5.js.map