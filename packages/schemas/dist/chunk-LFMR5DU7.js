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
//# sourceMappingURL=chunk-LFMR5DU7.js.map