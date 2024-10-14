import {
  BytesFieldUpdateOperationsInputSchema
} from "./chunk-WKMKAR2K.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

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
//# sourceMappingURL=chunk-SH6A2DJN.js.map