// src/database/inputTypeSchemas/NullableFloatFieldUpdateOperationsInputSchema.ts
import { z } from "zod";
var NullableFloatFieldUpdateOperationsInputSchema = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();
var NullableFloatFieldUpdateOperationsInputSchema_default = NullableFloatFieldUpdateOperationsInputSchema;

export {
  NullableFloatFieldUpdateOperationsInputSchema,
  NullableFloatFieldUpdateOperationsInputSchema_default
};
//# sourceMappingURL=chunk-GNOT4FVG.js.map