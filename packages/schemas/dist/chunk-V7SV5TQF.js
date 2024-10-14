import {
  NullableDateTimeFieldUpdateOperationsInputSchema
} from "./chunk-FYUHI5X3.js";
import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-EGW2GABF.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-TKIJII67.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-VTROTMKZ.js";

// src/database/inputTypeSchemas/TimePeriodUncheckedUpdateManyInputSchema.ts
import { z } from "zod";
var TimePeriodUncheckedUpdateManyInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  start: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  end: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
  dietId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var TimePeriodUncheckedUpdateManyInputSchema_default = TimePeriodUncheckedUpdateManyInputSchema;

export {
  TimePeriodUncheckedUpdateManyInputSchema,
  TimePeriodUncheckedUpdateManyInputSchema_default
};
//# sourceMappingURL=chunk-V7SV5TQF.js.map