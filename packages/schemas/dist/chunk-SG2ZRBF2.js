// src/database/inputTypeSchemas/NullableIntFieldUpdateOperationsInputSchema.ts
import { z } from "zod";
var NullableIntFieldUpdateOperationsInputSchema = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();
var NullableIntFieldUpdateOperationsInputSchema_default = NullableIntFieldUpdateOperationsInputSchema;

export {
  NullableIntFieldUpdateOperationsInputSchema,
  NullableIntFieldUpdateOperationsInputSchema_default
};
//# sourceMappingURL=chunk-SG2ZRBF2.js.map