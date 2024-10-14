import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-VTROTMKZ.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

// src/database/inputTypeSchemas/RandomImageUncheckedUpdateManyInputSchema.ts
import { z } from "zod";
var RandomImageUncheckedUpdateManyInputSchema = z.object({
  path: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var RandomImageUncheckedUpdateManyInputSchema_default = RandomImageUncheckedUpdateManyInputSchema;

export {
  RandomImageUncheckedUpdateManyInputSchema,
  RandomImageUncheckedUpdateManyInputSchema_default
};
//# sourceMappingURL=chunk-H7TMT4BD.js.map