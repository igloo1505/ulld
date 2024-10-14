import {
  NullableDateTimeFieldUpdateOperationsInputSchema
} from "./chunk-FYUHI5X3.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-TKIJII67.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-VTROTMKZ.js";

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
//# sourceMappingURL=chunk-5YNSY6UX.js.map