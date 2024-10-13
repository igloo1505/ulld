import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/RandomImageUpdateInputSchema.ts
import { z } from "zod";
var RandomImageUpdateInputSchema = z.object({
  path: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var RandomImageUpdateInputSchema_default = RandomImageUpdateInputSchema;

export {
  RandomImageUpdateInputSchema,
  RandomImageUpdateInputSchema_default
};
//# sourceMappingURL=chunk-ALQ4SDK3.js.map