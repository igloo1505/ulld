import {
  NullableDateTimeFieldUpdateOperationsInputSchema
} from "./chunk-V2DB3NL6.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-PNLBXL4W.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";

// src/database/inputTypeSchemas/TimePeriodUncheckedUpdateWithoutDietInputSchema.ts
import { z } from "zod";
var TimePeriodUncheckedUpdateWithoutDietInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  start: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  end: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var TimePeriodUncheckedUpdateWithoutDietInputSchema_default = TimePeriodUncheckedUpdateWithoutDietInputSchema;

export {
  TimePeriodUncheckedUpdateWithoutDietInputSchema,
  TimePeriodUncheckedUpdateWithoutDietInputSchema_default
};
//# sourceMappingURL=chunk-F5V2543K.js.map