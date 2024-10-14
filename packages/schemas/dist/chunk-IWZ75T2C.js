// src/database/inputTypeSchemas/FloatFieldUpdateOperationsInputSchema.ts
import { z } from "zod";
var FloatFieldUpdateOperationsInputSchema = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();
var FloatFieldUpdateOperationsInputSchema_default = FloatFieldUpdateOperationsInputSchema;

export {
  FloatFieldUpdateOperationsInputSchema,
  FloatFieldUpdateOperationsInputSchema_default
};
//# sourceMappingURL=chunk-IWZ75T2C.js.map