import {
  DietUpdateOneWithoutPeriodsFollowedNestedInputSchema
} from "./chunk-2AJB4TJB.js";
import {
  NullableDateTimeFieldUpdateOperationsInputSchema
} from "./chunk-V2DB3NL6.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";

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
//# sourceMappingURL=chunk-MVSFOTBJ.js.map