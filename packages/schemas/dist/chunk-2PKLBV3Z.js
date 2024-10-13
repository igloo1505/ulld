import {
  BytesFieldUpdateOperationsInputSchema
} from "./chunk-BGJU64IY.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/DJTUpdateManyMutationInputSchema.ts
import { z } from "zod";
var DJTUpdateManyMutationInputSchema = z.object({
  type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  data: z.union([z.instanceof(Buffer), z.lazy(() => BytesFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var DJTUpdateManyMutationInputSchema_default = DJTUpdateManyMutationInputSchema;

export {
  DJTUpdateManyMutationInputSchema,
  DJTUpdateManyMutationInputSchema_default
};
//# sourceMappingURL=chunk-2PKLBV3Z.js.map