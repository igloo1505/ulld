import {
  DietUpdateOneWithoutPeriodsFollowedNestedInputSchema
} from "./chunk-LCCR5JQM.js";
import {
  NullableDateTimeFieldUpdateOperationsInputSchema
} from "./chunk-FYUHI5X3.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-VTROTMKZ.js";

// src/database/inputTypeSchemas/TimePeriodUpdateInputSchema.ts
import { z } from "zod";
var TimePeriodUpdateInputSchema = z.object({
  start: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  end: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
  Diet: z.lazy(() => DietUpdateOneWithoutPeriodsFollowedNestedInputSchema).optional()
}).strict();
var TimePeriodUpdateInputSchema_default = TimePeriodUpdateInputSchema;

export {
  TimePeriodUpdateInputSchema,
  TimePeriodUpdateInputSchema_default
};
//# sourceMappingURL=chunk-RXYAJWH7.js.map