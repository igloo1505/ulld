import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

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
//# sourceMappingURL=chunk-WU4ASUMU.js.map