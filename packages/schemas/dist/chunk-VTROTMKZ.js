// src/database/inputTypeSchemas/DateTimeFieldUpdateOperationsInputSchema.ts
import { z } from "zod";
var DateTimeFieldUpdateOperationsInputSchema = z.object({
  set: z.coerce.date().optional()
}).strict();
var DateTimeFieldUpdateOperationsInputSchema_default = DateTimeFieldUpdateOperationsInputSchema;

export {
  DateTimeFieldUpdateOperationsInputSchema,
  DateTimeFieldUpdateOperationsInputSchema_default
};
//# sourceMappingURL=chunk-VTROTMKZ.js.map