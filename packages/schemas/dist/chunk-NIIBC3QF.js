import {
  NullableDateTimeFieldUpdateOperationsInputSchema
} from "./chunk-V2DB3NL6.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";

// src/database/inputTypeSchemas/TimePeriodUpdateManyMutationInputSchema.ts
import { z } from "zod";
var TimePeriodUpdateManyMutationInputSchema = z.object({
  start: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  end: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var TimePeriodUpdateManyMutationInputSchema_default = TimePeriodUpdateManyMutationInputSchema;

export {
  TimePeriodUpdateManyMutationInputSchema,
  TimePeriodUpdateManyMutationInputSchema_default
};
//# sourceMappingURL=chunk-NIIBC3QF.js.map