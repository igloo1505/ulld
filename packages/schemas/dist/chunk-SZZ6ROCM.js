import {
  NullableDateTimeFieldUpdateOperationsInputSchema
} from "./chunk-FYUHI5X3.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-TKIJII67.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-VTROTMKZ.js";

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
//# sourceMappingURL=chunk-SZZ6ROCM.js.map