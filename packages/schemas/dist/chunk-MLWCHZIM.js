import {
  NullableDateTimeFieldUpdateOperationsInputSchema
} from "./chunk-V2DB3NL6.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";

// src/database/inputTypeSchemas/TimePeriodUpdateWithoutDietInputSchema.ts
import { z } from "zod";
var TimePeriodUpdateWithoutDietInputSchema = z.object({
  start: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  end: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var TimePeriodUpdateWithoutDietInputSchema_default = TimePeriodUpdateWithoutDietInputSchema;

export {
  TimePeriodUpdateWithoutDietInputSchema,
  TimePeriodUpdateWithoutDietInputSchema_default
};
//# sourceMappingURL=chunk-MLWCHZIM.js.map