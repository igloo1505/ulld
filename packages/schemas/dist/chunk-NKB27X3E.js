import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-SOLYHFAT.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

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
//# sourceMappingURL=chunk-NKB27X3E.js.map