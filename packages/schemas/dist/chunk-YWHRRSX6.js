import {
  NullableDateTimeFieldUpdateOperationsInputSchema
} from "./chunk-V2DB3NL6.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-PNLBXL4W.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";

// src/database/inputTypeSchemas/TimePeriodUncheckedUpdateManyWithoutDietInputSchema.ts
import { z } from "zod";
var TimePeriodUncheckedUpdateManyWithoutDietInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  start: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  end: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var TimePeriodUncheckedUpdateManyWithoutDietInputSchema_default = TimePeriodUncheckedUpdateManyWithoutDietInputSchema;

export {
  TimePeriodUncheckedUpdateManyWithoutDietInputSchema,
  TimePeriodUncheckedUpdateManyWithoutDietInputSchema_default
};
//# sourceMappingURL=chunk-YWHRRSX6.js.map