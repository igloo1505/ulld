import {
  NullableDateTimeFieldUpdateOperationsInputSchema
} from "./chunk-V2DB3NL6.js";
import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-SOLYHFAT.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-PNLBXL4W.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";

// src/database/inputTypeSchemas/TimePeriodUncheckedUpdateInputSchema.ts
import { z } from "zod";
var TimePeriodUncheckedUpdateInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  start: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  end: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
  dietId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var TimePeriodUncheckedUpdateInputSchema_default = TimePeriodUncheckedUpdateInputSchema;

export {
  TimePeriodUncheckedUpdateInputSchema,
  TimePeriodUncheckedUpdateInputSchema_default
};
//# sourceMappingURL=chunk-6L2PJOVQ.js.map