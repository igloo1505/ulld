// src/database/inputTypeSchemas/BytesFieldUpdateOperationsInputSchema.ts
import { z } from "zod";
var BytesFieldUpdateOperationsInputSchema = z.object({
  set: z.instanceof(Buffer).optional()
}).strict();
var BytesFieldUpdateOperationsInputSchema_default = BytesFieldUpdateOperationsInputSchema;

export {
  BytesFieldUpdateOperationsInputSchema,
  BytesFieldUpdateOperationsInputSchema_default
};
//# sourceMappingURL=chunk-BGJU64IY.js.map