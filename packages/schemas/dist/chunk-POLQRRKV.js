import {
  BytesFieldUpdateOperationsInputSchema
} from "./chunk-WKMKAR2K.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

// src/database/inputTypeSchemas/WhiteboardUpdateManyMutationInputSchema.ts
import { z } from "zod";
var WhiteboardUpdateManyMutationInputSchema = z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  data: z.union([z.instanceof(Buffer), z.lazy(() => BytesFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var WhiteboardUpdateManyMutationInputSchema_default = WhiteboardUpdateManyMutationInputSchema;

export {
  WhiteboardUpdateManyMutationInputSchema,
  WhiteboardUpdateManyMutationInputSchema_default
};
//# sourceMappingURL=chunk-POLQRRKV.js.map