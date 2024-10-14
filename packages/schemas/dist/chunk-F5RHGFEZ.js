import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-VTROTMKZ.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

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
//# sourceMappingURL=chunk-F5RHGFEZ.js.map