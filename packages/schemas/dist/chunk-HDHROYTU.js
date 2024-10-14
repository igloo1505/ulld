import {
  NullableDateTimeFieldUpdateOperationsInputSchema
} from "./chunk-FYUHI5X3.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-VTROTMKZ.js";

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
//# sourceMappingURL=chunk-HDHROYTU.js.map