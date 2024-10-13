import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-SOLYHFAT.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/ReadingListUncheckedUpdateManyWithoutMdxNotesInputSchema.ts
import { z } from "zod";
var ReadingListUncheckedUpdateManyWithoutMdxNotesInputSchema = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastUpdate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var ReadingListUncheckedUpdateManyWithoutMdxNotesInputSchema_default = ReadingListUncheckedUpdateManyWithoutMdxNotesInputSchema;

export {
  ReadingListUncheckedUpdateManyWithoutMdxNotesInputSchema,
  ReadingListUncheckedUpdateManyWithoutMdxNotesInputSchema_default
};
//# sourceMappingURL=chunk-VGPSMGO2.js.map