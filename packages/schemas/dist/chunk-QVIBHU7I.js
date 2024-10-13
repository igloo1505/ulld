import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/RandomImageUncheckedUpdateInputSchema.ts
import { z } from "zod";
var RandomImageUncheckedUpdateInputSchema = z.object({
  path: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var RandomImageUncheckedUpdateInputSchema_default = RandomImageUncheckedUpdateInputSchema;

export {
  RandomImageUncheckedUpdateInputSchema,
  RandomImageUncheckedUpdateInputSchema_default
};
//# sourceMappingURL=chunk-QVIBHU7I.js.map