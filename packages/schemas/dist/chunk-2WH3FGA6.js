import {
  BytesFieldUpdateOperationsInputSchema
} from "./chunk-BGJU64IY.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

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
//# sourceMappingURL=chunk-2WH3FGA6.js.map