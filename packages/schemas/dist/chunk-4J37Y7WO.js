import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-VTROTMKZ.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

// src/database/inputTypeSchemas/DailyFocusUpdateManyMutationInputSchema.ts
import { z } from "zod";
var DailyFocusUpdateManyMutationInputSchema = z.object({
  value: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var DailyFocusUpdateManyMutationInputSchema_default = DailyFocusUpdateManyMutationInputSchema;

export {
  DailyFocusUpdateManyMutationInputSchema,
  DailyFocusUpdateManyMutationInputSchema_default
};
//# sourceMappingURL=chunk-4J37Y7WO.js.map