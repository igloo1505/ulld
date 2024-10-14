// src/database/inputTypeSchemas/IntFieldUpdateOperationsInputSchema.ts
import { z } from "zod";
var IntFieldUpdateOperationsInputSchema = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();
var IntFieldUpdateOperationsInputSchema_default = IntFieldUpdateOperationsInputSchema;

export {
  IntFieldUpdateOperationsInputSchema,
  IntFieldUpdateOperationsInputSchema_default
};
//# sourceMappingURL=chunk-TKIJII67.js.map