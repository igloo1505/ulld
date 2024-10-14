import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-VTROTMKZ.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

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
//# sourceMappingURL=chunk-33SR3KXZ.js.map