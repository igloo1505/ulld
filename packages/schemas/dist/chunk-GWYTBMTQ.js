import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-EGW2GABF.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-VTROTMKZ.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

// src/database/inputTypeSchemas/ReadingListUncheckedUpdateManyWithoutBibEntriesInputSchema.ts
import { z } from "zod";
var ReadingListUncheckedUpdateManyWithoutBibEntriesInputSchema = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastUpdate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var ReadingListUncheckedUpdateManyWithoutBibEntriesInputSchema_default = ReadingListUncheckedUpdateManyWithoutBibEntriesInputSchema;

export {
  ReadingListUncheckedUpdateManyWithoutBibEntriesInputSchema,
  ReadingListUncheckedUpdateManyWithoutBibEntriesInputSchema_default
};
//# sourceMappingURL=chunk-GWYTBMTQ.js.map