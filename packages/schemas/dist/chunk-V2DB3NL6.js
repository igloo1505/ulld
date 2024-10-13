// src/database/inputTypeSchemas/NullableDateTimeFieldUpdateOperationsInputSchema.ts
import { z } from "zod";
var NullableDateTimeFieldUpdateOperationsInputSchema = z.object({
  set: z.coerce.date().optional().nullable()
}).strict();
var NullableDateTimeFieldUpdateOperationsInputSchema_default = NullableDateTimeFieldUpdateOperationsInputSchema;

export {
  NullableDateTimeFieldUpdateOperationsInputSchema,
  NullableDateTimeFieldUpdateOperationsInputSchema_default
};
//# sourceMappingURL=chunk-V2DB3NL6.js.map